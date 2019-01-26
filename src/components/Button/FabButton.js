/* @flow */

import * as React from 'react';
import { View, Animated,Easing, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { Icon } from '..';

import { colors } from '../../config/colors';
import { fabButtonStyles as styles } from './styles';

type Props = {
	style?: {},
	tintColor: string,

	iconName: string,

	visible: boolean,
	onPress: () => void,
}

class FabButton extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.animatedValue = new Animated.Value(1);
	}

	componentWillReceiveProps(nextProps) {
		const { visible } = this.props;

		if (visible === true && nextProps.visible === false) this.hide();
		else if (visible === false && nextProps.visible === true) this.show();
	}

	animateButton = (toValue: number) => {
		Animated.timing(this.animatedValue, {
			toValue,
			easing: Easing.linear,
			duration: 200,
		}).start();
	};

	show = () => this.animateButton(1);
	hide = () => this.animateButton(0);

	render() {
		const { style, tintColor, iconName, onPress } = this.props;
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		const interpolatedSize = this.animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 56] });
		const interpolateMargin = this.animatedValue.interpolate({ inputRange: [0, 1], outputRange: [28, 0] });
		return (
			<Animated.View style={styles.container(style, tintColor, interpolatedSize, interpolateMargin)}>
				<TouchableComponent onPress={onPress} style={styles.touchable}>
					<View style={styles.touchableContent}>
						<Icon name={iconName} />
					</View>
				</TouchableComponent>
			</Animated.View>
		);
	}
}

FabButton.defaultProps = {
	tintColor: colors.primary,
	visible: true,
};

export default FabButton;
