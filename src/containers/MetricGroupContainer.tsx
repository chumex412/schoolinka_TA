import { useRef, useCallback, Suspense, lazy } from 'react';
import useTodoPhaseContext from '../application/controller/useTodoEntryContext';

import { ADD_TODO, CALENDAR_ENTRY, EDIT_TODO } from '../application/reducers/types';
import useTodoContext from '../application/controller/useTodoContext';
import { addTodo, updateTodo } from '../application/services/todo';
import { EntriesType, TodoType } from '../application/domain/entities/todo';
import useMediaQuery from '../application/controller/useMediaQuery';

const TodoEntry = lazy(() => import('../components/module/todo-entry'));
const TodoCalendarContainer = lazy(() => import('./TodoCalendarContainer'));
const SelectedEntryContainer = lazy(() => import('./SelectedEntryContainer'));

const MetricGroupContainer = () => {
	const { phaseState, phaseDispatch } = useTodoPhaseContext();
	const { todoDispatch, todoState } = useTodoContext();
	const mobileMediaqueryRef = useRef(false);

	mobileMediaqueryRef.current = useMediaQuery('(max-width: 767px)');

	let singleTodo: TodoType | undefined;

	if (phaseState.id) singleTodo = todoState.find((todo) => todo.id === phaseState.id);

	const closeTodoFormHandler = useCallback(() => {
		phaseDispatch({ type: CALENDAR_ENTRY });
	}, [phaseDispatch]);

	const addTodoHandler = useCallback(
		async (todoPayload: EntriesType) => {
			const newTodo = await addTodo(todoPayload);

			todoDispatch({ type: ADD_TODO, payload: newTodo });
			phaseDispatch({ type: CALENDAR_ENTRY });
		},
		[todoDispatch, phaseDispatch]
	);

	const editTodoHandler = useCallback(
		async (todoPayload: EntriesType, id?: string | number) => {
			if (id) {
				const newTodo = await updateTodo(id, todoPayload);
				todoDispatch({ type: EDIT_TODO, payload: newTodo });
			}

			phaseDispatch({ type: CALENDAR_ENTRY });
		},
		[todoDispatch, phaseDispatch]
	);

	let metricGroup = mobileMediaqueryRef.current ? null : <TodoCalendarContainer />;

	if (phaseState.entry === 'create') {
		metricGroup = (
			<TodoEntry
				id={phaseState.id}
				title="Add Task"
				successBtnValue="Add"
				onSuccess={addTodoHandler}
				cancelBtnValue="Cancel"
				onclose={closeTodoFormHandler}
			/>
		);
	}

	if (phaseState.entry === 'edit') {
		metricGroup = (
			<TodoEntry
				id={phaseState.id}
				title="Edit Task"
				name={singleTodo?.title || ''}
				successBtnValue="Save"
				onSuccess={editTodoHandler}
				cancelBtnValue="Cancel"
				onclose={closeTodoFormHandler}
			/>
		);
	}

	if (phaseState.entry === 'selected') {
		metricGroup = <SelectedEntryContainer />;
	}

	const mobileCondition =
		(phaseState.entry === 'create' || phaseState.entry === 'edit' || phaseState.entry === 'selected') &&
		mobileMediaqueryRef.current;

	const desktopCondition =
		(phaseState.entry === 'create' ||
			phaseState.entry === 'edit' ||
			phaseState.entry === 'selected' ||
			phaseState.entry === 'calendar') &&
		!mobileMediaqueryRef.current;

	return (
		<section className="bg-[#ffffff] lg:basis-2/5 2xl:basis-2/6">
			<section
				className={`fixed left-0 top-0 z-10 h-full w-full bg-[#ffffff] transition transition-opacity transition-transform duration-300 md:h-auto md:shadow-lg ${
					desktopCondition
						? 'translate-y-0 opacity-100'
						: mobileCondition
						? 'translate-y-0 opacity-100'
						: 'translate-y-full opacity-0'
				} md:static`}
			>
				<Suspense>{metricGroup}</Suspense>
			</section>
		</section>
	);
};

export default MetricGroupContainer;
