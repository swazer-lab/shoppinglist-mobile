/* @flow */

import axios from 'axios';
import * as urls from '../config/urls';

export const register_api = (name: string, email: string, password: string, phone: string) => {
	const body = {
		name,
		email,
		password,
		phone,
	};

	return axios.post(urls.register_url, body);
};

export const login_api = (email: string, password: string) => {
	const headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
	};

	const body = {
		email,
		password,
	};

	return axios.post(urls.login_url, body, headers);
};

export const fetch_profile_api = () => {
	return axios.get(urls.fetch_profile_url);
};
