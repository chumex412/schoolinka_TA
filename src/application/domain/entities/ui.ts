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
	name: string;
	endTime: string | number | Date;
	startTime: string | number | Date;
	day: string;
	completed: boolean;
	handleCompletedTodo: () => void;
};

export type TimeCustomInputPropType<T> = {
	Icon: T;
	value?: Date | null;
	onClick?: () => void;
};

export type TimePickerPropType<T> = {
	Icon: T;
	defaultValue: Date | null;
};

export type ButtonPropTypes<T> = {
	customClass?: string;
	loading?: boolean;
	title: string;
	Icon?: T;
};

export type CalendarPropType = {
	value: Date;
	updateState?: () => void;
	customClass?: string;
};
