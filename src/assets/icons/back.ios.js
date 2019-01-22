/* @flow */

import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M16.631 2.14645L7.08509 11.6924L7.08943 11.6967L7 11.7862L16.5459 21.3321C16.7412 21.5274 17.0578 21.5274 17.253 21.3321C17.4483 21.1368 17.4483 20.8203 17.253 20.625L8.40987 11.7818L17.3381 2.85355C17.5334 2.65829 17.5334 2.34171 17.3381 2.14645C17.1429 1.95118 16.8263 1.95118 16.631 2.14645Z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);
