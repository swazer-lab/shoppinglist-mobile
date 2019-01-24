/* @flow */

import { all } from 'redux-saga/effects';

import authSagas from './auth';
import cartsSagas from './carts';
import itemsSagas from './items';

export default function* rootSaga() {
	yield all([
		...authSagas,
		...cartsSagas,
		...itemsSagas,
	]);
}
