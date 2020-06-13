import HTTPMethod from "./index";

class authService {
	constructor() {
		this.HTTPMethod = HTTPMethod;
	}

	login = (userForm) => HTTPMethod.post("/account/login", userForm).then((res) => res.data);

	signUp = (userForm) => HTTPMethod.post("/account/signup", userForm).then((res) => res.data);

	logout = () => HTTPMethod.get("/account/logout");

	checkAuthenticated = () => HTTPMethod.get("/account/authenticated").then((res) => res.data);

	fetchAccountInfo = () => HTTPMethod.get("/account/info").then((res) => res.data);

	fetchAccountDragon = () => HTTPMethod.get("/account/dragons").then((res) => res.data);

	updatedAccountDragon = (updatedAccountForm) => HTTPMethod.post("/dragon/update", updatedAccountForm);
}

export default new authService();
