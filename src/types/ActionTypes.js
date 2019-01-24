/* @flow */

export const AuthActionTypes = {
	change_name: 'AUTH__CHANGE_NAME',
	change_email: 'AUTH__CHANGE_EMAIL',
	change_password: 'AUTH__CHANGE_PASSWORD',
	change_phone: 'AUTH__CHANGE_PHONE',

	login: 'AUTH__LOGIN',
	login_result: 'AUTH__LOGIN_RESULT',

	register: 'AUTH__REGISTER',
	register_result: 'AUTH__REGISTER_RESULT',

	logout: 'AUTH__LOGOUT',
	logout_result: 'AUTH__LOGOUT_RESULT',
};

export const CartsActionTypes = {
	change_cart_title: 'CARTS__CHANGE_CART_TITLE',
	change_cart_notes: 'CARTS__CHANGE_CART_NOTES',
	clear_draft_cart: 'CARTS__CLEAR_DRAFT_CART',

	fetch_carts: 'CARTS__FETCH_CARTS',
	fetch_carts_result: 'CARTS__FETCH_CARTS_RESULT',

	fetch_cart_details: 'CARTS__FETCH_CART_DETAILS',
	fetch_cart_details_result: 'CARTS__FETCH_CART_DETAILS_RESULT',

	create_cart: 'CARTS__CREATE_CART',
	create_cart_result: 'CARTS__CREATE_CART_RESULT',

	update_cart: 'CARTS__UPDATE_CART',
	update_cart_result: 'CARTS__UPDATE_CART_RESULT',

	remove_cart: 'CARTS__REMOVE_CART',
	remove_cart_result: 'CARTS__REMOVE_CART_RESULT',
};

export const ItemsActionTypes = {
	change_item_title: 'ITEMS__CHANGE_ITEM_TITLE',
	change_item_status: 'ITEMS__CHANGE_ITEM_STATUS',
	clear_draft_item: 'ITEMS__CLEAR_DRAFT_ITEM',

	create_item: 'ITEMS__CREATE_ITEM',
	create_item_result: 'ITEMS__CREATE_ITEM_RESULT',

	update_item: 'ITEMS__UPDATE_ITEM',
	update_item_result: 'ITEMS__UPDATE_ITEM_RESULT',

	remove_item: 'ITEMS__REMOVE_ITEM',
	remove_item_result: 'ITEMS__REMOVE_ITEM_RESULT',
};
