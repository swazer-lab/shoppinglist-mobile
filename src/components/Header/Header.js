/* @flow */

import * as React from 'react';
import { View } from 'react-native';

import { IconButton } from '../../components';

import { colors } from '../../config/colors';
import { headerStyles as styles } from './styles';

type Props = {
	tintColor: string,

	buttons: [],
	onClosePress: () => void,
}

class Header extends React.Component<Props> {
	render() {
		const { tintColor, buttons, onClosePress } = this.props;

		const renderButtons = () => buttons.map((button, index) =>
			<IconButton
				key={index}
				iconName={button.iconName}
				tintColor={tintColor}
				onPress={button.onPress}
				style={styles.button}
			/>);

		return (
			<View style={styles.container}>
				<IconButton iconName='back' tintColor={tintColor} onPress={onClosePress} />
				<View style={styles.buttonContainer}>
					{renderButtons()}
				</View>
			</View>
		);
	}
}

Header.defaultProps = {
	tintColor: colors.accent,
};

export default Header;
