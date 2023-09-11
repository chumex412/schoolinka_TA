import { useState, useCallback } from 'react';
import { TodoCalendar } from '../components/ui';
import { FILTER_ENTRY } from '../application/reducers/types';
import { CalendarDateValue } from '../application/domain/entities/ui';
import useTodoPhaseContext from '../application/controller/useTodoEntryContext';

const TodoCalendarContainer = () => {
	const [dateValue, setDateValue] = useState<CalendarDateValue>(new Date());

	const { phaseDispatch } = useTodoPhaseContext();

	const handleTodoFilter = useCallback(
		(value: CalendarDateValue) => {
			setDateValue(value);

			//let date: Date;
			const date = new Date(value?.toLocaleString() || Date.now());

			phaseDispatch({ type: FILTER_ENTRY, payload: { date } });
		},
		[phaseDispatch]
	);
	return <TodoCalendar value={dateValue} updateState={handleTodoFilter} />;
};

export default TodoCalendarContainer;
