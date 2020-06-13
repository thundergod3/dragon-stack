import * as types from "../../../constants/types";

const initalState = {
	dragonNew: {},
	dragonDetail: {},
	generation: {},
	publicDragonList: [],
};

const dragonReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.FETCH_DRAGON_NEW_SUCCEEDED: {
			return {
				...state,
				dragonNew: action.dragonNew,
			};
		}

		case types.FETCH_GENERATION_SUCCEEDED: {
			return {
				...state,
				generation: action.generation,
			};
		}

		case types.FETCH_PUBLIC_DRAGON_SUCCEEDED: {
			return {
				...state,
				publicDragonList: action.publicDragonList,
			};
		}

		default: {
			return state;
		}
	}
};

console.log(initalState.accountDragonList);

export default dragonReducer;
