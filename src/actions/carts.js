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

export const fetchCartDetails = (cartId: string) => ({
	type: ActionTypes.fetch_cart_details,
	cartId,
});
export const fetchCartDetailsResult = (hasError: boolean, cart: {}) => ({
	type: ActionTypes.fetch_cart_details_result,
	hasError,
	cart,
});

export const createCart = () => ({
	type: ActionTypes.create_cart,
});
export const createCartResult = (hasError: boolean) => ({
	type: ActionTypes.create_cart_result,
	hasError,
});

export const updateCart = (cartId: string) => ({
	type: ActionTypes.update_cart,
	cartId,
});
export const updateCartResult = (hasError: boolean) => ({
	type: ActionTypes.update_cart_result,
	hasError,
});

export const removeCart = (cartId: string) => ({
	type: ActionTypes.remove_cart,
	cartId,
});
export const removeCartResult = (hasError: boolean) => ({
	type: ActionTypes.remove_cart_result,
	hasError,
});
