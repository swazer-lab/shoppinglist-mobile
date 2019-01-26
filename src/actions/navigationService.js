/* @flow */

import * as navigationService from '../config/navigationService';
import { NavigationServiceActionTypes as ActionTypes } from '../types/ActionTypes';

export const navigate = (routeName: string, params: ?any = null) => {
	navigationService.navigate(routeName, params);
	return {
		type: ActionTypes.navigate,
		firebase: 'navigate',
		routeName,
		params,
	};
};
export const replace = (routeName: string, params: ?any = null) => {
	navigationService.replace(routeName, params);
	return {
		type: ActionTypes.replace,
		firebase: 'navigate',
		routeName,
		params,
	};
};
export const goBack = () => {
	navigationService.goBack();
	return {
		type: ActionTypes.go_back,
		firebase: 'navigate',
	};
};
export const setParams = (key: string, params: any) => {
	navigationService.setParams(key, params);
	return {
		type: ActionTypes.set_params,
		firebase: 'navigate',
		params,
	};
};
export const popToTop = () => {
	navigationService.popToTop();
	return {
		type: ActionTypes.pop_to_top,
	};
};
export const popToRoute = (routeName: string) => {
	navigationService.popToRoute(routeName);
	return {
		type: ActionTypes.pop_to_route,
		firebase: 'navigate',
		routeName,
	};
};
