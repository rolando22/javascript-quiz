import { Container } from '@mui/material';
import { Footer, Game, Header, Start } from './components';
import { useQuestionsStore } from './store/questions';
import './App.css';

export function App() {
	const questions = useQuestionsStore(state => state.questions);

	return (
		<>
			<Header />
			<main>
				<Container maxWidth='sm'>
					{questions.length === 0 && <Start />}
					{questions.length > 0 && <Game />}
				</Container>
			</main>
			<Footer />
		</>
	);
}
