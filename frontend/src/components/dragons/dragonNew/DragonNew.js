import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import dragonAction from "../../../store/redux/actions/dragonAction";

import DragonAvatar from "../dragonAvatar/DragonAvatar";

import { Button } from "react-bootstrap";

const DragonNew = () => {
	const dispatch = useDispatch();
	const { fetchDragonNewRequest } = dragonAction;

	return (
		<>
			<Button onClick={() => dispatch(fetchDragonNewRequest())}>New Dragon</Button>
			<div>
				<DragonAvatar />
			</div>
		</>
	);
};

export default DragonNew;
