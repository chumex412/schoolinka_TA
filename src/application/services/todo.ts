import { EntriesType, TodoType } from '../domain/entities/todo';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async (): Promise<TodoType[]> => {
	const res = await fetch(BASE_URL + '?userId=1');

	const data = (await res.json()) as TodoType[];

	return data;
};

export const addTodo = async (todo: EntriesType): Promise<TodoType> => {
	todo.userId = 1;
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(todo)
	});

	const data = (await res.json()) as TodoType;

	return data;
};

export const updateTodo = async (id: string | number, newTodo: EntriesType) => {
	newTodo.userId = 1;

	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(newTodo)
	});

	const data = (await res.json()) as TodoType;

	return data;
};

export const updateSingleField = async (id: string | number, completed: boolean) => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ completed })
	});

	const data = (await res.json()) as TodoType;

	return data;
};

export const deleteTodo = async (id: string | number) => {
	await fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
		headers: { 'Content-type': 'application/json' }
	});
};
