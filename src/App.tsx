import './App.css';
import { TaskBoard } from './components/module';
import { Header } from './components/ui';
import { NotifyContainer } from './components/ui';
import { MetricGroupContainer, TodosInstructionContainer, WeekDaysCardContainer } from './containers';

function App() {
	return (
		<div>
			<Header />
			<TodosInstructionContainer />
			<main className="container mt-8 flex w-full flex-col justify-between gap-x-6 md:flex-row">
				<section className="w-full lg:basis-4/5 2xl:basis-4/6">
					<WeekDaysCardContainer />
					<TaskBoard />
				</section>
				<MetricGroupContainer />
			</main>
			<NotifyContainer />
		</div>
	);
}

export default App;
