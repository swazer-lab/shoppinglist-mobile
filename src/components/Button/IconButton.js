/* @flow */

import * as React from 'react';
import { View, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import { Icon } from '../index';

import { getRipple } from '../../config/utilities';
import { colors } from '../../config/colors';

import { iconButtonStyles as styles } from './styles';

type Props = {
	style?: {},

	iconName: string,
	tintColor?: string,

	onPress: () => {},
}

class IconButton extends React.Component<Props> {
	render() {
		const { style, iconName, tintColor, onPress } = this.props;
		const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		return (
			<View style={[styles.container, style]}>
				<Touchable style={styles.touchable} background={getRipple(tintColor)} onPress={onPress}>
					<View style={styles.touchableContent}>
						<Icon name={iconName} tintColor={tintColor} />
					</View>
				</Touchable>
			</View>
		);
	}
}

IconButton.defaultProps = {
	tintColor: colors.primary,
};

export default IconButton;
