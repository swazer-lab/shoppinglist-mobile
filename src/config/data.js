/* @flow */

import { user } from '../assets/images';

export const data = [
	{
		id: '1',

		title: 'Today’s Party',
		notes: 'some notes here',
		createdBy: 'Jack Sparrow',

		status: 'active',

		users: [
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
		],

		items: [
			{ id: '1', title: 'Apple', status: 'active' },
			{ id: '2', title: 'Apple', status: 'canceled' },
			{ id: '3', title: 'Apple', status: 'completed' },
		],
	},
	{
		id: '2',

		title: 'Today’s Party',
		createdBy: 'Jack Sparrow',

		status: 'canceled',

		users: [
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
		],

		items: [
			{ id: '1', title: 'Apple', status: 'active' },
			{ id: '2', title: 'Apple', status: 'canceled' },
			{ id: '3', title: 'Apple', status: 'completed' },
		],
	},
	{
		id: '3',

		title: 'Today’s Party',
		createdBy: 'Jack Sparrow',

		status: 'completed',

		users: [
			{ name: 'Jack Sparrow', photo: user },
			{ name: 'Jack Sparrow', photo: user },
		],

		items: [
			{ id: '1', title: 'Apple', status: 'active' },
			{ id: '2', title: 'Apple', status: 'canceled' },
			{ id: '3', title: 'Apple', status: 'completed' },
		],
	},
];
