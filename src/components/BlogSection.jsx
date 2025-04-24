/** @format */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gradient from "../../public/gradient.svg";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
	const sectionRef = useRef(null);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".blog-animate",
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					stagger: 0.3,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	const toggleContent = () => setShowMore((prev) => !prev);

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
					<h2 className='title blog-animate'>Who we are... </h2>
					<p className='blog-animate text-2xl leading-9'>
						We are a bespoke advertising media tech company that
						focuses on making real-life consumer and brand
						connections.
					</p>

					{showMore && (
						<div className='blog-animate mt-4'>
							<p className='text-lg leading-8'>
								<strong>
									Driving Business Growth through the power of
									meaningful media experiences.
								</strong>{" "}
								We leverage the power of location, creative, and
								smart audience data to drive meaningful
								connections between brands and audiences in the 
								real world with{" "}
								<strong>out-of-home advertising</strong>.
							</p>
						</div>
					)}

					<div className='work-container-btn blog-animate mt-4'>
						<button
							onClick={toggleContent}
							className='dark-bg flex items-center gap-3 group'>
							<b>{showMore ? "Show Less" : "Read More"}</b>
							<BsArrowRight className='text-2xl group-hover:translate-x-2 transition-all duration-300' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
