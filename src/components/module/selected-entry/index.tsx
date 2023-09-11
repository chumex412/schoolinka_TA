import { SelectedEntryType } from '../../../application/domain/entities/todo';
import { CloseIcon, ColoredCalendarIcon, ColoredClockIcon } from '../../../assets';
import { PrimaryButton } from '../../ui';

const SelectedEntry = ({ title = '', date, startTime, endTime, onDelete, onEdit, onClose }: SelectedEntryType) => {
	return (
		<section className="px-6 py-5">
			<div className="flex justify-end">
				<CloseIcon onClick={onClose} />
			</div>
			<section className="mb-8">
				<h4 className="mb-8 text-lg font-bold leading-sm text-[#272727]">
					{title.charAt(0).toUpperCase() + title.slice(1)}
				</h4>
				<p className="mb-2 flex gap-x-2">
					<ColoredCalendarIcon />{' '}
					<span>
						{date && typeof date === 'string' ? date : typeof date === 'object' ? String(date) : 'No date set yet'}
					</span>
				</p>
				<p className="flex gap-x-2">
					<ColoredClockIcon />{' '}
					<span>
						<span>{startTime ? String(startTime) : null}</span> <span>{endTime ? String(endTime) : null}</span>
					</span>
				</p>
			</section>
			<section className="flex gap-x-3">
				<PrimaryButton title="Delete" customClass="text-gray-700 basis-1/2" onClick={onDelete} />
				<PrimaryButton title="Edit" customClass="bg-primary text-[#ffffff] border-primary basis-1/2" onClick={onEdit} />
			</section>
		</section>
	);
};

export default SelectedEntry;
