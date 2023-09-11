import { toast, ToastOptions, ToastPosition } from 'react-toastify';
import './notify.css';

const notify = (text: string, action: 'success' | 'error') => {
	const otherProps: ToastOptions<ToastPosition> = {
		position: 'top-right',
		autoClose: 3000
	};

	if (action === 'success') {
		toast.success(text, {
			className: `text-dark px-4 py-2 bg-gray-500`,
			...otherProps
		});
	}

	if (action === 'error') {
		toast.error(text, {
			className: 'text-dark error px-4 py-2',
			...otherProps
		});
	}
};

export default notify;
