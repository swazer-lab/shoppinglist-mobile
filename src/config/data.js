/* @flow */

import { user } from '../assets/images';

export const data = [
	{
		id: '1',

		title: 'Today’s Party',
		createdBy: 'Jack Sparrow',

		status: 'active',

		users: [
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
		],

		items: [
			{ id: '1', title: 'Apple', status: 'active' },
			{ id: '2', title: 'Apple', status: 'active' },
			{ id: '3', title: 'Apple', status: 'active' },
		],
	},
];
