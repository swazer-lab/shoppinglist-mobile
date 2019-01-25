/* @flow */

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { HeaderWithAuth, FabButton, DialogSheet } from '../../components';
import CartObject from './CartObject';


import { cartsListStyles as styles } from './styles';

type Props = {
	dispatch: Function,
	navigation: any,

	carts: []
}

class CartsList extends React.Component<Props> {
	static navigationOptions = { header: null };

	onCartTouched = (cart: {}) => {
		this.props.navigation.navigate('CartDetails', { cart });
	};

	onDialogSheetOpened = () => {
		this.fabButton.hide();
	};

	onDialogSheetClosed = () => {
		setTimeout(() => {
			this.fabButton.show();
		}, 200);
	};

	render() {
		const { carts } = this.props;
		const renderCart = ({ item }) => <CartObject cart={item} onPress={this.onCartTouched} />;

		return (
			<View style={styles.container}>
				<HeaderWithAuth />
				<FlatList
					style={styles.contentContainer}
					data={carts}
					renderItem={renderCart}
					keyExtractor={item => `key${item.id}`}
					ListFooterComponent={() => <View style={{ height: 100 }} />}
				/>

				<FabButton
					style={styles.fab}
					iconName='add'
					onPress={() => this.createCartSheet.open()}
					ref={ref => this.fabButton = ref}
				/>

				<DialogSheet
					placeholder='New Cart'
					onOpen={this.onDialogSheetOpened}
					onClose={this.onDialogSheetClosed}
					ref={ref => this.createCartSheet = ref}
				/>
			</View>
		);
	}
}

const stateToProps = (state) => {
	const { carts } = state.carts;

	return {
		carts,
	};
};

export default connect(stateToProps)(CartsList);
