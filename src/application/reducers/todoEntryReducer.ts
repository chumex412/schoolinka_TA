import { PhaseStateType, TodoEntryActionType } from '../domain/entities/todo';
import { CALENDAR_ENTRY, CREATE_ENTRY, EDIT_ENTRY, SELECTED_ENTRY } from './types';

const todoEntryReducer = (state: PhaseStateType, action: TodoEntryActionType) => {
	if (action.type === CREATE_ENTRY) {
		state.entry = 'create';

		return { ...state, id: '' };
	}

	if (action.type === CALENDAR_ENTRY) {
		state.entry = 'calendar';

		return { ...state, id: '' };
	}

	if (action.type === EDIT_ENTRY) {
		state.entry = 'edit';

		return { ...state, id: action.payload.id };
	}

	if (action.type === SELECTED_ENTRY) {
		state.entry = 'selected';

		return { ...state, id: action.payload.id };
	}
	return state;
};

export default todoEntryReducer;
