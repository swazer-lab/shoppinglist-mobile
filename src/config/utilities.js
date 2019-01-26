/* @flow */

import { Platform, TouchableNativeFeedback } from 'react-native';
import chroma from 'chroma-js';

export const getRipple = (tintColor: string) => Platform['Version'] >= 21 ? TouchableNativeFeedback.Ripple(chroma(tintColor).alpha(0.2), true) : TouchableNativeFeedback.SelectableBackground();
