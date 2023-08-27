import { Header, Start } from './components';
import './App.css';
import { Container } from '@mui/material';

export function App() {
	return (
		<>
			<Header />
			<main>
				<Container maxWidth='sm'>
					<Start />
				</Container>
			</main>
		</>
	);
}
