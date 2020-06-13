import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";

import dragonService from "../../services/dragonService";

import * as types from "../../constants/types";
import history from "../../constants/history";

import dragonAction from "../redux/actions/dragonAction";
import errorAction from "../redux/actions/errorAction";
import utilAction from "../redux/actions/utilAction";

function* fetchDragonNew() {
	yield put(utilAction.loadingData());
	try {
		const response = yield dragonService.fetchDragonNew();

		yield put(dragonAction.fetchDragonNewSucceeded(response.dragon));
		yield put(errorAction.clearError());
		yield put(utilAction.loadedData());
	} catch (error) {
		yield put(errorAction.getError(error.response.message, error.response.status));
		yield put(utilAction.loadedData());
	}
}

function* fetchGeneration() {
	try {
		const response = yield dragonService.fetchGeneration();
		yield put(dragonAction.fetchGenerationSucceeded(response.generation));
	} catch (error) {
		console.log(error);
	}
}

function* fetchNextGeneration() {
	if (history.location.pathname === "/") {
		yield call(fetchGeneration);

		const {
			generation: { expiration },
		} = yield select((state) => state.dragonReducer);

		let delayTime = new Date(expiration).getTime() - new Date().getTime();

		if (delayTime < 3000) {
			delayTime = 3000;
		}
		yield delay(delayTime);
		yield call(fetchNextGeneration);
	}
}

function* fetchPublicDragon() {
	yield put(utilAction.loadingData());
	try {
		const response = yield dragonService.fetchPublicDragon();
		yield put(dragonAction.fetchPublicDragonSucceeded(response.dragons));
		yield put(utilAction.loadedData());
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError(error.response.data.message));
		yield put(utilAction.loadedData());
	}
}

function* buyDragon({ dragonInfoBuy }) {
	try {
		const response = yield dragonService.buyDragon(dragonInfoBuy);
		alert(response.message);
		yield history.push("/account-dragons");
	} catch (error) {
		console.log(error);
		yield alert(error.response.data.message);
	}
}

function* setMateDragon({ dragonMate }) {
	try {
		const response = yield dragonService.setDragonMate(dragonMate);
		alert(response.message);
	} catch (error) {
		console.log(error);
		yield alert(error.response.data.message);
		yield history.push("/account-dragons");
	}
}

export default function* dragonSaga() {
	yield takeLatest(types.FETCH_DRAGON_NEW_REQUEST, fetchDragonNew);
	yield takeLatest(types.FETCH_NEXT_GENERATION_REQUEST, fetchNextGeneration);
	yield takeLatest(types.FETCH_PUBLIC_DRAGON_REQUEST, fetchPublicDragon);
	yield takeLatest(types.BUY_DRAGON_REQUEST, buyDragon);
	yield takeLatest(types.SET_DRAGON_MATE_REQUEST, setMateDragon);
}
