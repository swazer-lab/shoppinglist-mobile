/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { profileStyles as styles } from './styles';

type Props = {}

class Profile extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hi, Profile Screen!</Text>
			</View>
		);
	}
}

const stateToProps = (state) => {
	return {};
};

export default connect(stateToProps)(Profile);
