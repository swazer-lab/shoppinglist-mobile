/* @flow */

import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import CartItemObject from './CartItemObject';
import CartUsersObject from './CartUsersObject';
import CartStatusController from './CartStatusController';

import { colors } from '../../config/colors';
import { cartObjectStyles as styles } from './styles';

type Props = {
	cart: {},
	onPress: {} => void,
}

class CartObject extends React.Component<Props> {
	onCartTouched = () => {
		const { cart, onPress } = this.props;
		onPress(cart);
	};

	render() {
		const { title, createdBy, status, users, items } = this.props.cart;
		const tintColor = status === 'active' ? colors.accent : status === 'completed' ? colors.primary : status === 'canceled' && colors.secondary;

		const renderCartItem = ({ item }) => <CartItemObject item={item} style={styles.cartItem} />;
		const renderSeparator = () => <View style={styles.separator} />;

		const getPercentage = () => {
			const completedItems = items.filter(item => item.status === 'completed' || item.status === 'canceled');
			return parseInt(completedItems.length / items.length * 100);
		};

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.onCartTouched}>
					<View style={styles.header}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.createdBy}>{`Created by ${createdBy}`}</Text>
						<CartStatusController style={styles.statusController} status={status} />
					</View>
				</TouchableOpacity>
				<FlatList
					style={styles.contentContainer}
					data={items}
					renderItem={renderCartItem}
					ItemSeparatorComponent={renderSeparator}
					keyExtractor={item => `key${item.uuid}`}
					ListHeaderComponent={renderSeparator}
					ListFooterComponent={renderSeparator}
				/>
				<TouchableOpacity onPress={this.onCartTouched}>
					<View style={styles.footer}>
						<Text>{`${getPercentage()}% Completed`}</Text>
						<CartUsersObject users={users} maxSize={3} tintColor={tintColor} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

export default CartObject;
