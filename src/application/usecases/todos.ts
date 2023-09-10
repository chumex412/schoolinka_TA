import { TodoType } from '../domain/entities/todo';

export const updateTodos = (todos: TodoType[], id: string, action: 'remove' | 'mark' | 'unmark'): TodoType[] => {
	let newTodos: TodoType[] = [];

	if (action === 'mark' || action === 'unmark') {
		newTodos = todos.map((todo) => {
			if (todo.id === id) {
				if (action === 'mark') return { ...todo, completed: true };

				if (action === 'unmark') return { ...todo, completed: false };
			}
			return todo;
		});
	}

	if (action === 'remove') {
		newTodos = todos.filter((todo) => todo.id !== id);
	}

	return newTodos;
};
