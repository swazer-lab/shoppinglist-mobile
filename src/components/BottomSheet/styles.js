/* @flow */

import { StyleSheet } from 'react-native';

export const bottomSheetStyles = StyleSheet.create({
	noContainer: {
		position: 'absolute',
		top: 0,
		right: 0,
		height: 0,
		width: 0,
	},
	container: (visible: boolean) => ({
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,

		zIndex: visible ? 10000 : -10000,
	}),
	overlay: (opacity: number) => ({
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'black',

		opacity: opacity,
	}),
	sheetContainer: (transform: any) => ({
		position: 'absolute',
		right: 0,
		bottom: 0,
		left: 0,

		transform: transform,
	}),
});

export const bottomSheetContainerStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingVertical: 20,

		backgroundColor: 'white',

		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
});

export const dialogSheetStyles = StyleSheet.create({
	textInput: {
		padding: 0,
	},
});
