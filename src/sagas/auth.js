/* @flow */

import { takeLatest } from 'redux-saga/effects';

import { AuthActionTypes as ActionTypes } from '../types/ActionTypes';


function* registerSaga() {

}

function* loginSaga() {

}

export default [
	takeLatest(ActionTypes.register, registerSaga),
	takeLatest(ActionTypes.login, loginSaga),
];
