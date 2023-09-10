export const newTodo = (
	title: string,
	startTime: Date | number | string,
	endTime: Date | number | string,
	completed: boolean
) => ({ title, startTime, endTime, completed });
