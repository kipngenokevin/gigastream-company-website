/** @format */

import React, { useState, useEffect, useRef } from "react";
import HewaSafi from "/hewasafi-close.png";
import Express from "/expressway-entry.jpeg";
import Dhow_mastercard from "/mastercard-dhow.jpeg";
import Tolls from "/tollbooth.jpeg";
import Hot_air from "/mastercard-balloon.jpeg";
import Column from "/column.jpeg";
import Dhow from "/dtb-dhow.png";
import Cushion_branding from "/branded-cushions.png";

export default function CaseStudies() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [slidesToShow, setSlidesToShow] = useState(3);
	const carouselRef = useRef(null);

	const images = [
		{ src: HewaSafi, alt: "Hewa Safi Case Study" },
		{ src: Express, alt: "Expressway Case Study" },
		{ src: Tolls, alt: "Tollbooths Case Study" },
		{ src: Hot_air, alt: "Hot Air Balloon Case Study" },
		{ src: Column, alt: "Column Case Study" },
		{ src: Dhow, alt: "Dhow Case Study" },
		{ src: Cushion_branding, alt: "Cushion Branding Case Study" },
		{ src: Dhow_mastercard, alt: "Dhow Mastercard Case Study" },
	];

	// Duplicate images to create an infinite carousel effect
	const extendedImages = [...images, ...images, ...images];

	// Update slidesToShow based on screen width
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setSlidesToShow(1);
			} else if (window.innerWidth < 1024) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(3);
			}
		};

		// Initial setup
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Auto-rotate carousel when not hovered
	useEffect(() => {
		if (!isHovered) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % (images.length * 3));
			}, 4000);
			return () => clearInterval(timer);
		}
	}, [images.length, isHovered]);

	// Reset to middle set of images for seamless infinite scrolling
	useEffect(() => {
		if (currentIndex === 0) {
			setTimeout(() => setCurrentIndex(images.length), 0);
		}
	}, [currentIndex, images.length]);

	const goToPrevious = () => {
		setCurrentIndex((prev) =>
			prev - 1 < 0 ? images.length * 3 - 1 : prev - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prev) =>
			prev + 1 >= images.length * 3 ? images.length : prev + 1
		);
	};

	return (
		<section
			id='portfolio'
			className='case-section py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
			<div className='container mx-auto px-4'>
				<h2 className='title text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12'>
					Latest Case Studies
				</h2>

				<div
					className='relative max-w-7xl mx-auto group'
					ref={carouselRef}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<div className='overflow-hidden rounded-xl shadow-xl'>
						<div
							className='flex transition-transform duration-1000 ease-in-out'
							style={{
								transform: `translateX(-${
									((currentIndex - images.length) * 100) /
									slidesToShow
								}%)`,
							}}>
							{extendedImages.map((image, index) => {
								const distance = Math.abs(index - currentIndex);
								const isCenter = window.innerWidth < 640 ? distance === 8 : distance === 7;
								const isAdjacent = distance === 1;

								return (
									<div
										key={index}
										className={`flex-shrink-0 flex justify-center items-center transition-all duration-300`}
										style={{
											width: `${100 / slidesToShow}%`,
										}}>
										<div
											className={`relative p-2 md:p-4 transition-all duration-700 ${
												isCenter
													? "scale-100 opacity-100"
													: isAdjacent
													? "scale-90 md:scale-75 opacity-80 md:opacity-70"
													: "scale-80 md:scale-60 opacity-60 md:opacity-40"
											}`}>
											<img
												src={image.src}
												alt={image.alt}
												className='rounded-lg md:rounded-2xl w-full h-96 sm:h-64 md:h-80 lg:h-120 object-cover shadow-md'
											/>
											<div className='absolute inset-0 rounded-lg md:rounded-2xl bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
												<p className='text-white text-sm md:text-lg lg:text-xl font-semibold text-center px-2'>
													{image.alt}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Navigation Buttons - Hidden on smallest screens */}
					<button
						onClick={goToPrevious}
						className='absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-2 md:p-3 rounded-xl transition-all duration-300 z-10 opacity-70 md:opacity-0 group-hover:opacity-100 '
						aria-label='Previous slide'>
						<svg
							className='w-4 h-4 md:w-6 md:h-6 text-gray-900'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								d='M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<button
						onClick={goToNext}
						className='absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-2 md:p-3 rounded-full transition-all duration-300 z-10 opacity-70 md:opacity-0 group-hover:opacity-100'
						aria-label='Next slide'>
						<svg
							className='w-4 h-4 md:w-6 md:h-6 text-gray-900'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								d='M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
