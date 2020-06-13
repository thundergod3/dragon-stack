import * as types from "../../../constants/types";

class authAction {
	loginUserRequest = (userForm) => {
		return {
			type: types.LOGIN_USER_REQUEST,
			userForm,
		};
	};
	loginUserSucceeded = () => {
		return {
			type: types.LOGIN_USER_SUCCEEDED,
		};
	};

	signUpUserRequest = (userForm) => {
		return {
			type: types.SIGN_UP_USER_REQUEST,
			userForm,
		};
	};
	signUpUserSucceeded = () => {
		return {
			type: types.SIGN_UP_USER_SUCCEEDED,
		};
	};

	logoutUserRequest = (userForm) => {
		return {
			type: types.LOGOUT_USER_REQUEST,
			userForm,
		};
	};
	logoutUserSucceeded = () => {
		return {
			type: types.LOGOUT_USER_SUCCEEDED,
		};
	};

	checkAuthRequest = () => {
		return {
			type: types.CHECK_AUTH_REQUEST,
		};
	};
	checkAuthSucceeded = (authenticated) => {
		return {
			type: types.CHECK_AUTH_SUCCEEDED,
			authenticated,
		};
	};
	checkAuthFailed = () => {
		return {
			type: types.CHECK_AUTH_FAILED,
		};
	};

	fetchAccountInfoRequest = () => {
		return {
			type: types.FETCH_ACCOUNT_INFO_REQUEST,
		};
	};
	fetchAccountInfoSucceeded = (accountInfo) => {
		return {
			type: types.FETCH_ACCOUNT_INFO_SUCCEEDED,
			accountInfo,
		};
	};

	fetchAccountDragonRequest = () => {
		return {
			type: types.FETCH_ACCOUNT_DRAGON_REQUEST,
		};
	};
	fetchAccountDragonSucceeded = (accountDragonList) => {
		return {
			type: types.FETCH_ACCOUNT_DRAGON_SUCCEEDED,
			accountDragonList,
		};
	};

	updatedAccountDragonRequest = (updatedAccountForm) => {
		return {
			type: types.UPDATED_ACCOUNT_DRAGON_REQUEST,
			updatedAccountForm,
		};
	};
	updatedAccountDragonSucceeded = (updatedAccountForm) => {
		return {
			type: types.UPDATED_ACCOUNT_DRAGON_SUCCEEDED,
			updatedAccountForm,
		};
	};
}

export default new authAction();
