/* @flow */

import * as React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { DialogSheet, RoundedButton, IconButton } from '../../components';
import CartItemObject from './CartItemObject';

import {
	addCartItem,
	changeCartItemStatus,
	changeCartItemTitle,
	changeCartNotes,
	changeCartTitle,
	clearDraftCart,
	createCart,
	removeCartItem,
} from '../../actions/carts';

import language from '../../assets/language';

import { colors } from '../../config/colors';
import { createCartSheetStyles as styles } from './styles';

type Props = {
	dispatch: Function,

	visible: boolean,
	draftCart: {},
}

type State = {
	isNotesInputVisible: boolean,
}

class CreateCartSheet extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = { isNotesInputVisible: false };
	}

	componentWillReceiveProps(nextProps) {
		const { visible } = this.props;
		if (visible === false && nextProps.visible === true) this.dialogSheet.open();
	}

	onDialogSheetClosed = () => {
		const { dispatch, onClose } = this.props;
		dispatch(clearDraftCart());
		if (onClose) onClose();
	};
	onNotesTouched = () => {
		const { isNotesInputVisible } = this.state;
		this.setState({ isNotesInputVisible: !isNotesInputVisible });
		this.onChangeCartNotes('');
	};

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
	onRemoveCartItem = (uuid: string) => {
		this.props.dispatch(removeCartItem(uuid));
	};
	onCreateCartTouched = () => {
		this.props.dispatch(createCart());
	};

	render() {
		const { isNotesInputVisible } = this.state;

		const renderNotesInput = () => isNotesInputVisible &&
			<TextInput
				placeholder={language.textEnterNotes}
				onChangeText={this.onChangeCartNotes}
				style={styles.notes}
			/>;

		const renderCartItems = () => this.props.draftCart.items.map(item =>
			<CartItemObject
				key={item.uuid}
				item={item}
				style={styles.cartItemObject}
				onChangeTitle={this.onChangeCartItemTitle}
				onChangeStatus={this.onChangeCartItemStatus}
				onRemovePress={this.onRemoveCartItem}
				editable
			/>);

		const FooterComponent = (
			<View style={styles.container}>
				{renderNotesInput()}
				{renderCartItems()}

				<View style={styles.footer}>
					<View style={styles.contentContainer}>
						<IconButton
							iconName='notes'
							tintColor={colors.accent}
							onPress={this.onNotesTouched}
							style={styles.iconButton}
						/>
						<IconButton
							iconName='date'
							tintColor={colors.accent}
							style={styles.iconButton}
						/>
						<IconButton
							iconName='items'
							tintColor={colors.accent}
							onPress={this.onAddCartItemTouched}
						/>
					</View>

					<RoundedButton title={language.actionSave} onPress={this.onCreateCartTouched} />
				</View>
			</View>
		);

		return (
			<DialogSheet
				ref={ref => this.dialogSheet = ref}
				placeholder={language.textEnterCartName}
				onChangeText={this.onChangeCartTitle}
				FooterComponent={FooterComponent}
				{...this.props}
				onClose={this.onDialogSheetClosed}
			/>
		);
	}
}

const stateToProps = (state) => {
	const { draftCart } = state.carts;

	return {
		draftCart,
	};
};

export default connect(stateToProps)(CreateCartSheet);
