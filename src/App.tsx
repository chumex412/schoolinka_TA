import './App.css';
import { TaskBoard } from './components/module';
import { Header } from './components/ui';
import { MetricGroupContainer, TodosInstructionContainer } from './containers';

function App() {
	return (
		<div>
			<Header />
			<TodosInstructionContainer />
			<main className="container mt-8 flex w-full justify-between gap-x-6">
				<section className="w-full basis-4/6">
					<TaskBoard />
				</section>
				<MetricGroupContainer />
			</main>
		</div>
	);
}

export default App;
