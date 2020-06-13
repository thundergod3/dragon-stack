import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import dragonAction from "../../../store/redux/actions/dragonAction";

import DragonAvatar from "../dragonAvatar/DragonAvatar";
import MatingOptions from "../matingOptions/MatingOptions";

const PublicDragonItem = ({ publicDragon }) => {
	const {
		utilReducer: { loading },
	} = useSelector((state) => state);
	const [displayMatingOptions, setDisplayMatingOptions] = useState(false);
	const dispatch = useDispatch();
	const { buyDragonRequest } = dragonAction;

	return (
		<div>
			<div>{publicDragon.nickname}</div>
			<DragonAvatar dragonTrait={publicDragon} />
			<div>
				<span>Sale Value: {publicDragon.saleValue}</span>
				{" | "}
				<span>Sire Value: {publicDragon.sireValue}</span>
			</div>
			<br />
			<Button
				onClick={() =>
					dispatch(buyDragonRequest({ dragonId: publicDragon.dragonId, saleValue: publicDragon.saleValue }))
				}>
				Buy
			</Button>{" "}
			<Button onClick={() => setDisplayMatingOptions(!displayMatingOptions)}>Sire</Button>
			<br />
			{displayMatingOptions && <MatingOptions patronDragonId={publicDragon.dragonId} />}
		</div>
	);
};

export default PublicDragonItem;
