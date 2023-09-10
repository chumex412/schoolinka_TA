import useTodoContext from '../application/controller/useTodoContext';
import { TaskList } from '../components/module';

const TodosContainer = () => {
	const { todoState } = useTodoContext();
	console.log(todoState);

	return <TaskList list={[]} />;
};

export default TodosContainer;
