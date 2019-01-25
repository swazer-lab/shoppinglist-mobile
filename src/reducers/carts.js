/* @flow */

import { CartsActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
	draftCarts: [],
	carts: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
