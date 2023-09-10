import { ComponentPropsWithoutRef, FC, SVGProps } from 'react';
import { ButtonPropTypes } from '../../../application/domain/entities/ui';

type ButtonProps = ButtonPropTypes<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>> &
	ComponentPropsWithoutRef<'button'>;

const PrimaryButton = ({ customClass, loading, title, Icon, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`flex items-center border-gray-300 ${
				!Icon ? 'justify-center' : ''
			} gap-x-2 rounded-lg border px-4 py-2.5 text-md font-semibold xl:px-[18px] ${customClass}`}
		>
			{Icon ? <Icon /> : null}
			{loading ? 'Loading...' : title}
		</button>
	);
};

export default PrimaryButton;
