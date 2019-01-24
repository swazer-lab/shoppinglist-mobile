/* @flow */

import { AuthActionTypes as ActionTypes } from '../types/ActionTypes';
import { updateDefaultHeaders } from '../api';

export const changeName = (name: string) => ({
	type: ActionTypes.change_name,
	name,
});

export const changeEmail = (email: string) => ({
	type: ActionTypes.change_email,
	email,
});

export const changePassword = (password: string) => ({
	type: ActionTypes.change_password,
	password,
});

export const register = () => ({
	type: ActionTypes.register,
});

export const registerResult = (hasError: boolean, accessToken: ?string = null) => {
	if (!hasError) {
		updateDefaultHeaders(accessToken);
	}

	return {
		type: ActionTypes.register_result,
		hasError,
		accessToken,
	};
};

export const login = () => ({
	type: ActionTypes.login,
});

export const loginResult = (hasError: boolean, accessToken: ?string = null) => {
	if (!hasError) {
		updateDefaultHeaders(accessToken);
	}

	return {
		type: ActionTypes.login_result,
		hasError,
		accessToken,
	};
};

export const logout = () => ({
	type: ActionTypes.logout,
});

export const logoutResult = (hasError: boolean) => ({
	type: ActionTypes.logout_result,
	hasError,
});
