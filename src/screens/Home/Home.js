/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';

import { HeaderWithAuth } from '../../components';

import { homeStyles as styles } from './styles';

type Props = {}

class Home extends React.Component<Props> {
	static navigationOptions = { header: null };

	render() {
		return (
			<View style={styles.container}>
				<HeaderWithAuth />
			</View>
		);
	}
}

export default Home;
