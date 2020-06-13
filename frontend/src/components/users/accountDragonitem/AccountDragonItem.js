import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../../../store/redux/actions/authAction";

import DragonAvatar from "../../dragons/dragonAvatar/DragonAvatar";

import { Formik } from "formik";
import "./AccountDragonItem.scss";

const AccountDragonItem = ({ dragonTrait }) => {
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const { updatedAccountDragonRequest } = authAction;

	return (
		<Formik
			enableReinitialize
			initialValues={{
				nickname: dragonTrait.nickname,
				isPublic: dragonTrait.isPublic,
				saleValue: dragonTrait.saleValue,
				sireValue: dragonTrait.sireValue,
			}}
			onSubmit={(values, actions) => {
				dispatch(
					updatedAccountDragonRequest({
						nickname: values.nickname,
						dragonId: dragonTrait.dragonId,
						isPublic: values.isPublic,
						saleValue: values.saleValue,
						sireValue: values.sireValue,
					})
				);
				setEdit(!edit);
			}}>
			{(props) => (
				<>
					<div>{dragonTrait.nickname}</div>
					<div className="form-group">
						<input
							type="text"
							value={props.values.nickname}
							onChange={props.handleChange("nickname")}
							disabled={!edit}
						/>
					</div>
					<DragonAvatar dragonTrait={dragonTrait} />
					<div>
						<span>
							Sale Value:{" "}
							<input
								type="number"
								className="account-dragon-item-input"
								disabled={!edit}
								value={props.values.saleValue}
								onChange={props.handleChange("saleValue")}
							/>
						</span>{" "}
						<span>
							Sire Value:{" "}
							<input
								type="number"
								className="account-dragon-item-input"
								disabled={!edit}
								value={props.values.sireValue}
								onChange={props.handleChange("sireValue")}
							/>
						</span>{" "}
						<span>Public: </span>
						<input
							type="checkbox"
							className="form-group mr-1"
							disabled={!edit}
							checked={props.values.isPublic}
							onChange={props.handleChange("isPublic")}
						/>
						{edit ? (
							<Button type="submit" onClick={props.handleSubmit}>
								Save
							</Button>
						) : (
							<Button onClick={() => setEdit(!edit)}>Edit</Button>
						)}
					</div>
					<hr />
				</>
			)}
		</Formik>
	);
};

export default AccountDragonItem;
