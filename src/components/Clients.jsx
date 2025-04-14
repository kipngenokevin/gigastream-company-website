/** @format */

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const targets = gsap.utils.toArray(".client-logo");

			gsap.from(targets, {
				opacity: 0,
				y: 50,
				duration: 1,
				stagger: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					scrub: true,
					trigger: sectionRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});

			gsap.from(".clients-title", {
				opacity: 0,
				y: 30,
				duration: 1,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
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
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore
					</p>

					<div className='d-flex justify-content-around align-items-center clients-container flex-wrap gap-4 mt-4'>
						<img
							className='img-fluid client-logo'
							src='/ArtCaffe.png'
							alt='Artcaffe'
							width={150}
						/>
						<img
							className='img-fluid client-logo'
							src='https://radissonblu-menu.ubuntu.click/images/logo.png'
							alt='Radisson Blu'
							width={150}
						/>
						<img
							className='img-fluid client-logo'
							src='https://artcaffemenu.ubuntu.click/images/SAF-MAIN-LOGO.png'
							alt='Safaricom'
							width={150}
						/>
						<img
							className='img-fluid client-logo'
							src='https://cdn-webportal.airtelstream.net/website/kenya/assets/images/logo.svg'
							alt='Airtel'
							width={150}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
