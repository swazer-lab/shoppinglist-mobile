/* @flow */

import { StyleSheet, Platform } from 'react-native';

import { fontMaker } from '../../config/styles';
import { colors } from '../../config/colors';

export const headerWithAuthStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingTop: 34,
		paddingHorizontal: 34,
		paddingBottom: 24,
	},
	title: {
		fontSize: 20,
		color: colors.accent,

		...fontMaker({ weight: '700' }),
	},
	subtitle: {
		marginTop: 2,

		fontSize: 16,
		color: colors.black,
	},
	userPhoto: {
		width: 40,
		height: 40,

		borderRadius: Platform.OS === 'ios' ? 10 : 20,
		backgroundColor: colors.gray,

		overflow: 'hidden',
	},
});

export const headerStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',

		paddingHorizontal: 6,
		paddingVertical: Platform.OS === 'ios' ? 8 : 16,
		marginTop: Platform.OS === 'ios' ? 20 : 0,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		marginStart: 10,
	},
});
