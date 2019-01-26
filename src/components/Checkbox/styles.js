/* @flow */

import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const checkboxStyles = StyleSheet.create({
	container: (status: 'active' | 'completed' | 'canceled') => ({
		width: 18,
		height: 18,

		borderWidth: status === 'active' ? 1.5 : 0,
		borderColor: colors.text_color,
		borderRadius: 10,
	}),
});
