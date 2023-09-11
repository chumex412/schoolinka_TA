import {} from 'react';
import { ADD_ALL, ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO, UNMARK_TODO } from './types';
import { TodoActionType, TodoType } from '../domain/entities/todo';
import { updateTodos } from '../usecases/todos';

const todoReducer = (state: TodoType[], action: TodoActionType) => {
	if (action.type === ADD_ALL) {
		return [...action.payload];
	}
	if (action.type === ADD_TODO) {
		return [...state, action.payload];
	}

	if (action.type === EDIT_TODO) {
		return updateTodos(state, 'edit', '', action.payload);
	}

	if (action.type === COMPLETE_TODO) {
		return updateTodos(state, 'mark', '', action.payload);
	}

	if (action.type === UNMARK_TODO) {
		return updateTodos(state, 'unmark', '', action.payload);
	}

	if (action.type === REMOVE_TODO) {
		return updateTodos(state, 'remove', action.payload.id);
	}

	return state;
};

export default todoReducer;
