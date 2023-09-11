import { TodoType } from '../domain/entities/todo';

export const updateTodos = (
	todos: TodoType[],
	action: 'remove' | 'edit' | 'mark' | 'unmark',
	id: string | number,
	newTodo?: TodoType
): TodoType[] => {
	let newTodos: TodoType[] = [];

	if (action === 'mark' || action === 'unmark' || action === 'edit') {
		newTodos = todos.map((todo) => {
			if (todo.id === newTodo?.id) {
				return { ...todo, ...newTodo };
			}
			return todo;
		});
	}

	if (action === 'remove') {
		newTodos = todos.filter((todo) => todo.id !== id);
	}

	return newTodos;
};
