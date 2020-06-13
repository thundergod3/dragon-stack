import * as types from "../../../constants/types";

const intialState = {
	loading: false,
};

const utilReducer = (state = intialState, action) => {
	switch (action.type) {
		case types.LOADING_DATA: {
			return {
				...state,
				loading: true,
			};
		}
		case types.LOADED_DATA: {
			return {
				...state,
				loading: false,
			};
		}

		default: {
			return state;
		}
	}
};

export default utilReducer;
