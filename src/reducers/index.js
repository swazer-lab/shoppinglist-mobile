/* @flow */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist';

import auth from './auth';
import carts from './carts';
import items from './items';

const generateConfig = (reducer, key, blacklist, whitelist) => {
	const config = {
		storage,
		debug: __DEV__,

		key,
		blacklist,
		whitelist,
	};

	return persistReducer(config, reducer);
};

export default combineReducers({
	auth,
	carts,
	items,
});
