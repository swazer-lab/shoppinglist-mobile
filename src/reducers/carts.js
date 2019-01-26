/* @flow */

import { CartsActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
	draftCart: {
		title: '',
		notes: '',

		items: [],
		users: [],
	},
	carts: [],
};

export default function (state = initialState, action) {
	const newCartsList = [...state.carts];
	const newCartItemsList = [...state.draftCart.items];

	switch (action.type) {
		case ActionTypes.change_cart_title:
			return {
				...state,
				draftCart: {
					...state.draftCart,
					title: action.title,
				},
			};
		case ActionTypes.change_cart_notes:
			return {
				...state,
				draftCart: {
					...state.draftCart,
					notes: action.notes,
				},
			};
		case ActionTypes.add_cart_item:
			return {
				...state,
				draftCart: {
					...state.draftCart,
					items: [...state.draftCart.items, { uuid: require('uuid/v4')(), title: '', status: 'active' }],
				},
			};
		case ActionTypes.change_cart_item_title:
			const changedCartItemTitleIndex = newCartItemsList.findIndex(x => x.uuid === action.uuid);
			newCartItemsList[changedCartItemTitleIndex] =
				{ ...newCartItemsList[changedCartItemTitleIndex], title: action.title };

			return {
				...state,
				draftCart: {
					...state.draftCart,
					items: newCartItemsList,
				},
			};
		case ActionTypes.remove_cart_item:
			const removedCartItemIndex = newCartItemsList.findIndex(item => item.uuid === action.uuid);
			newCartItemsList.splice(removedCartItemIndex, 1);

			return {
				...state,
				draftCart: {
					...state.draftCart,
					items: newCartItemsList,
				},
			};
		case ActionTypes.clear_draft_cart:
			return {
				...state,
				draftCart: initialState.draftCart,
			};

		case ActionTypes.create_cart:
			return {
				...state,
				carts: [...newCartsList, { ...action.draftCart, uuid: require('uuid/v4')() }],
			};
	}

	return state;
}
