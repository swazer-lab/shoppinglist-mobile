/* @flow */

import { Platform, TouchableNativeFeedback } from 'react-native';
import chroma from 'chroma-js';

import { colors } from './colors';

export const getRipple = (tintColor: string) => Platform['Version'] >= 21 ? TouchableNativeFeedback.Ripple(chroma(tintColor).alpha(0.2), true) : TouchableNativeFeedback.SelectableBackground();

export const getCartCompletionPercentage = (items: []) => {
	if (items.length === 0) return 100;

	const completedItems = items.filter(item => item.status === 'completed' || item.status === 'canceled');
	return parseInt(completedItems.length / items.length * 100);
};

export const getCartStatus = (items: []) => {
	const completedItems = items.filter(item => item.status === 'completed');
	const canceledItems = items.filter(item => item.status === 'canceled');

	if (completedItems.length === items.length) return 'completed';
	else if (canceledItems.length === items.length) return 'completed';
	else return 'active';
};

export const getCartTintColor = (items: []) => {
	const status = getCartStatus(items);

	if (status === 'completed') return colors.primary;
	else if (status === 'canceled') return colors.secondary;
	else return colors.accent;
};
