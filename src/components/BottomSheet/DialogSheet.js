/* @flow */

import * as React from 'react';
import { View, TextInput, Keyboard } from 'react-native';

import { BottomSheetContainer } from '../';

import { dialogSheetStyles as styles } from './styles';

type Props = {}

class DialogSheet extends React.Component<Props> {
	open = () => this.bottomSheetContainer.open();
	close = () => this.bottomSheetContainer.close();

	onClose = () => {
		Keyboard.dismiss();
	};

	render() {
		return (
			<BottomSheetContainer ref={ref => this.bottomSheetContainer = ref} onClose={this.onClose} {...this.props}>
				<View style={styles.container}>
					<TextInput style={styles.textInput} {...this.props} autoFocus />
				</View>
			</BottomSheetContainer>
		);
	}
}

export default DialogSheet;
