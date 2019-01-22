const url = (link) => `http://localhost:5000/${link}`;

// Account
export const REGISTER = () => url('account/register');
export const LOGIN = () => url('account/login');
export const PROFILE = () => url('account/profile');
export const FETCH_USERS = () => url('account/users');

// Cart
export const FETCH_CARTS = () => url('cart/');
export const FETCH_CART = (id) => url(`cart/show/${id}`);
export const CREATE_CART = () => url('cart/create');
export const UPDATE_CART = (id) => url(`cart/update/${id}`);
export const DESTROY_CART = (id) => url(`cart/destroy/${id}`);

// Items
export const CREATE_ITEM = (cartId) => url(`cart/createItem/${cartId}`);
export const UPDATE_ITEM = (itemId) => url(`cart/updateItem/${itemId}`);
export const DESTROY_ITEM = (itemId) => url(`cart/destroyItem/${itemId}`);