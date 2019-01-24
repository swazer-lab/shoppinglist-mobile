/* @flow */

import * as React from 'react';
import { View, FlatList } from 'react-native';

import { HeaderWithAuth, FabButton } from '../../components';
import CartObject from './CartObject';

import { data } from '../../config/data';
import { cartsListStyles as styles } from './styles';

type Props = {
	navigation: any
}

class CartsList extends React.Component<Props> {
	static navigationOptions = { header: null };

	onCartTouched = (cart: {}) => {
		this.props.navigation.navigate('CartDetails', { cart });
	};

	render() {
		const renderCart = ({ item }) => <CartObject cart={item} onPress={this.onCartTouched} />;

		return (
			<View style={styles.container}>
				<HeaderWithAuth />

				<FlatList
					style={styles.contentContainer}
					data={data.filter(cart => cart.status !== 'deleted')}
					renderItem={renderCart}
					keyExtractor={item => `key${item.id}`}
					ListFooterComponent={() => <View style={{ height: 100 }} />}
				/>

				<FabButton style={styles.fab} iconName='add' />
			</View>
		);
	}
}

export default CartsList;
