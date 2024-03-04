import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

import { Novatrix  } from 'uvcanvas';

export default function App() {
    return (
		<>
			<Header />
			<main>
				<AuthInputs />
			</main>
			<Novatrix  className='absolute top-0 left-0 z-[-1]' />
		</>
    );
}
