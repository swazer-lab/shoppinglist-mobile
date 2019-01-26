/* @flow */

import * as React from 'react';
import { View, Text, FlatList, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import CartItemObject from './CartItemObject';
import CartUsersObject from './CartUsersObject';
import CartStatusController from './CartStatusController';

import { getCartCompletionPercentage, getCartStatus, getCartTintColor } from '../../config/utilities';

import { cartObjectStyles as styles } from './styles';

type Props = {
	cart: {},
	onPress: {} => void,
}

class CartObject extends React.Component<Props> {
	onCartTouched = () => {
		const { cart, onPress } = this.props;
		onPress(cart.uuid);
	};

	render() {
		const { title, createdBy, users, items } = this.props.cart;

		const status = getCartStatus(items);
		const tintColor = getCartTintColor(items);
		const completionPercentage = getCartCompletionPercentage(items);

		const renderCartItem = ({ item }) => <CartItemObject item={item} style={styles.cartItem} />;
		const renderSeparator = () => <View style={styles.separator} />;

		const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		return (
			<View style={styles.container}>
				<Touchable onPress={this.onCartTouched}>
					<View style={styles.header}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.createdBy}>{`Created by ${createdBy}`}</Text>
						<CartStatusController style={styles.statusController} status={status} />
					</View>
				</Touchable>

				<FlatList
					style={styles.contentContainer}
					data={items}
					renderItem={renderCartItem}
					ItemSeparatorComponent={renderSeparator}
					keyExtractor={item => `key${item.uuid}`}
					ListHeaderComponent={renderSeparator}
					ListFooterComponent={renderSeparator}
				/>

				<Touchable onPress={this.onCartTouched}>
					<View style={styles.footer}>
						<Text>{`${completionPercentage}% Completed`}</Text>
						<CartUsersObject users={users} maxSize={3} tintColor={tintColor} />
					</View>
				</Touchable>
			</View>
		);
	}
}

export default CartObject;
