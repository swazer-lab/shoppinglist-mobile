/* @flow */

import { navigator } from './navigator';
import { colors } from './colors';

import { CartsList, CartDetails } from '../screens';

const routes = {
	CartsList: { screen: CartsList },
	CartDetails: { screen: CartDetails },
};

const options = {
	cardStyle: {
		backgroundColor: colors.background_color,
	},
};

export const AppNavigator = navigator({ routes, options });
