/* @flow */

import { Platform, StyleSheet, PixelRatio } from 'react-native';
import chroma from 'chroma-js';

import { fontMaker } from '../../config/styles';
import { colors } from '../../config/colors';

export const cartsListStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		paddingHorizontal: 34,
	},
	fab: {
		position: 'absolute',
		bottom: 34,
		end: 34,
	},
});

export const cartDetailsStyles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		marginTop: 16,
		marginStart: 16,
	},
	createdBy: (tintColor: string) => ({
		color: tintColor,
		...fontMaker({ weight: '700' }),
	}),
	title: {
		marginTop: 8,
		padding: 0,

		fontSize: 32,
		color: colors.black,
		...fontMaker({ weight: '700' }),
	},
	statusController: {
		position: 'absolute',
		top: 0,
		end: -10,
	},

	objectsContainer: {
		marginTop: 22,
	},
	objectContainer: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingVertical: 10,
		marginHorizontal: 16,
	},
	objectText: {
		flex: 1,

		marginStart: 16,
		padding: 0,

		color: colors.text_color,
		...fontMaker({ weight: '500' }),
	},

	itemsContainer: {
		marginStart: 40,
	},
	cartItem: {
		paddingHorizontal: 16,
	},
	separator: {
		height: 1 / PixelRatio.get(),
		backgroundColor: chroma(colors.gray).alpha(0.3),

		marginStart: 32,
		marginEnd: 24,
	},

	roundedButton: {
		marginStart: 35,
		marginTop: 10,
		alignSelf: 'flex-start',
	},

	fab: {
		position: 'absolute',
		bottom: 34,
		end: 34,
	},
});

export const cartObjectStyles = StyleSheet.create({
	container: {
		marginBottom: 16,

		borderRadius: Platform.OS === 'ios' ? 8 : 6,
		borderWidth: 0.25,
		borderColor: colors.gray,

		overflow: 'hidden',
	},

	header: {
		paddingTop: 16,
		paddingHorizontal: 16,
		paddingBottom: 14,
	},
	title: {
		fontSize: 18,
		color: colors.black,

		...fontMaker({ weight: '700' }),
	},
	createdBy: {
		marginTop: 2,

		fontSize: 14,
		color: colors.text_color,
	},

	footer: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingTop: 14,
		paddingHorizontal: 16,
		paddingBottom: 16,
	},
	percentage: {
		fontSize: 14,
		color: colors.text_color,
	},

	cartItem: {
		paddingStart: 34,
		paddingEnd: 18,
	},
	separator: {
		height: 1 / PixelRatio.get(),
		backgroundColor: chroma(colors.gray).alpha(0.3),

		marginStart: 32,
		marginEnd: 16,
	},

	statusController: {
		position: 'absolute',
		top: 26,
		end: Platform.OS === 'ios' ? -10 : 16,
	},
});

export const cartItemObjectStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		height: 40,
	},
	title: {
		flex: 1,
		marginStart: 12,
		color: colors.text_color,
	},
	textInput: {
		flex: 1,

		marginStart: 12,
		padding: 0,

		color: colors.text_color,
	},
});


export const cartUsersObjectStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',

		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	userPhoto: {
		width: 32,
		height: 32,

		marginEnd: -10,

		borderRadius: 16,
		borderWidth: 3,
		borderColor: colors.background_color,

		backgroundColor: colors.gray,
		overflow: 'hidden',
	},

	placeholder: (tintColor: string) => ({
		justifyContent: 'center',
		alignItems: 'center',

		width: 32,
		height: 32,

		borderRadius: 16,
		borderWidth: 3,
		borderColor: colors.background_color,

		backgroundColor: tintColor,
	}),
	placeholderText: {
		color: 'white',
		...fontMaker({ weight: '700' }),
	},
});

export const cartStatusController = StyleSheet.create({
	container: (moreStyles: {}, active: boolean) => ({
		flex: 1,
		alignItems: 'flex-end',

		...moreStyles,
	}),

	statusObject: {
		flexDirection: 'row',
		marginBottom: 12,
	},
	title: (tintColor: string, marginEnd: number = 7) => ({
		color: tintColor,
		marginEnd: marginEnd,
	}),
	label: (tintColor: string) => ({
		width: 20,
		height: 20,

		backgroundColor: tintColor,
		borderRadius: 10,
	}),
});

export const createCartSheetStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	notes: {
		padding: 0,
		color: colors.text_color,
	},

	footer: {
		flexDirection: 'row',
		alignItems: 'center',

		marginTop: 15,
		marginHorizontal: -10,
		marginBottom: -10,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	iconButton: {
		marginEnd: 4,
	},

	cartItemObject: {
		marginStart: 15,
		marginEnd: -8,
	},
});

