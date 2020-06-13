import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import dragonAction from "../../../store/redux/actions/dragonAction";

const MatingOptions = ({ patronDragonId }) => {
	const {
		authReducer: { accountDragonList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { setDragonMateRequest } = dragonAction;

	return (
		<div>
			<h4>Pick one of your dragons to mate with:</h4>
			{accountDragonList.map(({ generationId, dragonId, nickname }) => (
				<span key={dragonId}>
					<span key={generationId}>
						<Button
							onClick={() =>
								dispatch(setDragonMateRequest({ matronDragonId: dragonId, patronDragonId }))
							}>
							G{generationId}.{dragonId}.{nickname}
						</Button>{" "}
					</span>
				</span>
			))}
		</div>
	);
};

export default MatingOptions;
