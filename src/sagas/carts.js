/* @flow */

import { takeLatest } from 'redux-saga/effects';

import { CartsActionTypes as ActionTypes } from '../types/ActionTypes';

function* fetchCartsSaga() {

}

function* fetchCartDetailsSaga() {

}

function* createCartSaga() {

}

function* updateCartSaga() {

}

function* removeCartSaga() {

}

export default [
	takeLatest(ActionTypes.fetch_carts, fetchCartsSaga),
	takeLatest(ActionTypes.fetch_cart_details, fetchCartDetailsSaga),
	takeLatest(ActionTypes.create_cart, createCartSaga),
	takeLatest(ActionTypes.update_cart, updateCartSaga),
	takeLatest(ActionTypes.remove_cart, removeCartSaga),
];
