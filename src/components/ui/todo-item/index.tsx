import { TodoItemPropType } from '../../../application/domain/entities/ui';
import './style.css';

const TodoItem = ({
	name = '',
	startTime,
	endTime,
	day,
	completed = false,
	handleCompletedTodo = () => {}
}: TodoItemPropType) => {
	return (
		<article className="todo-item border border-gray-200 bg-gray-50 px-6 pt-3.5">
			<div>
				<input type="checkbox" defaultChecked={completed} onChange={() => handleCompletedTodo()} />
			</div>
			<div>
				<h4>{name}</h4>
				<p>
					<span>{String(startTime)}</span> <span>{String(endTime)}</span>
				</p>
			</div>
			<div>
				<p>{day}</p>
			</div>
		</article>
	);
};

export default TodoItem;
