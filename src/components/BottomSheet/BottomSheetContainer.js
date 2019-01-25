/* @flow */

import * as React from 'react';
import { View } from 'react-native';

import { BottomSheet } from '../';

import { bottomSheetContainerStyles as styles } from './styles';

type Props = {
	children?: any,

	HeaderComponent?: any,
	FooterComponent?: any,
}

class BottomSheetContainer extends React.Component<Props> {
	open = () => this.bottomSheet.open();
	close = () => this.bottomSheet.close();

	render() {
		const { children, HeaderComponent, FooterComponent } = this.props;

		return (
			<BottomSheet ref={ref => this.bottomSheet = ref} {...this.props}>
				<View style={styles.container}>
					{HeaderComponent}
					{children}
					{FooterComponent}
				</View>
			</BottomSheet>
		);
	}
}

export default BottomSheetContainer;
