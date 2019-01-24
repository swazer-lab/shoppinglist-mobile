/* @flow */

import { ItemsActionTypes as ActionTypes } from '../types/ActionTypes';

export const changeItemTitle = (title: string) => ({
	type: ActionTypes.change_item_title,
	title,
});
export const changeItemStatus = (status: 'active' | 'completed' | 'canceled') => ({
	type: ActionTypes.change_item_status,
	status,
});
export const clearDraftItem = () => ({
	type: ActionTypes.clear_draft_item,
});

export const createItem = (cartId: string) => ({
	type: ActionTypes.create_item,
	cartId,
});
export const createItemResult = (hasError: boolean) => ({
	type: ActionTypes.create_item_result,
	hasError,
});

export const updateItem = (itemId: string) => ({
	type: ActionTypes.update_item,
	itemId,
});
export const updateItemResult = (hasError: boolean) => ({
	type: ActionTypes.update_item_result,
	hasError,
});

export const removeItem = (itemId: string) => ({
	type: ActionTypes.remove_item,
	itemId,
});
export const removeItemResult = (hasError: boolean) => ({
	type: ActionTypes.remove_item_result,
	hasError,
});
