/* @flow */

import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M9.10106 18.4534L9.10819 18.4606L8.40108 19.1677L2.14645 12.913C1.95118 12.7178 1.95118 12.4012 2.14645 12.2059C2.34171 12.0107 2.65829 12.0107 2.85355 12.2059L8.39395 17.7463L20.9938 5.14645C21.1891 4.95118 21.5057 4.95118 21.7009 5.14645C21.8962 5.34171 21.8962 5.65829 21.7009 5.85355L9.10106 18.4534Z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);