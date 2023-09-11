import { useCallback } from 'react';
import useTodoContext from '../application/controller/useTodoContext';
import { SelectedEntry } from '../components/module';
import useTodoPhaseContext from '../application/controller/useTodoEntryContext';
import { TodoType } from '../application/domain/entities/todo';
import { longDateFormat } from '../utils/format';
import { deleteTodo } from '../application/services/todo';
import { EDIT_ENTRY } from '../application/reducers/types';

const SelectedEntryContainer = () => {
	const { todoState, todoDispatch } = useTodoContext();
	const { phaseState, phaseDispatch } = useTodoPhaseContext();

	//const singleTodoRef = useRef<TodoType>()

	const singleTodo = todoState.find((todo) => todo.id === phaseState.id) as TodoType;

	const deleteTodoHandler = useCallback(async () => {
		if (phaseState.id) {
			await deleteTodo(phaseState.id);
			todoDispatch({ type: 'todo/remove', payload: { id: phaseState.id } });
		}

		phaseDispatch({ type: 'entry/calendar' });
	}, [phaseState.id, todoDispatch, phaseDispatch]);

	const editTodohandler = useCallback(() => {
		phaseDispatch({ type: EDIT_ENTRY, payload: { id: phaseState.id } });
	}, [phaseDispatch, phaseState]);

	const closeSelected = useCallback(() => {
		phaseDispatch({ type: 'entry/calendar' });
	}, [phaseDispatch]);

	return (
		<SelectedEntry
			title={singleTodo.title}
			date={singleTodo.date && longDateFormat(singleTodo.date)}
			startTime={singleTodo.startTime}
			endTime={singleTodo.endTime}
			onDelete={deleteTodoHandler}
			onEdit={editTodohandler}
			onClose={closeSelected}
		/>
	);
};

export default SelectedEntryContainer;
