const Session = require("../account/session");
const AccountTable = require("../account/table");
const { hash } = require("../account/helper");

const setSession = ({ username, res, sessionId }) => {
	let session, sessionString;

	return new Promise((resolve, reject) => {
		if (sessionId) {
			sessionString = Session.sessionString({ username, id: sessionId });

			console.log(username);

			setSessionCookie({ sessionString, res });

			resolve({ message: "session restored" });
		} else {
			session = new Session({ username });
			sessionString = session.toString();

			AccountTable.updateSessionId({
				sessionId: session.id,
				usernameHash: hash(username),
			})
				.then(() => {
					setSessionCookie({ sessionString, res });

					resolve({ message: "session created" });
				})
				.catch((error) => reject(error));
		}
	});
};

const setSessionCookie = ({ sessionString, res }) => {
	res.cookie("sessionString", sessionString, {
		expire: Date.now() + 3600000,
		httpOnly: true,
		// secure: process.env.NODE_ENV === 'PROD'
	});
};

const authenticatedAccount = ({ sessionString }) => {
	return new Promise((resolve, reject) => {
		if (!sessionString || !Session.verify(sessionString)) {
			const error = new Error("Invalid session");

			error.statusCode = 400;

			return reject(error);
		}

		const { username, id } = Session.parse(sessionString);

		AccountTable.getAccount({ usernameHash: hash(username) })
			.then(({ account }) => {
				const authenticated = account.sessionId === id;

				resolve({ authenticated, account, username });
			})
			.catch((error) => reject(error));
	});
};

module.exports = { setSession, authenticatedAccount };
