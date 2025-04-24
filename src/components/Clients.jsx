/** @format */
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
	const sectionRef = useRef(null);
	const logosRef = useRef(null);

	const brandLogos = [
		"/ArtCaffe.png",
		"https://radissonblu-menu.Ubuntu.click/images/logo.png",
		"https://artcaffemenu.Ubuntu.click/images/SAF-MAIN-LOGO.png",
		"https://cdn-webportal.airtelstream.net/website/kenya/assets/images/logo.svg",
	];

	const extendedBrandLogos = [...brandLogos, ...brandLogos, ...brandLogos,...brandLogos];

	useEffect(() => {
		const ctx = gsap.context(() => {
			const logosContainer = logosRef.current;
			const logos = gsap.utils.toArray(".client-logo", logosContainer);

			const logoWidth = 150; 
			const gap = 128; 
			const totalWidth = logos.length * (logoWidth + gap); 

			gsap.set(logosContainer, { width: totalWidth });

			
			gsap.to(logosContainer, {
				x: -totalWidth / 3,
				duration: 25,
				ease: "none",
				repeat: -1,
				modifiers: {
					x: (x) => `${parseFloat(x) % (totalWidth / 3)}px`, 
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
										className='img-fluid client-logo grayscale-100 contrast-100 brightness-200'
										src={src}
										alt={`Client logo ${
											(index % brandLogos.length) + 1
										}`}
										width={150}
										style={{ flexShrink: 0 }}
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
