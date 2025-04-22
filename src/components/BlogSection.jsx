import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gradient from "../../public/gradient.svg";
import { BsArrowRight } from "react-icons/bs";


gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
	const sectionRef = useRef(null);

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
						markers: true,
					},
				}
			);
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
					<h2 className='title blog-animate '>Who we are... </h2>
					<p className='blog-animate text-2xl leading-9'>
						We are a bespoke advertising media tech company that
						focuses on making real-life consumer and brand
						connections
					</p>
					<div className='work-container-btn blog-animate'>
						<button className='dark-bg flex items-center gap-3 group'>
							<b>Read More</b>
							<BsArrowRight className='text-2xl group-hover:translate-x-2 transition-all duration-300' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
