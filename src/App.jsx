/** @format */

import MainSection from "./MainSection";
import Footer from "./Footer";
import Hero from "./Hero";
import { Helmet } from "react-helmet";

function App() {
	return (
		<>
			<Helmet>
				{/* Page Title with Keywords */}
				<title>
					Gigastream Media: Innovative Branding & Advertising
				</title>

				{/* Meta Description */}
				<meta
					name='description'
					content='Gigastream Media offers innovative branding and advertising solutions to engage audiences and drive growth.'
				/>

				{/* Open Graph */}
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Gigastream Media: Innovative Branding & Advertising'
				/>
				<meta
					property='og:description'
					content='Gigastream Media offers innovative branding and advertising solutions to engage audiences and drive growth.'
				/>
				<meta
					property='og:image'
					content='https://res.cloudinary.com/dipqldzry/image/upload/v1754384213/gigastream-logo_ukqfvq.svg'
				/>
				<meta property='og:url' content='https://gigastreammedia.com' />

				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Gigastream Media: Innovative Branding & Advertising'
				/>
				<meta
					name='twitter:description'
					content='Gigastream Media offers innovative branding and advertising solutions to engage audiences and drive growth.'
				/>
				<meta
					name='twitter:image'
					content='https://res.cloudinary.com/dipqldzry/image/upload/v1754384213/gigastream-logo_ukqfvq.svg'
				/>

				{/* Structured Data (JSON-LD) */}
				<script type='application/ld+json'>
					{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gigastream Media Limited",
              "url": "https://gigastreammedia.com",
              "logo": "https://res.cloudinary.com/dipqldzry/image/upload/v1754384213/gigastream-logo_ukqfvq.svg",
              "description": "Innovative branding and advertising solutions to engage audiences."
            }
          `}
				</script>
			</Helmet>
			<Hero />
			<MainSection />
			<Footer />
		</>
	);
}

export default App;
