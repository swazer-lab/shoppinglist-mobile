/* @flow */

import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../config/colors';

export const fabButtonStyles = StyleSheet.create({
	container: (moreStyles: {}) => ({
		width: 56,
		height: 56,

		backgroundColor: colors.primary,

		...Platform.select({
			android: {
				elevation: 10,
				overflow: 'hidden',

				borderRadius: 28,
			},
			ios: {
				shadowColor: 'black',
				shadowRadius: 10,
				shadowOpacity: 0.25,
				shadowOffset: { height: 5 },

				borderRadius: 16,
			},
		}),

		...moreStyles,
	}),
	touchable: {
		flex: 1,
		alignSelf: 'stretch',
	},
	touchableContent: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
