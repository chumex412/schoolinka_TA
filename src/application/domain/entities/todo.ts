export type TodoType = {
	userId?: string | number;
	id?: string | number;
	title: string;
	date: Date | string;
	startTime?: Date | string | number;
	endTime?: Date | string | number;
	completed?: boolean;
};

export type TodoContextValueType<S> = { todoState: TodoType[]; todoDispatch: S };

type GetAllActionType = {
	type: 'todo/all' | 'todo/filter';
	payload: TodoType[];
};

type AddActionType = {
	type: 'todo/add' | 'todo/edit';
	payload: TodoType;
};

type RemoveActionType = {
	type: 'todo/remove';
	payload: { id: string | number };
};

type OtherActionType = {
	type: 'todo/mark-as-completed' | 'todo/unmark-as-completed';
	payload: TodoType;
};

export type TodoActionType = GetAllActionType | AddActionType | RemoveActionType | OtherActionType;

export type TodoEntryPropType = {
	id: string | number;
	title: string;
	name?: string;
	cancelBtnValue: string;
	successBtnValue: string;
	onSuccess: (todoPayload: EntriesType, id?: string | number) => void;
	onclose: () => void;
};

export type EntriesType = {
	title: string;
	startTime: Date | null;
	endTime: Date | null;
	date: Date | null;
	userId?: number;
};

export type PhaseStateType = {
	entry: 'create' | 'edit' | 'calendar' | 'selected';
	id: string | number;
	date: Date | string;
};

export type TodoEntryType<S> = {
	phaseState: PhaseStateType;
	phaseDispatch: S;
};

type CreateEntryActionType = {
	type: 'entry/create';
};

type CalendarEntryActionType = {
	type: 'entry/calendar';
};

type SelectedEntryActionType = {
	type: 'entry/selected';
	payload: { id: string | number };
};

type EditEntryActionType = {
	type: 'entry/edit';
	payload: { id: string | number };
};

type FilterEntryActionType = {
	type: 'entry/filter';
	payload: { date: Date | string };
};

export type TodoEntryActionType =
	| CreateEntryActionType
	| CalendarEntryActionType
	| SelectedEntryActionType
	| EditEntryActionType
	| FilterEntryActionType;

export type SelectedEntryType = {
	//id: string | number;
	title: string;
	date?: Date | string;
	startTime?: Date | string | number;
	endTime?: Date | string | number;
	onDelete: () => void;
	onEdit: () => void;
	onClose: () => void;
};

export type TodoListPropType = {
	list: TodoType[];
};

export type TodoPaginatedListType = { itemsPerPage: number; items: TodoType[] };

export type PageChangeEvent = {
	selected: number;
};

export type WeekDayPropType = {
	month: string;
	limit: number;
};
