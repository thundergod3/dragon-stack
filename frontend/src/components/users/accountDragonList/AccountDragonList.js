import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import AccountDragonItem from "../accountDragonitem/AccountDragonItem";

const AccountDragonList = () => {
	const {
		authReducer: { accountDragonList },
	} = useSelector((state) => state);

	return accountDragonList.length === 0 ? (
		"You don't have any dragon in your accounts"
	) : (
		<div>
			{accountDragonList.map((dragonTrait) => (
				<div key={dragonTrait.dragonId}>
					<AccountDragonItem dragonTrait={dragonTrait} />
					<br />
				</div>
			))}
		</div>
	);
};

export default AccountDragonList;
