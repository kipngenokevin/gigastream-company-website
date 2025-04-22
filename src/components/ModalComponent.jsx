/** @format */
import React, { useState, useEffect, useRef } from "react";

const ModalComponent = ({
	title,
	description,
	moreDescription,
	bgColor,
	logo,
}) => {
	const [show, setShow] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const carouselRef = useRef(null);

	const images = [
		{
			src: "../../public/hewasafi.png",
			alt: "Hewa Safi Case Study",
			caption: "Hewa Safi Case Study",
		},
		{
			src: "../../public/expressway.png",
			alt: "Expressway Case Study",
			caption: "Expressway Case Study",
		},
		{
			src: "../../public/branding.png",
			alt: "Tollbooths Case Study",
			caption: "Tollbooths Case Study",
		},
	];

	const extendedImages = [...images, ...images, ...images];

	useEffect(() => {
		if (!isVisible && show) {
			const timer = setTimeout(() => setShow(false), 500);
			return () => clearTimeout(timer);
		}
	}, [isVisible, show]);

	useEffect(() => {
		if (!isHovered) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % (images.length * 3));
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [images.length, isHovered]);

	useEffect(() => {
		if (currentIndex === 0) {
			setTimeout(() => setCurrentIndex(images.length), 0);
		}
	}, [currentIndex, images.length]);

	const handleClose = () => {
		setIsVisible(false);
	};
	const handleShow = () => {
		setShow(true);
		setTimeout(() => setIsVisible(true), 10);
	};
	const handleOutsideClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

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

	const colorStyles = {
		"red-bg": "bg-red-700 hover:bg-red-800",
		"purple-bg": "bg-purple-700 hover:bg-purple-800",
	};

	return (
		<>
			{/* Card Container */}
			<div
				className={`work-container ${colorStyles[bgColor]} text-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between`}>
				<img
					width={100}
					src={logo}
					alt={`${title} Icon`}
					className='mb-4 rounded-md object-cover'
				/>
				<h5 className='text-xl font-bold mb-2 tracking-tight'>
					{title}
				</h5>
				<p className='text-sm opacity-90 mb-4 leading-relaxed'>
					{description}
				</p>
				<div className='work-container-btn'>
					<button
						className={`${colorStyles[bgColor]} text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md`}
						onClick={handleShow}>
						More
					</button>
				</div>
			</div>

			{show && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}
					style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
					onClick={handleOutsideClick}>
					<div
						className={`max-w-7xl w-full m-4 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
							isVisible
								? "scale-100 opacity-100 translate-y-0"
								: "scale-95 opacity-0 translate-y-12"
						}`}
						onClick={(e) => e.stopPropagation()}>
						<div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
							{/* Modal Header */}
							<div
								className={`${colorStyles[bgColor]} text-white p-6 flex justify-between items-center relative`}>
								<h5 className='text-2xl font-semibold tracking-wide z-10'>
									{title}
								</h5>
								<button
									type='button'
									className='text-white hover:text-gray-200 transition-colors duration-200 z-10'
									onClick={handleClose}>
									<svg
										className='w-7 h-7'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
								<div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30' />
							</div>

							{/* Modal Body
							 */}
							<div className='p-8 bg-gradient-to-b from-gray-50 to-white max-h-[70vh] overflow-y-auto'>
								{/* Carousel (Hidden for BRANDING Section) */}
								{title !== "BRANDING" &&
									title !== "SUSTAINABILITY" && (
										// Carousel integration

										<div
											className='relative max-w-4xl mx-auto group mb-8'
											ref={carouselRef}
											onMouseEnter={() =>
												setIsHovered(true)
											}
											onMouseLeave={() =>
												setIsHovered(false)
											}>
											<div className='overflow-hidden rounded-xl shadow-xl'>
												<div
													className='flex transition-transform duration-1000 ease-in-out'
													style={{
														transform: `translateX(-${
															(currentIndex -
																images.length) *
															100
														}%)`,
													}}>
													{extendedImages.map(
														(image, index) => (
															<div
																key={index}
																className='w-full flex-shrink-0 flex justify-center items-center'>
																<div className='relative w-full'>
																	<img
																		src={
																			image.src
																		}
																		alt={
																			image.alt
																		}
																		className='rounded-2xl w-full h-80 object-cover shadow-md transition-all duration-300'
																	/>
																	<div className='absolute inset-0 rounded-2xl bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
																		<p className='text-white text-2xl font-semibold'>
																			{
																				image.caption
																			}
																		</p>
																	</div>
																</div>
															</div>
														)
													)}
												</div>
											</div>

											{/* Navigation Buttons */}
											<button
												onClick={goToPrevious}
												className='absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-3 rounded-full transition-all duration-300 z-10 group-hover:opacity-100 opacity-0'>
												<svg
													className='w-6 h-6 text-gray-600'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'>
													<path
														d='M15 19L9 12L15 5'
														stroke='#000000'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</button>
											<button
												onClick={goToNext}
												className='absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-3 rounded-full transition-all duration-300 z-10 group-hover:opacity-100 opacity-0'>
												<svg
													className='w-6 h-6 text-gray-600'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'>
													<path
														d='M9 5L15 12L9 19'
														stroke='#000000'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</button>
										</div>
									)}

								{/* Description */}
								<p className='text-gray-700 mb-4 leading-relaxed font-medium text-lg'>
									{description}
								</p>

								{/* More Description (Updated for BRANDING) */}
								<div className='text-gray-600 italic text-md'>
									{moreDescription}
								</div>
							</div>

							{/* Modal Footer */}
							<div className='p-6 border-t border-gray-200 flex justify-end'>
								{/* You can add a button here if needed */}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalComponent;
