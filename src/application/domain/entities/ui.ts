export type InstructionPropTypes = {
	title: string;
	message: string;
};

export type WeekdayCardPropType = {
	name: string;
	value: number;
	active: boolean;
};

export type TodoItemPropType = {
	id?: string | number;
	name: string;
	endTime?: string | number | Date;
	startTime?: string | number | Date;
	day?: string | number | Date;
	completed?: boolean;
	selected: boolean;
	handleSelected: (id: string | number) => void;
	handleCompletedTodo: (id: string | number, completed: boolean) => void;
};

export type TimeCustomInputPropType<T> = {
	Icon: T;
	value?: Date | null;
	onClick?: () => void;
};

export type EntryLabel = 'startTime' | 'endTime' | '';

export type TimePickerPropType<T> = {
	Icon: T;
	label?: EntryLabel;
	minDate?: Date | null;
	defaultValue: Date | null;
	onChange: (timeValue: Date, label: EntryLabel) => void;
};

export type ButtonPropTypes<T> = {
	customClass?: string;
	loading?: boolean;
	title: string;
	Icon?: T;
};

export type CalendarPropType = {
	value: CalendarDateValue;
	updateState?: (value: CalendarDateValue) => void;
	customClass?: string;
};

export type CalendarDateValuePiece = Date | null;

export type CalendarDateValue = CalendarDateValuePiece | [CalendarDateValuePiece, CalendarDateValuePiece];
