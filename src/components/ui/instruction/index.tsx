import { InstructionPropTypes } from '../../../application/domain/entities/ui';

const Instruction = ({ title, message }: InstructionPropTypes) => {
	return (
		<section>
			<h1 className="font-semibold">{title}</h1>
			<p>{message}</p>
		</section>
	);
};

export default Instruction;
