/* @flow */

import { Platform } from 'react-native';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';

export const fontMaker = (options = {}) => {
	const google_sans = {
		weights: {
			400: 'Regular',
			500: 'Medium',
			700: 'Bold',
		},
		styles: {
			italic: 'Italic',
		},
	};

	let { weight, style } = Object.assign({
		weight: null,
		style: null,
	}, options);

	const { weights, styles } = google_sans;

	if (Platform.OS === 'android') {
		weight = weights[weight] || 'Regular';
		style = styles[style] || '';

		let suffix = weight + style;
		if (weight === 'Regular' && style === 'Italic') suffix = 'Italic';

		return {
			fontWeight: null,
			fontStyle: null,
			fontFamily: 'GoogleSans' + (suffix ? `-${suffix}` : ''),
		};
	} else {
		weight = weight || '400';
		style = style || 'normal';

		return {
			fontWeight: weight,
			fontStyle: style,
		};
	}
};

setCustomText({ style: fontMaker() });
setCustomTextInput({ style: fontMaker() });
