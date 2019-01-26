/* @flow */

import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

export function getTopLevelNavigator() {
	return _navigator;
}

export function navigate(routeName, params) {
	_navigator.dispatch(NavigationActions.navigate({
		routeName,
		params,
	}));
}

export function replace(routeName, params) {
	_navigator.dispatch(StackActions.replace({
		routeName,
		params,
	}));
}

export function setParams(key, params) {
	_navigator.dispatch(NavigationActions.setParams({
		key,
		params,
	}));
}

export function goBack() {
	_navigator.dispatch(NavigationActions.back());
}

export function popToTop() {
	_navigator.dispatch(StackActions.popToTop());
}

export function popToRoute(routeName) {
	_navigator.dispatch(StackActions.popToRoute(routeName));
}
