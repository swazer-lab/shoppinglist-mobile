/* @flow */

import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);
