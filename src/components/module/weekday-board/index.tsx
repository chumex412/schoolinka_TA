import { WeekDayPropType } from '../../../application/domain/entities/todo';
import { getCurrentMonthWeekdays } from '../../../utils/date';
import { WeekdayCard } from '../../ui';

const WeekDayBoard = ({ month, limit }: WeekDayPropType) => {
	return (
		<section className="pb-8">
			<h3 className="mb-4 text-md font-semibold leading-sm text-gray-900">{month}</h3>
			<section className="flex gap-x-2">
				{getCurrentMonthWeekdays(limit).map((item) => {
					return <WeekdayCard key={item.day} name={item.weekday} value={item.day} active={item.active} />;
				})}
			</section>
		</section>
	);
};

export default WeekDayBoard;
