import { TodosContainer } from '../../../containers';

const TaskBoard = () => {
	return (
		<section>
			<h3 className="mb-4 text-md font-semibold leading-sm text-gray-900">My Tasks</h3>
			<TodosContainer />
		</section>
	);
};

export default TaskBoard;
