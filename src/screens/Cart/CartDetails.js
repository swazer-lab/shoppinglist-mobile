/* @flow */

import * as React from 'react';
import { View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { FabButton, Header, Icon, RoundedButton } from '../../components';

import CartStatusController from './CartStatusController';
import CartUsersObject from './CartUsersObject';
import CartItemObject from './CartItemObject';

import { getCartStatus, getCartTintColor } from '../../config/utilities';
import {
	addCartItem,
	changeCartItemStatus,
	changeCartItemTitle,
	changeCartNotes,
	changeCartTitle,
	clearDraftCart,
	removeCartItem,
	setDraftCart,
	updateCart,
	removeCart,
} from '../../actions/carts';
import { goBack } from '../../actions/navigationService';

import language from '../../assets/language';

import { colors } from '../../config/colors';
import { cartDetailsStyles as styles } from './styles';

type Props = {
	dispatch: Function,

	draftCart: {},
	uuid: string,
}

class CartDetails extends React.Component<Props> {
	static navigationOptions = { header: null };

	componentDidMount() {
		const { dispatch, uuid } = this.props;
		dispatch(setDraftCart(uuid));
	}

	onChangeCartTitle = (title: string) => {
		this.props.dispatch(changeCartTitle(title));
	};
	onChangeCartNotes = (notes: string) => {
		this.props.dispatch(changeCartNotes(notes));
	};
	onAddCartItemTouched = () => {
		this.props.dispatch(addCartItem());
	};
	onChangeCartItemTitle = (uuid: string, title: string) => {
		this.props.dispatch(changeCartItemTitle(uuid, title));
	};
	onChangeCartItemStatus = (uuid: string, status: string) => {
		this.props.dispatch(changeCartItemStatus(uuid, status));
	};
	onRemoveCartItemTouched = (uuid: string) => {
		this.props.dispatch(removeCartItem(uuid));
	};
	onUpdateCartTouched = () => {
		const { uuid, draftCart } = this.props;
		this.props.dispatch(updateCart(uuid, draftCart));

		this.props.dispatch(clearDraftCart());
		this.props.dispatch(goBack());
	};
	onRemoveCartTouched = () => {
		const { uuid } = this.props;
		this.props.dispatch(removeCart(uuid));

		this.props.dispatch(clearDraftCart());
		this.props.dispatch(goBack());
	};

	render() {
		const { title, notes, createdBy, items, users } = this.props.draftCart;
		const status = getCartStatus(items);
		const tintColor = getCartTintColor(items);

		const buttons = [{ iconName: 'share' }, { iconName: 'remove', onPress: this.onRemoveCartTouched }];

		const renderSeparator = () => <View style={styles.separator} />;
		const renderCartItem = ({ item }) =>
			<CartItemObject
				style={styles.cartItem}
				item={item}
				onChangeTitle={this.onChangeCartItemTitle}
				onChangeStatus={this.onChangeCartItemStatus}
				onRemovePress={this.onRemoveCartItemTouched}
				editable
			/>;

		return (
			<View style={styles.container}>
				<Header tintColor={tintColor} buttons={buttons} onClosePress={() => this.props.dispatch(goBack())} />

				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.createdBy(tintColor)}>
							{language.textCreatedBy.replace('$', createdBy)}
						</Text>
						<TextInput
							style={styles.title}
							value={title}
							onChangeText={this.onChangeCartTitle}
						/>
						<CartStatusController style={styles.statusController} marginEnd={12} status={status} />
					</View>

					<View style={styles.objectsContainer}>
						<View style={styles.objectContainer}>
							<Icon name='notes' tintColor={colors.text_color} />
							<TextInput
								value={notes}
								onChangeText={this.onChangeCartNotes}
								placeholder={language.textEnterNotes}
								placeholderTextColor={colors.text_color}
								style={styles.objectText}
							/>
						</View>
						<View style={styles.objectContainer}>
							<Icon name='date' tintColor={colors.text_color} />
							<Text style={styles.objectText}>{language.textEnterDate}</Text>
						</View>

						<View style={styles.objectContainer}>
							<CartUsersObject users={users} maxSize={5} tintColor={tintColor} />
						</View>

						<View style={styles.itemsContainer}>
							<FlatList
								data={items}
								renderItem={renderCartItem}
								keyExtractor={item => `key${item.uuid}`}
								ItemSeparatorComponent={renderSeparator}
								ListHeaderComponent={renderSeparator}
								ListFooterComponent={renderSeparator}
							/>
							<RoundedButton
								style={styles.roundedButton}
								title={language.textAddCartItem}
								tintColor={tintColor}
								onPress={this.onAddCartItemTouched}
							/>
						</View>
					</View>
				</ScrollView>

				<FabButton
					iconName='done'
					style={styles.fab}
					tintColor={tintColor}
					onPress={this.onUpdateCartTouched}
				/>
			</View>
		);
	}
}

const stateToProps = (state, props) => {
	const { draftCart } = state.carts;
	const { uuid } = props.navigation.state.params;

	return {
		draftCart,
		uuid,
	};
};

export default connect(stateToProps)(CartDetails);
