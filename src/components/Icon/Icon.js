/* @flow */

import * as React from 'react';
import Icons from '../../assets/icons';

type Props = {
	name: string,
}

class Icon extends React.Component<Props> {
	render() {
		const Target = Icons[this.props.name];

		return (
			<Target {...this.props} />
		);
	}
}

export default Icon;
