import { useState, SVGProps, FC } from 'react';
import DatePicker from 'react-datepicker';
import { CustomDateInput } from '../../common';
import { TimePickerPropType } from '../../../application/domain/entities/ui';

const CustomDatePicker = ({
	Icon,
	defaultValue
}: TimePickerPropType<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(defaultValue);

	const selectedDateHandler = (date: Date) => {
		setSelectedDate(date);
	};

	const today = new Date();
	const newDate = new Date(today);
	const minDate = new Date(newDate.setDate(newDate.getDate() - 1));

	return (
		<DatePicker
			selected={selectedDate}
			minDate={minDate}
			//todayButton={'Today'}
			dateFormat="MM/dd/yyyy"
			onChange={selectedDateHandler}
			customInput={<CustomDateInput Icon={Icon} />}
		/>
	);
};

export default CustomDatePicker;
