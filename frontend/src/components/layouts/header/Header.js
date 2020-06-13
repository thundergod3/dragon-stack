import React from "react";
import { Button } from "react-bootstrap";

import { useSeletor, useDispatch } from "react-redux";
import authAction from "../../../store/redux/actions/authAction";

import "./Header.scss";

const Header = () => {
	const dispatch = useDispatch();
	const { logoutUserRequest } = authAction;

	return (
		<div>
			<Button onClick={() => dispatch(logoutUserRequest())} className="logout-button">
				Log Out
			</Button>
		</div>
	);
};

export default Header;
