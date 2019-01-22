/* @flow */

import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M12.5 2.5C12.5 2.22386 12.2761 2 12 2C11.7239 2 11.5 2.22386 11.5 2.5L11.5 12H2.5C2.22386 12 2 12.2239 2 12.5C2 12.7761 2.22386 13 2.5 13H11.5V21.5C11.5 21.7761 11.7239 22 12 22C12.2761 22 12.5 21.7761 12.5 21.5V13H21.5C21.7761 13 22 12.7761 22 12.5C22 12.2239 21.7761 12 21.5 12H12.5V2.5Z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);
