import axios from 'axios';
import 'axios-response-logger';
import * as qs from 'qs';
import { REGISTER, LOGIN, PROFILE, FETCH_USERS, FETCH_CARTS, FETCH_CART, CREATE_CART, UPDATE_CART, DESTROY_CART, CREATE_ITEM, UPDATE_ITEM, DESTROY_ITEM } from './urls';
export const updateDefaultHeaders = (accessToken) => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common.Accept = 'application/json';

    let auth ='';
    if (accessToken) {
        auth = accessToken
    }

    axios.defaults.headers.common.Authorization = auth;
};

export const register = (name, email, password, phone) => {
    const url = REGISTER();
    const body = {name, email, password, phone};
    return axios.post(url, body);
};

export const login = (email, password) => {
    const url = LOGIN();
    const headers: {} = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = {
        email, password
    };

    return axios.post(url, qs.stringify(body), headers);
};

export const profile = () => {
    return axios.get(PROFILE());
};

export const fetchUsers = () => {
    return axios.get(FETCH_USERS());
};

export const fetchCarts = () => {
    return axios.get(FETCH_CARTS());
};

export const fetchCart = (id) => {
    const url = FETCH_CART(id);
    return axios.get(url);
};

export const createCart = (title, note, createdAt, owner, participants, items) => {
    const url = CREATE_CART();
    const body = {title, note, createdAt, owner, participants, items};
    return axios.post(url, body);
};

export const updateCart = (id, title, note, createdAt, owner, participants, items) => {
    const url = UPDATE_CART(id);
    const body = {title, note, createdAt, owner, participants, items};
    return axios.post(url, body);
};

export const destroyCart = (id) => {
    return axios.post(DESTROY_CART(id));
};


export const createItem = (cartId, title, status) => {
    const url = CREATE_ITEM(cartId);
    const body = {title, status};
    return axios.post(url, body);
};

export const updateItem = (itemId, title, status) => {
    const url = UPDATE_ITEM(itemId);
    const body = {title, status};
    return axios.post(url, body);
};

export const destroyItem = (itemId) => {
    const url = DESTROY_ITEM(itemId);
    return axios.post(url);
};
