import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../store/redux/actions/authAction";

import AccountDragonList from "../components/users/accountDragonList/AccountDragonList";

const AccountDragonPage = () => {
	const {
		authReducer: { isAuthenticated, authenticated },
		utilReducer: { loading },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchAccountDragonRequest } = authAction;

	useEffect(() => {
		dispatch(fetchAccountDragonRequest());
	}, []);

	if (isAuthenticated === false) return <Redirect to="/login" />;

	if (!authenticated) return null;

	return loading ? (
		"Loading..."
	) : (
		<div className="container">
			<AccountDragonList />
			<div>
				<Link to="/">Home</Link>
			</div>
		</div>
	);
};

export default AccountDragonPage;
