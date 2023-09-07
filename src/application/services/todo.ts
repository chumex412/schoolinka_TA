import { TodoType } from '../domain/entities/todo';

export const getTodos = async (): Promise<TodoType[]> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');

	const data = (await res.json()) as TodoType[];

	return data;
};
