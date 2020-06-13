import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import dragonAction from "../store/redux/actions/dragonAction";
import authAction from "../store/redux/actions/authAction";

import PublicDragonList from "../components/dragons/publicDragonList/PublicDragonList";

const PublicDragonPage = () => {
	const {
		authReducer: { isAuthenticated, authenticated },
		utilReducer: { loading },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchPublicDragonRequest } = dragonAction;
	const { fetchAccountDragonRequest } = authAction;

	useEffect(() => {
		dispatch(fetchPublicDragonRequest());
		dispatch(fetchAccountDragonRequest());
	}, []);

	if (isAuthenticated === false) return <Redirect to="/login" />;

	console.log(isAuthenticated);

	if (!authenticated) return null;

	return loading ? (
		"Loading..."
	) : (
		<div className="container-fluid">
			<PublicDragonList />
		</div>
	);
};

export default PublicDragonPage;
