/* @flow */

import * as React from 'react';
import { View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { Icon } from '../../components';

import { colors } from '../../config/colors';
import { headerStyles as styles } from './styles';

type Props = {
	buttons: [],
	onClosePress: () => void,
}

class Header extends React.Component<Props> {
	render() {
		const { buttons, onClosePress } = this.props;

		const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		const renderButton = (icon, onPress, direction, key?) => (
			<View key={key} style={styles.button(direction)}>
				<Touchable onPress={onPress} style={styles.touchable}>
					<View style={styles.touchableContent}>
						<Icon name={icon} tintColor={Platform.OS === 'ios' ? colors.accent : colors.black} />
					</View>
				</Touchable>
			</View>
		);

		const renderButtons = () => buttons.map((button, index) => renderButton(button.icon, button.onPress, 'right', index));

		return (
			<View style={styles.container}>
				{renderButton('back', onClosePress)}
				<View style={styles.buttonContainer}>
					{renderButtons()}
				</View>
			</View>
		);
	}
}

export default Header;
