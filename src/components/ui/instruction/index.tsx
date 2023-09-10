import { InstructionPropTypes } from '../../../application/domain/entities/ui';

const Instruction = ({ title, message }: InstructionPropTypes) => {
	return (
		<section className="">
			<h1 className="text-2xl font-semibold leading-sm">{title}</h1>
			<p className="text-base leading-lg">{message}</p>
		</section>
	);
};

export default Instruction;
