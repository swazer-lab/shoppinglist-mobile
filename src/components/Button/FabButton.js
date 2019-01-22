/* @flow */

import * as React from 'react';
import { View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { Icon } from '..';

import { colors } from '../../config/colors';
import { fabButtonStyles as styles } from './styles';

type Props = {
	style?: {},
	tintColor: string,

	iconName: string
}

class FabButton extends React.Component<Props> {
	render() {
		const { style, tintColor, iconName } = this.props;
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		return (
			<View style={styles.container(style, tintColor)}>
				<TouchableComponent style={styles.touchable}>
					<View style={styles.touchableContent}>
						<Icon name={iconName} />
					</View>
				</TouchableComponent>
			</View>
		);
	}
}

FabButton.defaultProps = {
	tintColor: colors.primary,
};

export default FabButton;
