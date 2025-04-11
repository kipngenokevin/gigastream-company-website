/** @format */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkContainer from "./WorkContainer";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
	const titleRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			titleRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
                    start: "bottom 100%",
                    scrub: true,
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<section id="about" className='work-section'>
			<div className='container'>
				<div className='col-sm-12 text-center'>
					<h2 className='title' ref={titleRef}>
						What we do...
					</h2>
					<WorkContainer />
				</div>
			</div>
		</section>
	);
}
