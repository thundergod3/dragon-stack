import * as types from "../../../constants/types";

class utilAction {
	loadingData = () => {
		return {
			type: types.LOADING_DATA,
		};
	};
	loadedData = () => {
		return {
			type: types.LOADED_DATA,
		};
	};
}

export default new utilAction();
