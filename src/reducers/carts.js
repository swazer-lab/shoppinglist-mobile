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
			const changedCartItemTitleIndex = newCartItemsList.findIndex(item => item.uuid === action.uuid);
			newCartItemsList[changedCartItemTitleIndex] =
				{ ...newCartItemsList[changedCartItemTitleIndex], title: action.title };

			return {
				...state,
				draftCart: {
					...state.draftCart,
					items: newCartItemsList,
				},
			};
		case ActionTypes.change_cart_item_status:
			const changedCartItemStatus = newCartItemsList.findIndex(item => item.uuid === action.uuid);
			newCartItemsList[changedCartItemStatus] =
				{ ...newCartItemsList[changedCartItemStatus], status: action.status };

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
		case ActionTypes.set_draft_cart:
			return {
				...state,
				draftCart: newCartsList.filter(cart => cart.uuid === action.uuid)[0],
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

		case ActionTypes.update_cart:
			const updatedCartIndex = newCartsList.findIndex(cart => cart.uuid === action.uuid);
			newCartsList[updatedCartIndex] = action.cart;

			return {
				...state,
				carts: newCartsList,
			};

		case ActionTypes.remove_cart:
			const removedCartIndex = newCartsList.findIndex(cart => cart.uuid === action.uuid);
			newCartsList.splice(removedCartIndex, 1);

			return {
				...state,
				carts: newCartsList,
			};
	}

	return state;
}
