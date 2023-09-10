import { forwardRef, FC, SVGProps } from 'react';
import { TimeCustomInputPropType } from '../../../application/domain/entities/ui';

type ButtonRefType = HTMLButtonElement | null;

const CustomDateInput = forwardRef<
	ButtonRefType,
	TimeCustomInputPropType<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>
>((props, ref) => (
	<section className="flex items-center gap-x-2 rounded rounded-xl border border-gray-300 px-4 py-2.5">
		<props.Icon />
		<button onClick={props.onClick} ref={ref} className="text-base font-semibold leading-sm text-gray-500">
			{String(props.value)}
		</button>
	</section>
));

export default CustomDateInput;
