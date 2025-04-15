/** @format */

import AdsLogo from "../../public/adicon.png";
import Sustain from "../../public/sustainabilityicon.png";
import Branding from "../../public/brandingicon.png";
import B2B from "../../public/b2bicon.png";
import ModalComponent from "./ModalComponent";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkContainer = () => {
	const workContainer = useRef(null);
	useEffect(() => {
		gsap.from("work-container", {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: workContainer.current,
				start: "top 100%",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		});
		gsap.to("work-container", {
			opacity: 1,
			y: 0,
			duration: 1.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: workContainer.current,
				start: "top 100%",
				scrub: true,
				toggleActions: "play none none reverse",
			},
		});
	});
	const modalData = [
		{
			title: "MEDIA",
			description:
				"We deliver innovative solutions through our connected network, ensuring cutting-edge reach and impact",
			moreDescription: (
				<div>
					<p className='mb-8'>
						Our approach merges strategic insight with
						state-of-the-art capabilities to create solutions that
						are not only cutting-edge but also deeply resonant with
						modern audiences—driving measurable growth, relevance,
						and long-term success.
					</p>
					<ul class='list-disc list-inside text-left inline-block'>
						<li>Connected Q-riosity</li>
						<li>Media concessions – Moja Expressway/ DOOH</li>
						<li>Outdoor Auditing</li>
					</ul>
				</div>
			),
			bgColor: "red-bg",
			logo: AdsLogo,
		},
		{
			title: "SUSTAINABILITY",
			description:
				"Driving sustainable growth and impact through innovation",
			moreDescription: (
				<div>
					<p className='mb-8'>
						We provide scalable sustainable advertising solutions
						that align with ecoconscious practices and long-term
						growth.
					</p>
					<ul className='list-disc pl-6 mb-4 flex flex-wrap gap-x-4'>
						<li>Hewa Safi</li>
						<li>Rangi Safi</li>
					</ul>
				</div>
			),
			bgColor: "green-bg",
			logo: Sustain,
		},
		{
			title: "BRANDING",
			description:
				"Driving sustainable growth and impact through innovation",
			moreDescription: (
				<div>
					<p className='mb-8'>
						Our approach merges strategic insight with
						state-of-the-art capabilities to create solutions that
						are not only cutting-edge but also deeply resonant with
						modern audiences—driving measurable growth, relevance,
						and long-term success.
					</p>
					<ul className='list-disc pl-6 mb-4 list-inside '>
						<li>Connected Q-riosity</li>
						<li>Media concessions – Moja Expressway/ DOOH</li>
						<li>Outdoor Auditing</li>
					</ul>
				</div>
			),
			bgColor: "blue-bg",
			logo: Branding,
		},
		{
			title: "B2B",
			description:
				"Driving sustainable growth and impact through innovation",
			moreDescription: (
				<div>
					<p className='mb-8'>
						Our approach merges strategic insight with
						state-of-the-art capabilities to create solutions that
						are not only cutting-edge but also deeply resonant with
						modern audiences—driving measurable growth, relevance,
						and long-term success.
					</p>
					<ul className='list-disc pl-6 mb-4 list-inside '>
						<li>Connected Q-riosity</li>
						<li>Media concessions – Moja Expressway/ DOOH</li>
						<li>Outdoor Auditing</li>
					</ul>
				</div>
			),
			bgColor: "yellow-bg",
			logo: B2B,
		},
	];

	return (
		<div className='d-flex flex-wrap justify-content-center py-10'>
			{modalData.map((item, index) => (
				<ModalComponent
					ref={workContainer}
					key={index}
					title={item.title}
					description={item.description}
					moreDescription={item.moreDescription}
					bgColor={item.bgColor}
					logo={item.logo}
				/>
			))}
		</div>
	);
};

export default WorkContainer;
