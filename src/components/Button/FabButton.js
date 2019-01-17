/* @flow */

import * as React from 'react';
import { View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { Icon } from '..';

import { fabButtonStyles as styles } from './styles';

type Props = {
	style?: {},
	iconName: string
}

class FabButton extends React.Component<Props> {
	render() {
		const { style, iconName } = this.props;
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		return (
			<View style={styles.container(style)}>
				<TouchableComponent style={styles.touchable}>
					<View style={styles.touchableContent}>
						<Icon name={iconName} />
					</View>
				</TouchableComponent>
			</View>
		);
	}
}

export default FabButton;
