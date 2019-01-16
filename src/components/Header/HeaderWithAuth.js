/* @flow */

import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { user } from '../../assets/images';
import { headerWithAuthStyles as styles } from './styles';

type Props = {}

class HeaderWithAuth extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>Shopping List</Text>
					<Text style={styles.subtitle}>what is your next trip?</Text>
				</View>
				<View style={styles.userPhoto}>
					<Image source={user} />
				</View>
			</View>
		);
	}
}

export default HeaderWithAuth;
