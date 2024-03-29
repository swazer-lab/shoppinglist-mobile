/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { authStyles as styles } from './styles';

type Props = {}

class Login extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hi, Login Screen!</Text>
			</View>
		);
	}
}

const stateToProps = (state) => {
	return {};
};

export default connect(stateToProps)(Login);
