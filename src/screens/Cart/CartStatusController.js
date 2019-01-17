/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../config/colors';
import { cartStatusController as styles } from './styles';

type Props = {
	style: {},
	status: 'active' | 'completed' | 'canceled'
}

class CartStatusController extends React.Component<Props> {
	render() {
		const { style, status } = this.props;

		const getStatusObject = (tintColor, title) => (
			<View style={styles.statusObject}>
				<Text style={styles.title(tintColor)}>{title}</Text>
				<View style={styles.label(tintColor)} />
			</View>
		);

		const renderStatusObject = () => {
			if (status === 'active') return getStatusObject(colors.accent, 'Active');
			else if (status === 'completed') return getStatusObject(colors.primary, 'Completed');
			else if (status === 'canceled') return getStatusObject(colors.secondary, 'Canceled');
		};

		return (
			<View style={styles.container(style)}>
				{renderStatusObject()}
			</View>
		);
	}
}

export default CartStatusController;
