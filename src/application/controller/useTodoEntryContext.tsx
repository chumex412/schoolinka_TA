import { useContext, useReducer, useMemo, createContext, Dispatch, ReactNode } from 'react';
import { TodoEntryActionType, TodoEntryType } from '../domain/entities/todo';
import todoEntryReducer from '../reducers/todoEntryReducer';

const TodoPhaseContext = createContext<TodoEntryType<Dispatch<TodoEntryActionType>>>({
	phaseState: { entry: 'calendar', id: '' },
	phaseDispatch: () => {}
});

export const TodoPhaseContextProvider = ({ children }: { children: ReactNode }) => {
	const [phaseState, phaseDispatch] = useReducer(todoEntryReducer, { entry: 'calendar', id: '' });

	const phaseContextValue = useMemo(() => ({ phaseState, phaseDispatch }), [phaseState, phaseDispatch]);

	return <TodoPhaseContext.Provider value={phaseContextValue}>{children}</TodoPhaseContext.Provider>;
};

export default function useTodoPhaseContext() {
	return useContext(TodoPhaseContext);
}
