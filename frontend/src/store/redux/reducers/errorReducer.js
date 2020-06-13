import * as types from "../../../constants/types";

const intitalState = {
	msg: null,
	status: null,
};

const errorReducer = (state = intitalState, action) => {
	switch (action.type) {
		case types.GET_ERROR: {
			return {
				...state,
				msg: action.msg,
				status: action.status,
			};
		}

		case types.CLEAR_ERROR: {
			return {
				...state,
				msg: null,
				status: null,
			};
		}

		default: {
			return state;
		}
	}
};

export default errorReducer;
