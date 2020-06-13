import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import PublicDragonItem from "../publicDragonItem/PublicDragonItem";

const PublicDragonList = () => {
	const {
		dragonReducer: { publicDragonList },
	} = useSelector((state) => state);

	return publicDragonList.length === 0 ? (
		"Don't have any public dragon"
	) : (
		<div>
			<h3>Public Dragons</h3>
			{publicDragonList.map((publicDragon) => (
				<div key={publicDragon.dragonId}>
					<PublicDragonItem publicDragon={publicDragon} />
					<hr />
				</div>
			))}
			<Link to="/">Home</Link>
		</div>
	);
};

export default PublicDragonList;
