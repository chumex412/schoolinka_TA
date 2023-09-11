import { WeekdayCardPropType } from '../../../application/domain/entities/ui';

const WeekdayCard = ({ name, value, active }: WeekdayCardPropType) => {
	return (
		<section
			className={`w-[49.37px] rounded border px-3 py-2 text-center text-base font-semibold leading-lg shadow-md lg:w-[56px] lg:px-4 lg:py-2.5 2xl:w-[62px] ${
				active ? 'bg-primary text-[#ffffff]' : 'bg-white border-gray-300 text-gray-900'
			}`}
		>
			<h4 className="mb-2">{name}</h4>
			<p>{value}</p>
		</section>
	);
};

export default WeekdayCard;
