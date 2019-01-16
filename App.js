/* @flow */

import * as React from 'react';
import { View } from 'react-native';

import { AppNavigator } from './src/config/routes';

type Props = {}

class App extends React.Component<Props> {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppNavigator />
			</View>
		);
	}
}

export default App;
