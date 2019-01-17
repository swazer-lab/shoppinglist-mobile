/* @flow */

import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const checkboxStyles = StyleSheet.create({
	container: (status: 'active' | 'completed' | 'canceled') => ({
		width: 20,
		height: 20,

		borderWidth: status === 'active' ? 1.5 : 0,
		borderColor: colors.gray,
		borderRadius: 10,
	}),
});
