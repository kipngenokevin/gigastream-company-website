/** @format */
import React, { useEffect, useRef } from "react";
//Icons/
import AdsLogo from "/adicon.png";
import Sustain from "/sustainabilityicon.png";
import Branding from "/brandingicon.png";
import B2B from "/b2bicon.png";

import ModalComponent from "./ModalComponent";
import MediaContent from "./modalContent/MediaContent";
import sustainabilityContent from "./modalContent/SustainabilityContent";
import b2bContent from "./modalContent/B2B";
import brandingContent from "./modalContent/BrandingContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// requires a loader
gsap.registerPlugin(ScrollTrigger);

const WorkContainer = () => {
	const workContainer = useRef(null);

	useEffect(() => {
		gsap.from(".work-container", {
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
		gsap.to(".work-container", {
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
	}, []);

	// Modal Data for each work item
	// Each object contains title, description, moreDescription, bgColor, and logo

	const modalData = [
		{
			title: "MEDIA",
			description:
				"We deliver innovative solutions through our connected network, ensuring cutting-edge reach and impact",
			moreDescription: <MediaContent/>,
			bgColor: "red-bg",
			logo: AdsLogo,
		},
		{
			title: "SUSTAINABILITY",
			description:
				"We provide scalable advertising solutions that align with eco-conscious practices and long-term growth.",
			moreDescription: sustainabilityContent,
			bgColor: "purple-bg",
			logo: Sustain,
		},
		{
			title: "B2B/ B2C TECH SOLUTIONS",
			description:
				"We build dynamic tools designed to engage audiences across diverse ecosystems, driving meaningful interactions",
			moreDescription: b2bContent,
			bgColor: "red-bg",
			logo: B2B,
		},
		{
			title: "BRANDING",
			description:
				"We deliver Bespoke outstanding innovations in branding services",
			moreDescription: brandingContent,
			bgColor: "purple-bg",
			logo: Branding,
		},
	];

	return (
		<div className='flex flex-wrap justify-center py-10'>
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
