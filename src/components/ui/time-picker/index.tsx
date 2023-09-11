import { SVGProps, FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { CustomDateInput } from '../../common';
import { TimePickerPropType } from '../../../application/domain/entities/ui';
import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = ({
	Icon,
	label,
	minDate,
	defaultValue,
	onChange
}: TimePickerPropType<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>) => {
	const [selectedTime, setSelectedTime] = useState<Date | null>(defaultValue);

	const selectedTimeHandler = (date: Date) => {
		setSelectedTime(date);
		if (label) onChange(date, label);
	};

	return (
		<DatePicker
			selected={selectedTime}
			dateFormat="HH:mm"
			showTimeSelect
			showTimeSelectOnly
			timeFormat="HH:mm"
			timeCaption="Time"
			minDate={minDate}
			onChange={selectedTimeHandler}
			customInput={<CustomDateInput Icon={Icon} />}
		/>
	);
};

export default TimePicker;
