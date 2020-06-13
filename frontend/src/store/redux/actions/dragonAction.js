import * as types from "../../../constants/types";

class dragonAction {
	fetchDragonNewRequest = () => {
		return {
			type: types.FETCH_DRAGON_NEW_REQUEST,
		};
	};
	fetchDragonNewSucceeded = (dragonNew) => {
		return {
			type: types.FETCH_DRAGON_NEW_SUCCEEDED,
			dragonNew,
		};
	};

	fetchGenerationRequest = () => {
		return {
			type: types.FETCH_GENERATION_REQUEST,
		};
	};
	fetchGenerationSucceeded = (generation) => {
		return {
			type: types.FETCH_GENERATION_SUCCEEDED,
			generation,
		};
	};

	fetchNextGeneration = () => {
		return {
			type: types.FETCH_NEXT_GENERATION_REQUEST,
		};
	};

	fetchPublicDragonRequest = () => {
		return {
			type: types.FETCH_PUBLIC_DRAGON_REQUEST,
		};
	};
	fetchPublicDragonSucceeded = (publicDragonList) => {
		return {
			type: types.FETCH_PUBLIC_DRAGON_SUCCEEDED,
			publicDragonList,
		};
	};

	buyDragonRequest = (dragonInfoBuy) => {
		return {
			type: types.BUY_DRAGON_REQUEST,
			dragonInfoBuy,
		};
	};

	setDragonMateRequest = (dragonMate) => {
		return {
			type: types.SET_DRAGON_MATE_REQUEST,
			dragonMate,
		};
	};
}

export default new dragonAction();
