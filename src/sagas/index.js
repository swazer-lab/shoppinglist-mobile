/* @flow */

import { all } from 'redux-saga/effects';

import authSagas from './auth';
import cartsSagas from './carts';

export default function* rootSaga() {
	yield all([
		...authSagas,
		...cartsSagas,
	]);
}
