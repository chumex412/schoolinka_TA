import { TodoType } from '../domain/entities/todo';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async (): Promise<TodoType[]> => {
	const res = await fetch(BASE_URL);

	const data = (await res.json()) as TodoType[];

	return data;
};

export const addTodo = async (todo: TodoType): Promise<TodoType[]> => {
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todo)
	});

	const data = (await res.json()) as TodoType[];

	return data;
};

export const updateTodo = async (id: string, newTodo: TodoType) => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTodo)
	});

	const data = (await res.json()) as TodoType[];

	return data;
};

export const deleteTodo = async (id: string) => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	});

	const data = (await res.json()) as TodoType[];

	return data;
};
