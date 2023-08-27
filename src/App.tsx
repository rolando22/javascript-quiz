import { Container } from '@mui/material';
import { Header, Start } from './components';
import './App.css';
import { useQuestionsStore } from './store/questions';

export function App() {
	const questions = useQuestionsStore(state => state.questions);

	console.log(questions);

	return (
		<>
			<Header />
			<main>
				<Container maxWidth='sm'>
					{questions.length === 0 && <Start />}
					{questions.length > 0 && <h1>Juego</h1>}
				</Container>
			</main>
		</>
	);
}
