/* @flow */

import { takeLatest } from 'redux-saga/effects';

import { ItemsActionTypes as ActionTypes } from '../types/ActionTypes';

function* createItemSaga() {

}

function* updateItemSaga() {

}

function* removeItemSaga() {

}

export default [
	takeLatest(ActionTypes.create_item, createItemSaga),
	takeLatest(ActionTypes.update_item, updateItemSaga),
	takeLatest(ActionTypes.remove_item, removeItemSaga),
];
