import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../../../store/redux/actions/authAction";

const AccountInfo = () => {
	const {
		authReducer: {
			accountInfo: { username, balance },
		},
		utilReducer: { loading },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchAccountInfoRequest } = authAction;

	useEffect(() => {
		dispatch(fetchAccountInfoRequest());
	}, []);

	return loading ? (
		"Loading"
	) : (
		<div className="container-fluid">
			<h3>Account Info</h3>
			<div>Username: {username}</div>
			<div>Balance: {balance}</div>
		</div>
	);
};

export default AccountInfo;
