import { combineReducers } from "redux";
import authReducer from "./redux/reducers/authReducer";
import dragonReducer from "./redux/reducers/dragonReducer";
import errorReducer from "./redux/reducers/errorReducer";
import utilReducer from "./redux/reducers/utilReducer";

const rootReducer = combineReducers({
	authReducer,
	dragonReducer,
	errorReducer,
	utilReducer,
});

export default rootReducer;
