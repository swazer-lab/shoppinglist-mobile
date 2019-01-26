/* @flow */

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { HeaderWithAuth, FabButton } from '../../components';

import CartObject from './CartObject';
import CreateCartSheet from './CreateCartSheet';

import { navigate } from '../../actions/navigationService';

import { cartsListStyles as styles } from './styles';

type Props = {
	dispatch: Function,
	carts: [],
}

type State = {
	isSheetVisible: boolean,
}

class CartsList extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = { isSheetVisible: false };
	}

	static navigationOptions = { header: null };

	onCartTouched = (uuid: string) => {
		this.props.dispatch(navigate('CartDetails', { uuid }));
	};

	onCreateCartTouched = () => {
		this.setState({ isSheetVisible: true });
	};

	onCreateCartSheetClosed = () => {
		setTimeout(() => {
			this.setState({ isSheetVisible: false });
		}, 300);
	};

	render() {
		const { carts } = this.props;
		const { isSheetVisible } = this.state;

		const renderCart = ({ item }) => <CartObject cart={item} onPress={this.onCartTouched} />;

		return (
			<View style={styles.container}>
				<HeaderWithAuth />

				<FlatList
					style={styles.contentContainer}
					data={carts}
					renderItem={renderCart}
					keyExtractor={item => `key${item.uuid}`}
					ListFooterComponent={() => <View style={{ height: 100 }} />}
				/>

				<FabButton
					style={styles.fab}
					iconName='add'
					onPress={this.onCreateCartTouched}
					visible={!isSheetVisible}
				/>
				<CreateCartSheet
					visible={isSheetVisible}
					onClose={this.onCreateCartSheetClosed}
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
