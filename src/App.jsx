import MainSection from './MainSection'
import Footer from './Footer'
import Hero from './Hero'
import { Helmet } from 'react-helmet'

function App() {

  return (
		<>
			<Helmet>
				<title>Gigastream Media</title>
				<meta
					name='description'
					content='Gigastream Media offers innovative branding and advertising solutions to engage audiences and drive growth.'
				/>
			</Helmet>
			<Hero />
			<MainSection />
			<Footer />
		</>
  );
}

export default App
