import { useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { useCallback } from 'react';
import { TodoPaginatedListType, PageChangeEvent, TodoListPropType } from '../../../application/domain/entities/todo';
import TodoItem from '../../ui/todo-item';
import { PreviousIcon, NextIcon } from '../../../assets';
import useTodoPhaseContext from '../../../application/controller/useTodoEntryContext';
import useTodoContext from '../../../application/controller/useTodoContext';
import useMediaQuery from '../../../application/controller/useMediaQuery';
import { updateSingleField } from '../../../application/services/todo';
import './todo-list.css';
import { CALENDAR_ENTRY, COMPLETE_TODO, SELECTED_ENTRY } from '../../../application/reducers/types';

const TaskList = ({ list = [] }: TodoListPropType) => {
	const { phaseDispatch, phaseState } = useTodoPhaseContext();
	const { todoDispatch } = useTodoContext();

	const handleComplete = useCallback(
		async (id: string | number, completed: boolean) => {
			const newTodo = await updateSingleField(id, completed);

			todoDispatch({ type: COMPLETE_TODO, payload: newTodo });
			phaseDispatch({ type: CALENDAR_ENTRY });
		},
		[todoDispatch, phaseDispatch]
	);

	const handleSelect = useCallback(
		(id: string | number) => {
			phaseDispatch({ type: SELECTED_ENTRY, payload: { id } });
		},
		[phaseDispatch]
	);

	return (
		<section className="mb-8 flex flex-col gap-y-4">
			{list.map((item) => {
				return (
					<TodoItem
						key={item.id}
						id={item.id}
						name={item.title}
						startTime={item.startTime}
						endTime={item.endTime}
						completed={item.completed}
						selected={phaseState.id === item.id}
						handleSelected={handleSelect}
						handleCompletedTodo={handleComplete}
						day={item.date}
					/>
				);
			})}
		</section>
	);
};

function PaginatedList({ items = [], itemsPerPage }: TodoPaginatedListType) {
	const [itemOffset, setItemOffset] = useState(0);

	const mobileMediaqueryRef = useRef(false);

	mobileMediaqueryRef.current = useMediaQuery('(max-width: 767px)');

	const endOffset = itemOffset + itemsPerPage;

	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event: PageChangeEvent) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;

		setItemOffset(newOffset);
	};

	return (
		<>
			<TaskList list={currentItems} />
			<ReactPaginate
				className="todo-pagination"
				activeClassName={'item active'}
				breakLabel="..."
				breakClassName={'item break'}
				nextLabel={
					mobileMediaqueryRef.current ? null : (
						<span className="flex items-center gap-x-2 text-base font-semibold leading-sm text-gray-600">
							Next <NextIcon />
						</span>
					)
				}
				nextClassName="item next"
				onPageChange={handlePageClick}
				pageRangeDisplayed={1}
				//marginPagesDisplayed={3}
				pageCount={pageCount}
				previousLabel={
					mobileMediaqueryRef.current ? null : (
						<span className="flex items-center gap-x-2 text-base font-semibold leading-sm text-gray-600">
							<PreviousIcon /> Previous
						</span>
					)
				}
				previousClassName="item previous"
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default PaginatedList;
