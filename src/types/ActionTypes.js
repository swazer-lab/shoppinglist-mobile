/* @flow */

export const NavigationServiceActionTypes = {
	navigate: 'NAVIGATION_SERVICE__NAVIGATE',
	replace: 'NAVIGATION_SERVICE_REPLACE',
	go_back: 'NAVIGATION_SERVICE__GO_BACK',
	set_params: 'NAVIGATION_SERVICE__SET_PARAMS',
	pop_to_top: 'NAVIGATION_SERVICE__POP_TO_TOP',
	pop_to_route: 'NAVIGATION_SERVICE__POP_TO_ROUTE',
};

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
	add_cart_item: 'CARTS__ADD_CART_ITEM',
	change_cart_item_title: 'CARTS__CHANGE_CART_ITEM_TITLE',
	change_cart_item_status: 'CARTS__CHANGE_CART_ITEM_STATUS',
	remove_cart_item: 'CARTS__REMOVE__CART_ITEM',
	set_draft_cart: 'CARTS__SET_DRAFT_CART',
	clear_draft_cart: 'CARTS__CLEAR_DRAFT_CART',

	fetch_carts: 'CARTS__FETCH_CARTS',
	fetch_carts_result: 'CARTS__FETCH_CARTS_RESULT',

	create_cart: 'CARTS__CREATE_CART',
	create_cart_result: 'CARTS__CREATE_CART_RESULT',

	update_cart: 'CARTS__UPDATE_CART',
	update_cart_result: 'CARTS__UPDATE_CART_RESULT',

	remove_cart: 'CARTS__REMOVE_CART',
	remove_cart_result: 'CARTS__REMOVE_CART_RESULT',
};
