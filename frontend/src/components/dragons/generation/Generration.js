import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import dragonAction from "../../../store/redux/actions/dragonAction";

const Generration = () => {
	const {
		dragonReducer: {
			generation: { generationId, expiration },
		},
	} = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchNextGeneration } = dragonAction;

	useEffect(() => {
		dispatch(fetchNextGeneration());
	}, []);

	return (
		<div>
			<h3>Generation {generationId}. Expires on:</h3>
			<h4>{expiration}</h4>
		</div>
	);
};

export default Generration;
