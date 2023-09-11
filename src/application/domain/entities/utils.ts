export type DateTimeType = string | number | Date;

export type CurrentMonthWeekDayType = {
	weekday: string;
	day: number;
	active: boolean;
};

export type QueryTypes =
	| '(min-width: 1210px)'
	| '(min-width: 1025px) and (max-width: 1209px)'
	| '(max-width: 1024px)'
	| '(max-width: 767px)';
