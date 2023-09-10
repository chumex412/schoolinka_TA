import { WeekdayCardPropType } from '../../../application/domain/entities/ui';

const WeekdayCard = ({ name, value, active }: WeekdayCardPropType) => {
	return (
		<section
			className={`px-4 pt-2.5 text-base font-semibold leading-lg ${
				active ? 'text-white bg-primary' : 'bg-white text-gray-900'
			}`}
		>
			<h4 className="mb-2">{name}</h4>
			<p>{value}</p>
		</section>
	);
};

export default WeekdayCard;
