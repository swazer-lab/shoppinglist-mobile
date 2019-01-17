/* @flow */

import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { cartUsersObjectStyles as styles } from './styles';

type Props = {
	users: [],
	maxSize: number,

	tintColor: string,
}

class CartUsersObject extends React.Component<Props> {
	render() {
		const { users, maxSize, tintColor } = this.props;

		const getUserPhotos = () => {
			const usersList = users.length > maxSize ? users.slice(0, maxSize - 1) : users;

			return usersList.map((user, index) =>
				<View style={styles.userPhoto} key={index}>
					<Image source={user.photo} />
				</View>,
			);
		};

		const getPlaceHolder = () => {
			if (users.length > maxSize) {
				return (
					<View style={styles.placeholder(tintColor)}>
						<Text style={styles.placeholderText}>{users.length - maxSize + 1}</Text>
					</View>
				);
			} else {
				return (
					<View style={{ width: 10 }} />
				);
			}
		};

		return (
			<View style={styles.container}>
				{getUserPhotos()}
				{getPlaceHolder()}
			</View>
		);
	}
}

export default CartUsersObject;
