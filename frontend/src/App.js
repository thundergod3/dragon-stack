import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "./store/redux/actions/authAction";

import "./App.scss";

import Header from "./components/layouts/header/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AccountDragonPage from "./pages/AccountDragonPage";
import PublicDragonPage from "./pages/PublicDragonPage";

const App = () => {
	const {
		authReducer: { isAuthenticated },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { checkAuthRequest } = authAction;

	useEffect(() => {
		dispatch(checkAuthRequest());
	}, [isAuthenticated]);

	return (
		<>
			<Header />
			<div className="container">
				<h2>Dragon Stack from React</h2>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={SignUpPage} />
					<Route exact path="/account-dragons" component={AccountDragonPage} />
					<Route exact path="/public-dragons" component={PublicDragonPage} />
				</Switch>
			</div>
		</>
	);
};

export default App;
