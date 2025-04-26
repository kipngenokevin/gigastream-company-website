/** @format */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
	const sectionRef = useRef(null);
	const logosRef = useRef(null);

	const brandLogos = [
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745561473/ArtCaffe_txmznp.png",
		"https://radissonblu-menu.Ubuntu.click/images/logo.png",
		"https://cdn.prod.website-files.com/64f1bc37dbffae8a63039ba2/652d21cea649f7473794651a_East_African_Breweries_EABL_2022_Logo.svg",
		"https://artcaffemenu.Ubuntu.click/images/SAF-MAIN-LOGO.png",
		"https://cdn.freebiesupply.com/logos/large/2x/pernod-ricard-logo-png-transparent.png",
		"https://change.jambojet.com/Content/Images/jx-logo-2.png",
		"https://rubiskenya.com/wp-content/uploads/2020/06/favicon-min.png",
		"https://www.europeanbiomethaneweek.eu/wp-content/uploads/2024/03/TotalEnergies-1024x809.png.webp",
		"https://globalooh.net/wp-content/uploads/2019/05/stanbic-bank.png",
		"https://cdn.freebiesupply.com/images/large/2x/glaxosmithkline-logo-black-and-white.png",
		"https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/United_Bank_for_Africa_logo.svg/1200px-United_Bank_for_Africa_logo.svg.png",
		"https://tashheer.com/wp-content/uploads/2023/10/jubilee.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/BIDCO-AFRICA-LOGO-removebg-preview_xam5sf.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/ncba-bank-logo_ww4ner.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/unilever-logo_pdwji7.png",
		"https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745667041/bank-of-africa_fqa8bt.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/pro-gas-removebg-preview_glxqdm.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/absa_mghras.png",
		"https://cdn-webportal.airtelstream.net/website/kenya/assets/images/logo.svg",
		"https://www.shofco.org/wp-content/uploads/2020/06/bidco-africa.png",
		"https://firstassurance.co.ke/wp-content/uploads/2023/02/FIRST-ASSUARANCE-1-1.png",
		"https://equitygroupholdings.com/ke/ke/Content/assets/img/equity-bank-logo.png",
		"https://fidelityshield.com/wp-content/uploads/2022/12/FIDELITY-LOGO-White.png",
		"https://icealion.co.ug/wp-content/uploads/2021/03/cropped-cropped-ICEA-LION-LOGO-Horizontal-UG-01-1.png",
		"https://res.cloudinary.com/dipqldzry/image/upload/v1745664459/national-oil_obyctu.png",
	];

	// Use two sets of logos for seamless looping
	const extendedBrandLogos = [...brandLogos, ...brandLogos];

	useEffect(() => {
		const ctx = gsap.context(() => {
			const logosContainer = logosRef.current;
			const logos = gsap.utils.toArray(".client-logo", logosContainer);

			// Calculate the width of one logo set dynamically
			const firstLogoSet = logos.slice(0, brandLogos.length);
			const logoSetWidth = firstLogoSet.reduce((width, logo) => {
				const style = window.getComputedStyle(logo);
				const logoWidth = logo.offsetWidth;
				const marginRight = parseFloat(style.marginRight) || 0;
				return width + logoWidth + marginRight;
			}, 0);

			// Set container width to accommodate two logo sets
			gsap.set(logosContainer, { width: logoSetWidth * 2 });

			// Animate to move one logo set's width, then reset
			gsap.to(logosContainer, {
				x: -logoSetWidth,
				duration: 20, // Adjust for speed (lower = faster)
				ease: "none",
				repeat: -1,
				modifiers: {
					x: (x) => `${parseFloat(x) % logoSetWidth}px`,
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className='clients-section' ref={sectionRef}>
			<div className='container'>
				<div className='col-sm-12'>
					<h2 className='text-center title clients-title'>
						Our Clients
					</h2>
					<p className='text-center clients-title'>
						We’ve worked with leading brands across various
						industries, delivering impactful out-of-home media
						experiences that drive results and create real-world
						impact.
					</p>

					<div className='carousel-container'>
						<div className='overflow-hidden'>
							<div
								className='clients-container flex gap-24 md:gap-54 lg:gap-54 mt-4 items-center'
								ref={logosRef}>
								{extendedBrandLogos.map((src, index) => (
									<img
										key={index}
										className='client-logo grayscale-100 contrast-100 brightness-200'
										src={src}
										alt={`Client logo ${
											(index % brandLogos.length) + 1
										}`}
										style={{
											width: "150px",
											flexShrink: 0,
										}} // Consistent width
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
