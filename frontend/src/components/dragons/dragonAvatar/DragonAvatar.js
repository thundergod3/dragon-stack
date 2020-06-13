import React from "react";

import { useSelector } from "react-redux";

import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from "../../../images/index";
import "./DragonAvatar.scss";

const DragonAvatar = ({ dragonTrait }) => {
	let newObjectDragon;
	let {
		dragonReducer: { dragonNew },
		utilReducer: { loading },
		errorReducer: { msg, status },
	} = useSelector((state) => state);

	if (dragonTrait) {
		newObjectDragon = Object.assign(dragonTrait, {});
	} else {
		newObjectDragon = Object.assign(dragonNew, {});
	}

	const { dragonId, generationId, nickname, birthdate, traits } = newObjectDragon;

	const propertyAva = {
		backgroundColor: { black: "#263238", white: "#cfd8dc", green: "#a5d6a7", blue: "#0277bd" },
		build: { slender, stocky, sporty, skinny },
		pattern: { plain, striped, spotted, patchy },
		size: { small: 100, medium: 140, large: 180, enormou: 220 },
	};

	const dragonImage = () => {
		const dragonProperty = {};

		traits.forEach((trait) => {
			const { traitType, traitValue } = trait;
			dragonProperty[traitType] = propertyAva[traitType][traitValue];
		});

		const { backgroundColor, build, pattern, size } = dragonProperty;

		const sizing = { width: size ? size : 100, height: size ? size : 100 };

		return (
			<div className="dragon-avatar-image-wrapper">
				<div className="dragon-avatar-image-background" style={{ backgroundColor, ...sizing }}></div>
				<img src={pattern} className="dragon-avatar-image-pattern" style={{ ...sizing }} />
				<img src={build} className="dragon-avatar-image" style={{ ...sizing }} />
			</div>
		);
	};

	if (loading) return <div>Loading...</div>;

	if (msg) return <div>{msg}</div>;

	return (
		Object.keys(newObjectDragon).length !== 0 && (
			<>
				<span>G{generationId}</span>
				<span>I{dragonId}</span>
				{traits && traits.map((trait) => trait.traitValue).join(", ")}
				{dragonImage()}
			</>
		)
	);
};

export default DragonAvatar;
