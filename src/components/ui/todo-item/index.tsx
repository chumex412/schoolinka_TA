import { memo, ChangeEvent, MouseEvent } from 'react';
import { TodoItemPropType } from '../../../application/domain/entities/ui';
import './style.css';
import { longDateFormat, timeFormat } from '../../../utils/format';

const TodoItem = memo(
	({
		id = '',
		name = '',
		startTime,
		endTime,
		day,
		completed = false,
		selected,
		handleSelected = () => {},
		handleCompletedTodo = () => {}
	}: TodoItemPropType) => {
		console.log(id);

		return (
			<article
				className={`todo-item ${
					selected && !completed ? 'bg-[#EAEDFE]' : 'bg-gray-50'
				} border border-gray-200 px-6 py-3.5`}
				onClick={(e: MouseEvent<HTMLElement>) => {
					e.stopPropagation();
					const target = e.target as HTMLElement;
					if (!target.classList.contains('todo-checkbox') && !completed) handleSelected(id);
				}}
			>
				<div>
					<input
						type="checkbox"
						className="todo-checkbox"
						defaultChecked={completed}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							handleCompletedTodo(id, e.target.checked);
						}}
					/>
				</div>
				<div>
					<h4 className={`mb-1 ${completed ? 'text-[#D0D5DD]' : 'text-gray-900'} text-base font-semibold leading-lg`}>
						{name}
					</h4>
					<p className={`${completed ? 'text-[#D0D5DD]' : 'text-gray-600'} text-base leading-lg`}>
						{startTime ? <span>{timeFormat(startTime, 'en-GB')}</span> : '00:00'}
						{' - '}
						{endTime ? <span>{timeFormat(endTime, 'en-GB')}</span> : '00:00'}
					</p>
				</div>
				<div>
					<p className="text-base leading-lg text-gray-600">
						{day && longDateFormat(day) === longDateFormat(Date.now()) ? 'Today' : !day ? null : longDateFormat(day)}
					</p>
				</div>
			</article>
		);
	}
);

export default TodoItem;
