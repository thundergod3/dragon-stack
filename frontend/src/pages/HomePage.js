import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../store/redux/actions/authAction";

import Generration from "../components/dragons/generation/Generration";
import DragonNew from "../components/dragons/dragonNew/DragonNew";
import AccountInfo from "../components/users/accountInfo/AccountInfo";
import PublicDragonList from "../components/dragons/publicDragonList/PublicDragonList";

const HomePage = () => {
	const {
		authReducer: { isAuthenticated, authenticated },
	} = useSelector((state) => state);

	if (!isAuthenticated) return <Redirect to="/login" />;

	return (
		isAuthenticated !== null && (
			<>
				<Generration />
				<DragonNew />
				<hr />
				<AccountInfo />
				<hr />
				<Link to="/account-dragons">Account Dragons</Link>
				<br />
				<Link to="/public-dragons">Public Dragons</Link>
			</>
		)
	);
};

export default HomePage;
