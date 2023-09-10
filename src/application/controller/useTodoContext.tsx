import { useContext, useReducer, createContext, ReactNode, useEffect, useMemo, Dispatch } from 'react';
import { TodoActionType, TodoContextValueType, TodoType } from '../domain/entities/todo';
import { getTodos } from '../services/todo';
import todoReducer from '../reducers/todoReducer';

const TodoContext = createContext<TodoContextValueType<Dispatch<TodoActionType>>>({
	todoState: [],
	todoDispatch: () => {}
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
	const [todoState, todoDispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		(async function () {
			const allTodos: TodoType[] = await getTodos();

			todoDispatch({ type: 'todo/all', payload: allTodos });
		})();
	}, []);

	const todoContextValues = useMemo(() => ({ todoState, todoDispatch }), [todoState, todoDispatch]);

	return <TodoContext.Provider value={todoContextValues}>{children}</TodoContext.Provider>;
};

function useTodoContext() {
	return useContext(TodoContext);
}

export default useTodoContext;
