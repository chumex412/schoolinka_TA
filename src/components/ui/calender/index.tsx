import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css';
import { CalendarPropType } from '../../../application/domain/entities/ui';

const TodoCalendar = ({ value, updateState, customClass }: CalendarPropType) => {
	return (
		<div className={`se-calender ${customClass}`}>
			<Calendar value={value} onChange={updateState} />
		</div>
	);
};

export default TodoCalendar;
