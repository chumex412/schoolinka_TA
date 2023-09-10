import { useCallback, Suspense, lazy } from 'react';
import useTodoPhaseContext from '../application/controller/useTodoEntryContext';
import { TodoCalendar } from '../components/ui';
import { CALENDAR_ENTRY } from '../application/reducers/types';

const TodoEntry = lazy(() => import('../components/module/todo-entry'));

const MetricGroupContainer = () => {
	const { phaseState, phaseDispatch } = useTodoPhaseContext();

	const handleTodoFilter = useCallback(() => {}, []);

	const closeTodoFormHandler = useCallback(() => {
		phaseDispatch({ type: CALENDAR_ENTRY });
	}, [phaseDispatch]);

	let metricGroup = <TodoCalendar value={new Date()} updateState={handleTodoFilter} />;

	if (phaseState.entry === 'create') {
		metricGroup = (
			<TodoEntry title="Add Task" successBtnValue="Add" cancelBtnValue="Cancel" onclose={closeTodoFormHandler} />
		);
	}

	if (phaseState.entry === 'edit') {
		metricGroup = (
			<TodoEntry title="Edit Task" successBtnValue="Save" cancelBtnValue="Cancel" onclose={closeTodoFormHandler} />
		);
	}

	if (phaseState.entry === 'selected') {
		metricGroup = <div>Selected</div>;
	}

	return (
		<section className="basis-2/6 shadow-lg">
			<Suspense>{metricGroup}</Suspense>
		</section>
	);
};

export default MetricGroupContainer;
