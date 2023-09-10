export type TodoType = {
	id?: string;
	title: string;
	startTime: Date | string | number;
	endTime: Date | string | number;
	completed: boolean;
};

export type TodoContextValueType<S> = { todoState: TodoType[]; todoDispatch: S };

type GetAllActionType = {
	type: 'todo/all';
	payload: TodoType[];
};

type AddActionType = {
	type: 'todo/add' | 'todo/edit';
	payload: TodoType;
};

type OtherActionType = {
	type: 'todo/remove' | 'todo/mark-as-completed' | 'todo/unmark-as-completed';
	payload: { id: string };
};

export type TodoActionType = GetAllActionType | AddActionType | OtherActionType;

export type TodoEntryPropType = {
	title: string;
	cancelBtnValue: string;
	successBtnValue: string;
	onclose: () => void;
};

export type PhaseStateType = {
	entry: 'create' | 'edit' | 'calendar' | 'selected';
	id: string | number;
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
	payload: { id: string };
};

type EditEntryActionType = {
	type: 'entry/edit';
	payload: { id: string };
};

export type TodoEntryActionType =
	| CreateEntryActionType
	| CalendarEntryActionType
	| SelectedEntryActionType
	| EditEntryActionType;
