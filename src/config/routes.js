/* @flow */

import { navigator } from './navigator';
import { colors } from './colors';

import { Home } from '../screens';

const routes = {
	Home: { screen: Home },
};

const options = {
	cardStyle: {
		backgroundColor: colors.background_color,
	},
};

export const AppNavigator = navigator({ routes, options });
