/* @flow */

import * as React from 'react';
import { View, TextInput } from 'react-native';

import Swipeable from 'react-native-swipeable';
import { Checkbox, Icon } from '../../components';

import { colors } from '../../config/colors';
import { cartItemObjectStyles as styles } from './styles';

type Props = {
	style?: {},
	item: {},
	editable: boolean
}

class CartItemObject extends React.Component<Props> {
	render() {
		const { style, editable } = this.props;
		const { title, status } = this.props.item;

		const leftContent = status === 'active' ? <View style={styles.action(colors.primary)} /> : null;
		const rightButton = status === 'active' ? [<View style={styles.action(colors.secondary)} />] : null;

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

		return (
			<Container>
				<Checkbox status={status} />
				<TextInput
					style={styles.title(status === 'active')}
					value={title}
					editable={editable}
				/>

				{editable && <Icon name='cancel' tintColor={colors.gray} width={20} height={20} />}
			</Container>
		);
	}
}

CartItemObject.defaultProps = {
	editable: false,
};

export default CartItemObject;
