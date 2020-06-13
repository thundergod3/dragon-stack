import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../store/redux/actions/authAction";

import { Formik } from "formik";
import * as yup from "yup";

const LoginPage = () => {
	const {
		errorReducer: { msg },
		authReducer: { isAuthenticated, authenticated },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { loginUserRequest } = authAction;

	const yupSchema = yup.object({
		username: yup.string().required(),
		password: yup.string().required(),
	});

	if (isAuthenticated) return <Redirect to="/" />;

	return (
		isAuthenticated !== null && (
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={(values, actions) => {
					dispatch(loginUserRequest(values));
					actions.resetForm();
				}}
				validationSchema={yupSchema}>
				{(props) => (
					<>
						<FormGroup>
							<FormControl
								type="text"
								value={props.values.username}
								placeholder="username"
								onChange={props.handleChange("username")}
								onBlur={props.handleBlur("username")}
							/>
							<span>{props.touched.username && props.errors.username}</span>
						</FormGroup>
						<FormGroup>
							<FormControl
								type="password"
								value={props.values.password}
								placeholder="password"
								onChange={props.handleChange("password")}
								onBlur={props.handleBlur("password")}
							/>
							{props.touched.password && props.errors.password}
						</FormGroup>
						<div>
							<Button onClick={props.handleSubmit} type="submit">
								Log In
							</Button>
							<div className="container">
								<span>or do not have account ? Sign up {<Link to="/signup">Here</Link>}</span>
							</div>
							<br />
							{msg && <div>{msg}</div>}
						</div>
					</>
				)}
			</Formik>
		)
	);
};

export default LoginPage;
