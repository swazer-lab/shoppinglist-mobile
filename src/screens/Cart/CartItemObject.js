/* @flow */

import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import Swipeable from 'react-native-swipeable';
import { Checkbox, Icon } from '../../components';

import { colors } from '../../config/colors';
import { cartItemObjectStyles as styles } from './styles';

type Props = {
	style?: {},

	item: {},
	editable: boolean,
}

class CartItemObject extends React.Component<Props> {
	render() {
		const { style, item, editable } = this.props;
		const { title, status } = item;

		const leftContent = status === 'active' ? <View style={styles.action(colors.primary)} /> : null;
		const rightButton = status === 'active' ? [<View style={styles.action(colors.secondary)}><Icon name='cancel' /></View>] : null;

		const Container = (props) => (
			<View style={styles.container}>
				<Swipeable
					style={styles.container}
					rightButtonWidth={50}
					leftContent={leftContent}
					rightButtons={rightButton}>

					<View style={styles.contentContainer(style)}>
						{props.children}
					</View>
				</Swipeable>
			</View>
		);

		const getTextComponent = () => {
			if (editable) return (
				<TextInput
					style={styles.title(status === 'active')}
					value={title}
				/>
			);
			else return (
				<Text style={styles.title(status === 'active')}>{title}</Text>
			);
		};

		return (
			<Container>
				<Checkbox status={status} />
				{getTextComponent()}
			</Container>
		);
	}
}

CartItemObject.defaultProps = {
	editable: false,
};

export default CartItemObject;
