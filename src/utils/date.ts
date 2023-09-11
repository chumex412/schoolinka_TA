import { CurrentMonthWeekDayType } from '../application/domain/entities/utils';

export const months = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

export const getCurrentMonthWeekdays = (limit: number) => {
	const currentDate = new Date();

	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();

	//const lastDayOfMonth = new Date(currentYear, currentMonth, 0);

	const currentMonthDetails: CurrentMonthWeekDayType[] = [];

	for (let day = currentDate.getDate() - 1; day <= currentDate.getDate() + (limit - 2); day++) {
		const currentDay = new Date(currentYear, currentMonth - 1, day);

		const weekday = currentDay.getDay();

		currentMonthDetails.push({ weekday: weekdays[weekday], day, active: day === new Date().getDate() });
	}

	return currentMonthDetails;
};
