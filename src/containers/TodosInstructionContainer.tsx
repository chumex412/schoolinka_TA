import useTodoPhaseContext from '../application/controller/useTodoEntryContext';
import { CREATE_ENTRY } from '../application/reducers/types';
import { PlusIcon } from '../assets';
import { Instruction, PrimaryButton } from '../components/ui';

const TodosInstructionContainer = () => {
	const { phaseDispatch } = useTodoPhaseContext();

	const showCreateTodoFormHandler = () => {
		phaseDispatch({ type: CREATE_ENTRY });
	};

	return (
		<section className=" container mt-12 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
			<Instruction title="Good morning!" message="You got some task to do. " />
			<div>
				<PrimaryButton
					Icon={PlusIcon}
					onClick={showCreateTodoFormHandler}
					title="Create New Task"
					customClass="bg-primary border-primary text-[#ffffff]"
				/>
			</div>
		</section>
	);
};

export default TodosInstructionContainer;
