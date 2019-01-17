/* @flow */

import * as React from 'react';
import { View } from 'react-native';

import { Icon } from '../';

import { colors } from '../../config/colors';
import { checkboxStyles as styles } from './styles';

type Props = {
	status: 'active' | 'completed' | 'canceled',
}

class Checkbox extends React.Component<Props> {
	render() {
		const { status } = this.props;

		const renderIcon = () => {
			if (status === 'completed')
				return <Icon name='done' width={20} height={20} tintColor={colors.primary} />;
			else if (status === 'canceled')
				return <Icon name='cancel' width={20} height={20} tintColor={colors.secondary} />;
		};

		return (
			<View style={styles.container(status)}>
				{renderIcon()}
			</View>
		);
	}
}

export default Checkbox;
