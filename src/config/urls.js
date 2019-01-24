/* @flow */

const root = 'http://localhost:5000/';

// Account Urls
const accountRoot = root.concat('account/');
export const register_url = accountRoot.concat('register');
export const login_url = accountRoot.concat('login');
export const fetch_profile_url = accountRoot.concat('profile');

// Cart Urls
const cartRoot = root.concat('cart/');
export const fetch_carts_url = cartRoot.concat('fetch');
export const fetch_cart_details_url = cartRoot.concat('details'); // cartId
export const create_cart_url = cartRoot.concat('create');
export const update_cart_url = cartRoot.concat('update'); // cartId
export const remove_cart_url = cartRoot.concat('remove'); // cartId


// Items Urls
const itemRoot = root.concat('item/');
export const create_item_url = itemRoot.concat('create'); // cartId
export const update_item_url = itemRoot.concat('update'); // itemId
export const remove_item_url = itemRoot.concat('remove'); // itemId
