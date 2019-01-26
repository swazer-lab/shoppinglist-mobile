/* @flow */

import { StyleSheet, Platform } from 'react-native';
import { fontMaker } from '../../config/styles';

export const fabButtonStyles = StyleSheet.create({
	container: (moreStyles: {}, tintColor: string, interpolatedSize: number, interpolateMargin: number) => ({
		width: interpolatedSize,
		height: interpolatedSize,

		marginBottom: interpolateMargin,
		marginEnd: interpolateMargin,

		backgroundColor: tintColor,

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

export const roundedButtonStyles = StyleSheet.create({
	container: {
		height: 36,

		borderRadius: 4,
		overflow: 'hidden',
	},
	touchable: {
		flex: 1,
		alignSelf: 'stretch',
	},
	touchableContent: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',

		paddingHorizontal: 10,
	},
	title: (tintColor: string) => ({
		fontSize: 16,
		color: tintColor,

		...fontMaker({ weight: '500' }),
	}),
});

export const iconButtonStyles = StyleSheet.create({
	container: {
		width: 40,
		height: 40,

		borderRadius: 20,
		overflow: 'hidden',
	},
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
