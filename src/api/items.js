/* @flow */

import axios from 'axios';
import * as urls from '../config/urls';

export const create_item_api = (cartId: string, title: string, status: 'active' | 'completed' | 'canceled' = 'active') => {
	const config = {
		params: {
			cartId,
		},
	};
	const body = {
		title,
		status,
	};

	return axios.post(urls.create_item_url, body, config);
};

export const update_item_api = (itemId: string, title: string, status: string) => {
	const config = {
		params: {
			itemId,
		},
	};
	const body = {
		title,
		status,
	};

	return axios.post(urls.update_item_url, body, config);
};

export const remove_item_api = (itemId: string) => {
	const config = {
		params: {
			itemId,
		},
	};

	return axios.post(urls.remove_item_url, null, config);
};
