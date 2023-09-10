import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TodoContextProvider } from './application/controller/useTodoContext.tsx';
import './index.css';

import '@fontsource-variable/work-sans';
import { TodoPhaseContextProvider } from './application/controller/useTodoEntryContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TodoContextProvider>
			<TodoPhaseContextProvider>
				<App />
			</TodoPhaseContextProvider>
		</TodoContextProvider>
	</React.StrictMode>
);
