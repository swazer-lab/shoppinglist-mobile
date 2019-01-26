/* @flow */

import { CartsActionTypes as ActionTypes } from '../types/ActionTypes';

export const changeCartTitle = (title: string) => ({
	type: ActionTypes.change_cart_title,
	title,
});
export const changeCartNotes = (notes: string) => ({
	type: ActionTypes.change_cart_notes,
	notes,
});
export const addCartItem = () => ({
	type: ActionTypes.add_cart_item,
});
export const changeCartItemTitle = (uuid: string, title: string) => ({
	type: ActionTypes.change_cart_item_title,
	uuid,
	title,
});
export const changeCartItemStatus = (uuid: string, status: string) => ({
	type: ActionTypes.change_cart_item_status,
	uuid,
	status,
});
export const removeCartItem = (uuid: string) => ({
	type: ActionTypes.remove_cart_item,
	uuid,
});
export const setDraftCart = (uuid: string) => ({
	type: ActionTypes.set_draft_cart,
	uuid,
});
export const clearDraftCart = () => ({
	type: ActionTypes.clear_draft_cart,
});


export const fetchCarts = () => ({
	type: ActionTypes.fetch_carts,
});
export const fetchCartsResult = (hasError: boolean, carts: []) => ({
	type: ActionTypes.fetch_carts_result,
	hasError,
	carts,
});

export const createCart = (draftCart: {}) => ({
	type: ActionTypes.create_cart,
	draftCart,
});
export const createCartResult = (hasError: boolean) => ({
	type: ActionTypes.create_cart_result,
	hasError,
});

export const updateCart = (uuid: string, cart: {}) => ({
	type: ActionTypes.update_cart,
	uuid,
	cart,
});
export const updateCartResult = (hasError: boolean) => ({
	type: ActionTypes.update_cart_result,
	hasError,
});

export const removeCart = (uuid: string) => ({
	type: ActionTypes.remove_cart,
	uuid,
});
export const removeCartResult = (hasError: boolean) => ({
	type: ActionTypes.remove_cart_result,
	hasError,
});
