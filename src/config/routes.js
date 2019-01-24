/* @flow */

import { navigator } from './navigator';
import { colors } from './colors';

import { CartsList, CartDetails } from '../screens';

const routes = {
	CartsList: { screen: CartsList },
	CartDetails: { screen: CartDetails },
};

const options = {
	mode: 'model',
	gesturesEnabled: false,

	cardStyle: {
		backgroundColor: colors.background_color,
	},
};

export const AppNavigator = navigator({ routes, options });
