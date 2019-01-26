/* @flow */

import * as React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { getRipple } from '../../config/utilities';
import { colors } from '../../config/colors';

import { roundedButtonStyles as styles } from './styles';

type Props = {
	style?: {},

	title: string,
	tintColor: string,

	onPress: () => void,
}

class RoundedButton extends React.Component<Props> {
	render() {
		const { style, title, tintColor, onPress } = this.props;
		const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		return (
			<View style={[styles.container, style]}>
				<Touchable onPress={onPress} style={styles.touchable} background={getRipple(tintColor)}>
					<View style={styles.touchableContent}>
						<Text style={styles.title(tintColor)}>{title}</Text>
					</View>
				</Touchable>
			</View>
		);
	}
}

RoundedButton.defaultProps = {
	tintColor: colors.accent,
};

export default RoundedButton;
