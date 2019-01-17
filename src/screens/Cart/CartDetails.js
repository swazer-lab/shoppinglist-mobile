/* @flow */

import * as React from 'react';
import { View, Text, TextInput, ScrollView, FlatList } from 'react-native';

import { FabButton, Header, Icon } from '../../components';
import CartStatusController from './CartStatusController';
import CartUsersObject from './CartUsersObject';
import CartItemObject from './CartItemObject';

import { cartDetailsStyles as styles } from './styles';
import { colors } from '../../config/colors';

type Props = {}

class CartDetails extends React.Component<Props> {
	static navigationOptions = { header: null };

	render() {
		const { title, createdBy, status, items, users } = this.props.navigation.state.params.cart;
		const tintColor = status === 'active' ? colors.accent : status === 'completed' ? colors.primary : status === 'canceled' && colors.secondary;

		const buttons = [{ icon: 'share' }, { icon: 'remove' }];

		const renderCartItem = ({ item }) => <CartItemObject item={item} editable style={styles.cartItem} />;
		const renderSeparator = () => <View style={styles.separator} />;

		return (
			<View style={styles.container}>
				<Header buttons={buttons} onClosePress={() => this.props.navigation.goBack()} />

				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.createdBy(tintColor)}>{`Created by ${createdBy}`}</Text>
						<TextInput style={styles.title} value={title} autoFocus />

						<CartStatusController style={styles.statusController} status={status} />
					</View>

					<View style={styles.objectsContainer}>
						<View style={styles.objectContainer}>
							<Icon name='notes' tintColor={colors.text_color} />
							<TextInput
								placeholder='Add Notes'
								placeholderTextColor={colors.text_color}
								style={styles.objectText}
							/>
						</View>
						<View style={styles.objectContainer}>
							<Icon name='date' tintColor={colors.text_color} />
							<Text style={styles.objectText}>Date</Text>
						</View>
						<View style={styles.objectContainer}>
							<CartUsersObject users={users} maxSize={5} tintColor={tintColor} />
						</View>
						<View>
							<FlatList
								data={items}
								renderItem={renderCartItem}
								keyExtractor={item => `key${item.id}`}
								ItemSeparatorComponent={renderSeparator}
								ListHeaderComponent={renderSeparator}
								ListFooterComponent={renderSeparator}
							/>
						</View>
					</View>
				</ScrollView>

				<FabButton iconName='done' style={styles.fab} />
			</View>
		);
	}
}

export default CartDetails;
