/** @format */

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Arrow from "../../public/arrow.svg";
import Gradient from "../../public/gradient.svg";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".blog-animate", {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					scrub: true,
					trigger: sectionRef.current,
					start: "top 100%",
					toggleActions: "play none none none",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id='blog'
			ref={sectionRef}
			className='blog-section d-flex align-items-center'>
			<div className='container'>
				<div className='col-sm-6'>
					<img
						src={Gradient}
						alt='gradient'
						className='img-fluid blog-animate'
					/>
					<h2 className='title blog-animate'>
						Lorem ipsum dolor sit amet
					</h2>
					<p className='blog-animate'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore
					</p>
					<div className='work-container-btn blog-animate'>
						<button className='dark-bg flex items-center gap-3 group'>
							<b>Read More</b>
							<BsArrowRight className="text-2xl group-hover:translate-x-2 transition-all duration-300"/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
