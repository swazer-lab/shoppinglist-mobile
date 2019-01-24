/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewareList.push(createLogger());
}

const enhancers = [applyMiddleware(...middlewareList)];
const initialState = {};

const persistConfig = { enhancers };

const str = createStore(reducers, initialState, compose(...enhancers));
const prstr = persistStore(str, persistConfig);

sagaMiddleware.run(sagas);

export const store = str;
export const persiststore = prstr;
