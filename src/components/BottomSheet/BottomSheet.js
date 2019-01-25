/* @flow */

import * as React from 'react';
import { View, Animated, PanResponder, Easing, BackHandler } from 'react-native';

import { bottomSheetStyles as styles } from './styles';

type Props = {
	children?: any,

	onOpen?: () => void,
	onClose?: () => void,
}
type State = {
	sheetHeight: number,
	visible: boolean,
}

class BottomSheet extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = { sheetHeight: 0, visible: false };

		this.animatedValue = new Animated.ValueXY({ x: 0, y: 0 });
		this.animateOpacity = new Animated.Value(0);

		this.panResponder = new PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => this.animatedValue.extractOffset(),

			onPanResponderMove: (event, gestureState) => {
				if (gestureState.dy < 0)
					return;

				this.animatedValue.setValue({ x: 0, y: gestureState.dy });
			},
			onPanResponderRelease: (event, gestureState) => {
				const { sheetHeight } = this.state;

				if (gestureState.dy > sheetHeight / 3) this.close();
				else this.open();
			},
		});
	}

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		if (this.state.visible) {
			this.close();
			return true;
		}
	};

	animateSheet = (property: any, toValue: number) => {
		Animated.timing(property, {
			toValue,
			duration: 200,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start();
	};

	open = () => {
		const { onOpen } = this.props;
		if (onOpen) onOpen();

		this.setState({ visible: true }, () => {
			this.animateSheet(this.animateOpacity, 1);
			this.animateSheet(this.animatedValue.y, 0);
		});
	};

	close = () => {
		const { onClose } = this.props;
		if (onClose) onClose();

		this.animateSheet(this.animateOpacity, 0);
		this.animateSheet(this.animatedValue.y, this.state.sheetHeight);

		setTimeout(() => {
			this.setState({ visible: false });
		}, 150);
	};

	render() {
		const { visible } = this.state;
		const { children } = this.props;

		const transform = this.animatedValue.getTranslateTransform();
		const opacity = this.animateOpacity.interpolate({ inputRange: [0, 1], outputRange: [0, 0.6] });

		return (
			<View style={styles.container(visible)}>
				<Animated.View style={styles.overlay(opacity)} />

				<Animated.View style={styles.sheetContainer(transform)} {...this.panResponder.panHandlers}>
					{visible && children}
				</Animated.View>
			</View>
		);
	}
}

export default BottomSheet;
