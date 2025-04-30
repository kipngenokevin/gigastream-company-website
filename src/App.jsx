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
					content='https://gigastreammedia.net/images/og-image.jpg'
				/>
				<meta property='og:url' content='https://gigastreammedia.net' />

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
					content='https://gigastreammedia.net/images/og-image.jpg'
				/>

				{/* Structured Data (JSON-LD) */}
				<script type='application/ld+json'>
					{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gigastream Media Limited",
              "url": "https://gigastreammedia.net",
              "logo": "https://gigastreammedia.net/images/logo.png",
              "description": "Innovative branding and advertising solutions to engage audiences."
            }
          `}
				</script>

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'></script>
				<script>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
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
