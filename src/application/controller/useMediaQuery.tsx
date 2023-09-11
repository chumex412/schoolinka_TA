import { useState, useEffect } from 'react';
import { QueryTypes } from '../domain/entities/utils';

const useMediaQuery = (query: QueryTypes) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mql: MediaQueryList = window.matchMedia(query);

		if (mql.matches !== matches) {
			setMatches(mql.matches);
		}

		const listener = () => {
			setMatches(mql.matches);
		};

		mql.addEventListener('change', listener);

		return () => mql.removeEventListener('change', listener);
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
