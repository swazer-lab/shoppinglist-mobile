/* @flow */

import axios from 'axios';
import 'axios-response-logger';

export const updateDefaultHeaders = (accessToken: ?string) => {
	const language = require('../assets/language/index').default.getLanguage();

	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['Accept'] = 'application/json';
	axios.defaults.headers.common['Accept-Language'] = language || 'en';

	let auth = '';
	if (accessToken) {
		auth = accessToken;
	}
	axios.defaults.headers.common.Authorization = auth;
};

export { register_api, login_api, fetch_profile_api } from './auth';
export { fetch_carts_api, fetch_cart_details_api, create_cart_api, update_cart_api, remove_cart_api } from './carts';
export { create_item_api, update_item_api, remove_item_api } from './items';
