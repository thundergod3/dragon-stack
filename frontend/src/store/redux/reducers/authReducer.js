import * as types from "../../../constants/types";

const initalState = {
	userData: {},
	accountInfo: {},
	accountDragonList: [],
	isAuthenticated: null,
	authenticated: false,
};

const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.LOGIN_USER_SUCCEEDED: {
			return {
				...state,
				isAuthenticated: true,
				authenticated: true,
			};
		}

		case types.SIGN_UP_USER_SUCCEEDED: {
			return {
				...state,
				isAuthenticated: true,
				authenticated: true,
			};
		}

		case types.CHECK_AUTH_SUCCEEDED: {
			return {
				...state,
				isAuthenticated: action.authenticated,
				authenticated: true,
			};
		}
		case types.CHECK_AUTH_FAILED: {
			return {
				...state,
				isAuthenticated: false,
				authenticated: false,
			};
		}

		case types.LOGOUT_USER_SUCCEEDED: {
			return {
				...state,
				isAuthenticated: false,
				authenticated: false,
			};
		}

		case types.FETCH_ACCOUNT_INFO_SUCCEEDED: {
			return {
				...state,
				accountInfo: action.accountInfo,
			};
		}

		case types.FETCH_ACCOUNT_DRAGON_SUCCEEDED: {
			return {
				...state,
				accountDragonList: action.accountDragonList,
			};
		}

		case types.UPDATED_ACCOUNT_DRAGON_SUCCEEDED: {
			return {
				...state,
				accountDragonList: state.accountDragonList.map((accountDragon) =>
					accountDragon.dragonId === action.updatedAccountForm.dragonId
						? {
								...accountDragon,
								nickname: action.updatedAccountForm.nickname,
								isPublic: action.updatedAccountForm.isPublic,
								saleValue: action.updatedAccountForm.salevalue,
								sireValue: action.updatedAccountForm.sireValue,
						  }
						: accountDragon
				),
			};
		}

		default: {
			return state;
		}
	}
};

export default authReducer;
