import { useState, useEffect, useRef } from 'react';
import useTodoContext from '../application/controller/useTodoContext';
import useTodoPhaseContext from '../application/controller/useTodoEntryContext';
import useMediaQuery from '../application/controller/useMediaQuery';
import { TodoType } from '../application/domain/entities/todo';
import { TaskList } from '../components/module';
import { longDateFormat } from '../utils/format';

const TodosContainer = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const { todoState } = useTodoContext();

	const { phaseState } = useTodoPhaseContext();

	const mobileMediaqueryRef = useRef(false);

	mobileMediaqueryRef.current = useMediaQuery('(max-width: 767px)');

	useEffect(() => {
		let newTodos: TodoType[];

		if (phaseState.date) {
			newTodos = todoState.filter((todo) => {
				console.log(longDateFormat(todo.date), longDateFormat(phaseState.date));

				return longDateFormat(todo.date) === longDateFormat(phaseState.date);
			});

			setTodos(newTodos);
		} else {
			setTodos(todoState);
		}
	}, [phaseState.date, todoState]);

	const itemsPerPage = mobileMediaqueryRef.current ? 4 : 7;

	return <TaskList items={todos} itemsPerPage={itemsPerPage} />;
};

export default TodosContainer;
