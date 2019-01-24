/* @flow */

import axios from 'axios';
import * as urls from '../config/urls';

export const fetch_carts_api = () => {
	return axios.get(urls.fetch_carts_url);
};

export const fetch_cart_details_api = (cartId: string) => {
	const config = {
		params: {
			cartId,
		},
	};

	return axios.get(urls.fetch_cart_details_url, config);
};

export const create_cart_api = (name: string, notes: string, createdAt: Date) => {
	const body = {
		name,
		notes,
		createdAt,
	};

	return axios.post(urls.create_cart_url, body);
};

export const update_cart_api = (cartId: string, name, notes: string) => {
	const config = {
		params: {
			cartId,
		},
	};
	const body = {
		name,
		notes,
	};

	return axios.post(urls.update_cart_url, body, config);
};

export const remove_cart_api = (cartId: string) => {
	const config = {
		params: {
			cartId,
		},
	};

	return axios.post(urls.remove_cart_url, null, config);
};
