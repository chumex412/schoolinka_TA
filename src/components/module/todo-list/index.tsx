import { TodoType } from '../../../application/domain/entities/todo';
import TodoItem from '../../ui/todo-item';

const TaskList = ({ list = [] }: { list: TodoType[] }) => {
	return (
		<section>
			{list.map((item) => {
				return (
					<TodoItem
						name={item.title}
						startTime={item.startTime}
						endTime={item.endTime}
						completed={item.completed}
						handleCompletedTodo={() => {}}
						day=""
					/>
				);
			})}
		</section>
	);
};

export default TaskList;
