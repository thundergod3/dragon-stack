import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../store/redux/actions/authAction";

import { Formik } from "formik";
import * as yup from "yup";

const SignUpPage = () => {
	const {
		errorReducer: { msg },
		authReducer: { isAuthenticated },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { signUpUserRequest } = authAction;

	const yupSchema = yup.object({
		username: yup.string().required(),
		password: yup.string().required().min(6, "The password cannot have less 6 characters"),
		confirmPassword: yup
			.string()
			.required()
			.when("password", {
				is: (val) => (val && val.length > 0 ? true : false),
				then: yup.string().oneOf([yup.ref("password")], "Both password needed to be the same"),
			}),
	});

	if (isAuthenticated) return <Redirect to="/" />;

	console.log(isAuthenticated);

	return (
		isAuthenticated !== null && (
			<Formik
				initialValues={{
					username: "",
					password: "",
					confirmPassword: "",
				}}
				onSubmit={(values, actions) => {
					dispatch(signUpUserRequest({ username: values.username, password: values.password }));
					actions.resetForm();
				}}
				validationSchema={yupSchema}>
				{(props) => (
					<>
						<h2>Dragon Stack</h2>
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
						<FormGroup>
							<FormControl
								type="password"
								value={props.values.confirmPassword}
								placeholder="confirmPassword"
								onChange={props.handleChange("confirmPassword")}
								onBlur={props.handleBlur("confirmPassword")}
							/>
							{props.touched.confirmPassword && props.errors.confirmPassword}
						</FormGroup>
						<div>
							<Button onClick={props.handleSubmit} type="submit">
								Sign Up
							</Button>
							<div className="container">
								<span>have an account ? Login {<Link to="/login">Here</Link>}</span>
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

export default SignUpPage;
