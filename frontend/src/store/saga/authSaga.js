import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";

import authService from "../../services/authService";

import * as types from "../../constants/types";
import authAction from "../redux/actions/authAction";
import errorAction from "../redux/actions/errorAction";
import utilAction from "../redux/actions/utilAction";

function* login({ userForm }) {
	try {
		const response = yield authService.login(userForm);
		yield put(authAction.loginUserSucceeded());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
	}
}

function* signUp({ userForm }) {
	try {
		const response = yield authService.signUp(userForm);
		yield put(authAction.signUpUserSucceeded());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
	}
}

function* logout() {
	try {
		yield authService.logout();
		yield put(authAction.logoutUserSucceeded());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
	}
}

function* checkAuthenticated() {
	try {
		const response = yield authService.checkAuthenticated();
		yield put(authAction.checkAuthSucceeded(response.authenticated));
		yield put(errorAction.clearError());
	} catch (error) {
		console.log(error);
		yield put(authAction.checkAuthFailed());
		yield put(errorAction.getError(error.response.data.message));
	}
}

function* fetchAccountInfo() {
	yield put(utilAction.loadingData());
	try {
		const response = yield authService.fetchAccountInfo();
		console.log(response);
		yield put(authAction.fetchAccountInfoSucceeded(response.info));
		yield put(utilAction.loadedData());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
		yield put(utilAction.loadedData());
	}
}

function* fetchAccountDragon() {
	yield put(utilAction.loadingData());
	try {
		const response = yield authService.fetchAccountDragon();
		yield put(authAction.fetchAccountDragonSucceeded(response.dragons));
		yield put(utilAction.loadedData());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
		yield put(utilAction.loadedData());
	}
}

function* updatedAccountDragon({ updatedAccountForm }) {
	try {
		const response = yield authService.updatedAccountDragon(updatedAccountForm);
		yield put(authAction.updatedAccountDragonSucceeded(updatedAccountForm));
		yield put(errorAction.clearError());
	} catch (error) {
		console.log(error);
		alert(error.response.data.message);
	}
}

export default function* authSaga() {
	yield takeLatest(types.LOGIN_USER_REQUEST, login);
	yield takeLatest(types.SIGN_UP_USER_REQUEST, signUp);
	yield takeLatest(types.LOGOUT_USER_REQUEST, logout);
	yield takeLatest(types.CHECK_AUTH_REQUEST, checkAuthenticated);
	yield takeLatest(types.FETCH_ACCOUNT_INFO_REQUEST, fetchAccountInfo);
	yield takeLatest(types.FETCH_ACCOUNT_DRAGON_REQUEST, fetchAccountDragon);
	yield takeLatest(types.UPDATED_ACCOUNT_DRAGON_REQUEST, updatedAccountDragon);
}
