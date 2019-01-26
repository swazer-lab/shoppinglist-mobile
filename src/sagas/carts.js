/* @flow */

import { takeLatest } from 'redux-saga/effects';

import { CartsActionTypes as ActionTypes } from '../types/ActionTypes';

function* fetchCartsSaga() {

}

function* createCartSaga() {

}

function* updateCartSaga() {

}

function* removeCartSaga() {

}

export default [
	takeLatest(ActionTypes.fetch_carts, fetchCartsSaga),
	takeLatest(ActionTypes.create_cart, createCartSaga),
	takeLatest(ActionTypes.update_cart, updateCartSaga),
	takeLatest(ActionTypes.remove_cart, removeCartSaga),
];
