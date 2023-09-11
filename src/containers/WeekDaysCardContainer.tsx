import { useRef } from 'react';
import { WeekDayBoard } from '../components/module';
import { months } from '../utils/date';
import useMediaQuery from '../application/controller/useMediaQuery';

const WeekDaysCardContainer = () => {
	const mediaQueryDesktopRef = useRef(false);
	const mediaQueryTabletRef = useRef(false);
	const mediaQueryMobileRef = useRef(false);

	mediaQueryDesktopRef.current = useMediaQuery('(min-width: 1210px)');
	mediaQueryTabletRef.current = useMediaQuery('(min-width: 1025px) and (max-width: 1209px)');
	mediaQueryMobileRef.current = useMediaQuery('(max-width: 767px)');

	const currentDate = new Date();

	const month = months[currentDate.getMonth()];

	return <WeekDayBoard month={month} limit={mediaQueryDesktopRef.current ? 11 : mediaQueryTabletRef.current ? 9 : 6} />;
};

export default WeekDaysCardContainer;
