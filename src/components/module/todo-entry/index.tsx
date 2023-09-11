import { useState, useCallback, ChangeEvent } from 'react';
import notify from '../../ui/notification/notify';
import { TodoEntryPropType, EntriesType } from '../../../application/domain/entities/todo';
import { BellIcon, CalendarIcon, ClockIcon, CloseIcon } from '../../../assets';
import { CustomDatePicker, PrimaryButton, TimePicker } from '../../ui';
import { EntryLabel } from '../../../application/domain/entities/ui';

const TodoEntry = ({
	id,
	title,
	name = '',
	successBtnValue,
	cancelBtnValue,
	onSuccess,
	onclose = () => {}
}: TodoEntryPropType) => {
	const [entries, setEntries] = useState<EntriesType>({
		title: name || '',
		startTime: new Date(new Date().setHours(0, 0, 0, 0)),
		endTime: new Date(new Date().setHours(0, 0, 0, 0)),
		date: new Date()
	});

	const getTimeValue = useCallback(
		(timeValue: Date, label: EntryLabel) => {
			setEntries((prevEntries) => ({ ...prevEntries, [label]: timeValue }));
		},
		[entries.endTime, entries.startTime]
	);

	const getDateValue = useCallback(
		(timeValue: Date) => {
			setEntries((prevEntries) => ({ ...prevEntries, date: timeValue }));
		},
		[entries.date]
	);

	const todoNameHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setEntries((prevEntries) => ({ ...prevEntries, title: e.target.value }));
	};

	const handleSubmit = () => {
		if (!entries.title) {
			notify('Please enter a valid todo name', 'error');
			return;
		}

		if (entries.startTime && entries.endTime && entries.startTime >= entries.endTime) {
			notify('The time to end your todo must be after the start time', 'error');
			return;
		}
		onSuccess(entries, id);
	};

	return (
		<>
			<section className="rounded p-6 md:border md:border-gray-100">
				<div className="mb-4 flex items-center justify-between">
					<h4 className="text-lg font-semibold leading-sm text-gray-900">{title}</h4>
					<CloseIcon onClick={onclose} style={{ cursor: 'pointer' }} />
				</div>
				<section className="mb-4">
					<textarea
						className="h-[140px] w-full rounded border border-gray-300 bg-gray-50 p-4"
						defaultValue={name}
						onChange={todoNameHandler}
					></textarea>
				</section>
				<section className="mb-4 flex items-center justify-between gap-x-4">
					<CustomDatePicker Icon={CalendarIcon} onChange={getDateValue} defaultValue={entries.date} />
					<section className="flex gap-x-4">
						<TimePicker
							Icon={ClockIcon}
							minDate={entries.startTime}
							onChange={getTimeValue}
							label="startTime"
							defaultValue={entries.startTime}
						/>
						<TimePicker
							Icon={ClockIcon}
							minDate={entries.startTime}
							onChange={getTimeValue}
							label="endTime"
							defaultValue={entries.endTime}
						/>
					</section>
				</section>
				<section className="mb-8 flex flex-wrap items-center gap-x-2">
					<BellIcon />
					<span className="text-md leading-lg text-gray-600">10 Minute before</span>
				</section>
				<section className="flex items-center gap-x-3">
					<PrimaryButton
						title={cancelBtnValue}
						loading={false}
						onClick={onclose}
						customClass="basis-1/2 text-gray-700"
					/>
					<PrimaryButton
						title={successBtnValue}
						loading={false}
						onClick={handleSubmit}
						customClass="basis-1/2 bg-primary border-primary text-[#ffffff]"
					/>
				</section>
			</section>
		</>
	);
};

export default TodoEntry;
