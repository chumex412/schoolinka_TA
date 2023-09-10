import { TodoEntryPropType } from '../../../application/domain/entities/todo';
import { BellIcon, CalendarIcon, ClockIcon, CloseIcon } from '../../../assets';
import { CustomDatePicker, PrimaryButton, TimePicker } from '../../ui';

const TodoEntry = ({ title, successBtnValue, cancelBtnValue, onclose = () => {} }: TodoEntryPropType) => {
	return (
		<section className="rounded border border-gray-100 p-6">
			<div className="mb-4 flex items-center justify-between">
				<h4 className="text-lg font-semibold leading-sm text-gray-900">{title}</h4>
				<CloseIcon onClick={onclose} style={{ cursor: 'pointer' }} />
			</div>
			<section className="mb-4">
				<textarea className="h-[140px] w-full rounded border border-gray-300 bg-gray-50 p-4"></textarea>
			</section>
			<section className="mb-4 flex items-center justify-between gap-x-4">
				<CustomDatePicker Icon={CalendarIcon} defaultValue={new Date()} />
				<section className="flex gap-x-4">
					<TimePicker Icon={ClockIcon} defaultValue={new Date(new Date().setHours(0, 0, 0, 0))} />
					<TimePicker Icon={ClockIcon} defaultValue={new Date(new Date().setHours(0, 0, 0, 0))} />
				</section>
			</section>
			<section className="mb-8 flex flex-wrap items-center gap-x-2">
				<BellIcon />
				<span className="text-md leading-lg text-gray-600">10 Minute before</span>
			</section>
			<section className="flex items-center gap-x-3">
				<PrimaryButton title={cancelBtnValue} loading={false} customClass="basis-1/2 text-gray-700" />
				<PrimaryButton
					title={successBtnValue}
					loading={false}
					customClass="basis-1/2 bg-primary border-primary text-[#ffffff]"
				/>
			</section>
		</section>
	);
};

export default TodoEntry;
