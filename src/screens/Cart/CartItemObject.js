/* @flow */

import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Checkbox, IconButton } from '../../components';
import language from '../../assets/language';

import { colors } from '../../config/colors';
import { cartItemObjectStyles as styles } from './styles';

type Props = {
	item: {},
	editable?: boolean,

	onChangeTitle: (uuid: string, title: string) => void,
	onChangeStatus: (uuid: string, status: string) => void,
	onRemovePress: (uuid: string) => void,

	style?: {}
}

class CartItemObject extends React.Component<Props> {
	onChangeTitle = (title: string) => {
		const { item, onChangeTitle } = this.props;
		onChangeTitle(item.uuid, title);
	};

	onChangeStatus = () => {
		const { onChangeStatus, item } = this.props;
		onChangeStatus(item.uuid, item.status === 'active' ? 'completed' : 'active');
	};

	onRemovePress = () => {
		const { item, onRemovePress } = this.props;
		onRemovePress(item.uuid);
	};

	render() {
		const { item, editable, style } = this.props;
		const { title, status } = item;

		const textComponent = () => {
			if (editable) {
				return (
					<TextInput
						style={styles.textInput}
						placeholder={language.textEnterItemName}
						onChangeText={this.onChangeTitle}
					/>
				);
			} else {
				return (
					<Text style={styles.title}>{title}</Text>
				);
			}
		};

		return (
			<View style={[styles.container, style]}>
				<Checkbox status={status} onPress={this.onChangeStatus} />
				{textComponent()}

				{editable &&
				<IconButton iconName='cancel' tintColor={colors.text_color} onPress={this.onRemovePress} />}
			</View>
		);
	}
}

CartItemObject.defaultProps = {
	editable: false,
};

export default CartItemObject;
