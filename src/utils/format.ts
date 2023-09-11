import { DateTimeType } from '../application/domain/entities/utils';
import { createDateFormatOptions, createTimeFormatOptions } from '../application/domain/models/utils';

export const longDateFormat = (date: DateTimeType) => {
	if (!date) return;
	const newDate = new Date(date) as Date;

	return new Intl.DateTimeFormat('en-NG', createDateFormatOptions('2-digit', '2-digit', 'numeric')).format(newDate);
};

export const timeFormat = (date: Date | DateTimeType = Date.now(), countryCode: 'en-US' | 'en-GB') => {
	const newDate = new Date(date);

	return newDate.toLocaleString(countryCode, createTimeFormatOptions('numeric', 'numeric', true));
};
