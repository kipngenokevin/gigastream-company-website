/** @format */
import React, { useEffect, useRef } from "react";
import AdsLogo from "../../public/adicon.png";
import Sustain from "../../public/sustainabilityicon.png";
import Branding from "../../public/brandingicon.png";
import B2B from "../../public/b2bicon.png";
import ModalComponent from "./ModalComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

	// Branding Content (from previous implementation)
	const brandingContent = (
		<div className='space-y-6'>
			{/* Sarit Center Section */}
			<div className='border-b border-gray-200 pb-5'>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					Sarit Center - PINS Bowling Entertainment
				</h2>
				<p className='text-md text-gray-600 leading-relaxed'>
					A unique facility offering brands an opportunity to interact
					with a young mid-upper affluent audience while bowling.
				</p>
				<div className='flex justify-center mt-4'>
					<div className='relative w-full sm:w-1/2'>
						<img
							src='branded_sarit_reception.png'
							alt='Branded Reception Area at Sarit Center'
							className='max-w-xl h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Branded Reception Area
						</div>
					</div>
				</div>
			</div>

			{/* Village Market Section */}
			<div className='border-b border-gray-200 pb-5'>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					Village Market Bowling
				</h2>
				<p className='text-md text-gray-600 leading-relaxed'>
					A unique facility offering brands an opportunity to interact
					with a young mid-upper affluent audience while bowling.
				</p>
				<div className='flex justify-center mt-4'>
					<div className='relative w-full sm:w-1/2'>
						<img
							src='branded_bowling.png'
							alt='Branded Bowling Lanes at Sarit Center'
							className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Modern Bowling Alley
						</div>
					</div>
				</div>
			</div>

			{/* Century Cinemax Section */}
			<div className='border-b border-gray-200 pb-5'>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					Century Cinemax Partnership
				</h2>
				<p className='text-md text-gray-600 leading-relaxed'>
					Partnership with Century Cinemax to provide a unique
					engagement with audiences during movie premieres, taking the
					brand to the next level through captive moments.
				</p>
				<p className='text-sm text-gray-600 mt-1'>
					<strong>Locations:</strong> Junction, Sarit Center, Garden
					City, Two Rivers
				</p>
				<div className='flex justify-center mt-4'>
					<div className='relative w-full sm:w-1/2'>
						<img
							src='cinemax.jpeg'
							alt='IMAX Theater at Century Cinemax'
							className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							IMAX Theater Experience
						</div>
					</div>
				</div>
			</div>

			{/* The Dhow Branding Section */}
			<div className='pb-5'>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					The Dhow Branding
				</h2>
				<p className='text-md text-gray-600 leading-relaxed'>
					A combination of innovation and engagement to drive a unique
					experience that resonates with niche consumers for
					destination marketing, keeping the brand top of mind.
				</p>
				<p className='text-sm text-gray-600 mt-1'>
					<strong>Costs:</strong> 100K Rental per month per dhow,
					Production - 60K (Sail, 6 cushions, 6 pillows per dhow)
				</p>
				<p className='text-sm text-gray-600 mt-1'>
					<strong>Locations:</strong> Lamu, Kilifi, Malindi
				</p>
				<div className='flex gap-3 mt-4 flex-col sm:flex-row'>
					<div className='relative flex-1'>
						<img
							src='dtb-dhow.png'
							alt='Branded sails on the beach'
							className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Branded Sails on the Beach
						</div>
					</div>
					<div className='relative flex-1'>
						<img
							src='mastercard-dhow.jpeg'
							alt='Branded Dhows on the Beach'
							className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Branded Sails on the Beach
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// Sustainability Content (Hewa Safi)
	const sustainabilityContent = (
		<div className='space-y-6'>
			<div>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					Sustainability - Hewa Safi
				</h2>
				<div className='flex justify-center mt-4'>
					<div className='relative w-full sm:w-1/2'>
						<img
							src='hewasafi-1.jpeg'
							alt='Hewa Safi Billboard'
							className='w-full h-96 object-center object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 '
							loading='lazy'
						/>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Hewa Safi Billboard
						</div>
					</div>
				</div>
				<p className='text-md text-gray-600 leading-relaxed mt-4 '>
					Hewa Safi, is an innovative patented printable panel
					designed to absorb and disaggregate harmful particles in the
					air, thereby helping to fight domestic and atmospheric
					pollution produced by cars, heating and industrial
					emissions. The air purification process that occurs upon
					contact Hewa Safi © is passive, making use of the natural
					movement of air through the three layers of the panel.
				</p>
				<p className='text-sm text-gray-500 italic mt-2'>
					"Designed for people, kind to the environment"
				</p>
			</div>
		</div>
	);

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
					<ul className='list-disc inline-block text-left'>
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
				"We provide scalable advertising solutions that align with eco-conscious practices and long-term growth.",
			moreDescription: sustainabilityContent,
			bgColor: "purple-bg",
			logo: Sustain,
		},
		{
			title: "B2B/ B2C TECH SOLUTIONS",
			description:
				"We build dynamic tools designed to engage audiences across diverse ecosystems, driving meaningful interactions",
			moreDescription: (
				<div>
					<p className='mb-8'>
						Our approach merges strategic insight with
						state-of-the-art capabilities to create solutions that
						are not only cutting-edge but also deeply resonant with
						modern audiences—driving measurable growth, relevance,
						and long-term success.
					</p>
					<ul className='list-disc inline-block text-left'>
						<li>Hewa Safi</li>
						<li>Rangi Safi</li>
					</ul>
				</div>
			),
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
