import { fork, all } from "redux-saga/effects";
import authSaga from "./saga/authSaga";
import dragonSaga from "./saga/dragonSaga";

export default function* rootSaga() {
	yield all([fork(authSaga)]);
	yield all([fork(dragonSaga)]);
}
