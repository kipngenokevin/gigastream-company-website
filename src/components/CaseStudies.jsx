/** @format */

import React, { useState, useEffect, useRef } from "react";

export default function VideoShowcase() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [slidesToShow, setSlidesToShow] = useState(3);
	const [playing, setPlaying] = useState(null);
	const [videoRefs, setVideoRefs] = useState({});
	const carouselRef = useRef(null);
		const [windowWidth] = useState(
			typeof window !== "undefined" ? window.innerWidth : 1200
		);


	const videos = [
		{
			id: "hewa-safi",
			src: "https://res.cloudinary.com/dipqldzry/video/upload/v1745579740/Hewa_Safi_-_NCBA_case_video_V1_trje7o.mov",
			poster: "https://res.cloudinary.com/dipqldzry/image/upload/v1745561380/hewasafi-close_humf1x.png",
			title: "Hewa Safi Project",
			description:
				"Environmental sustainability initiative implementation",
			duration: "2:42",
			client: "NCBA Bank",
		},
		{
			id: "ariel",
			src: "https://res.cloudinary.com/dipqldzry/video/upload/v1745578958/Ariel_Mothers_day_j5yku0.mp4",
			poster: "https://res.cloudinary.com/dipqldzry/image/upload/v1745586143/Screenshot_from_2025-04-25_16-01-30_esh5da.png",
			title: "Ariel Mother's Day",
			description: "Innovative brand activation strategy",
			duration: "1:44",
			client: "Ariel",
		},
		{
			id: "mastercard",
			src: "https://res.cloudinary.com/dipqldzry/video/upload/v1745578956/Mastercard_-_The_Sails_of_Change_Case_Study_FINAL_ewipve.mp4", // Replace with actual Mastercard video
			poster: "https://res.cloudinary.com/dipqldzry/image/upload/v1745561376/mastercard-dhow_yxkoeu.jpg",
			title: "Mastercard Dhow Experience",
			description: "The Sails of Change",
			duration: "2:18",
			client: "Mastercard",
		},
	];

	const getCardStyles = (index, isCenterSlide, distance, windowWidth) => {
		// For mobile (1 slide showing)
		if (windowWidth < 640) {
			return {
				transform: isCenterSlide
					? "scale(1)"
					: distance === 3
					? "scale(0.9)"
					: "scale(0.8)",
				opacity: isCenterSlide ? "1" : distance === 3 ? "0.85" : "0.5",
				zIndex: isCenterSlide ? 10 : 0,
			};
		}
		// For tablet (2 slides showing)
		else if (windowWidth < 1024) {
			return {
				transform: isCenterSlide
					? "scale(1)"
					: distance === 1
					? "scale(0.9)"
					: "scale(0.8)",
				opacity: isCenterSlide ? "1" : distance === 1 ? "0.85" : "0.5",
				zIndex: isCenterSlide ? 10 : 0,
			};
		}
		// For desktop (3 slides showing) - using your specified values
		else {
			return {
				transform: isCenterSlide
					? "scale(1)"
					: distance === 2
					? "scale(1)"
					: "scale(0.8)",
				opacity: isCenterSlide ? "1" : distance === 2 ? "0.85" : "0.5",
				zIndex: isCenterSlide ? 10 : 0,
			};
		}
	};

	// Duplicate videos to create an infinite carousel effect
	const extendedVideos = [...videos, ...videos, ...videos];

	// Create refs for videos
	useEffect(() => {
		const refs = {};
		extendedVideos.forEach((_, index) => {
			refs[index] = React.createRef();
		});
		setVideoRefs(refs);
	}, []);

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

		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Auto-rotate carousel when not hovered
	useEffect(() => {
		if (!isHovered && playing === null) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % (videos.length * 3));
			}, 5000);
			return () => clearInterval(timer);
		}
	}, [videos.length, isHovered, playing]);

	// Reset to middle set of videos for seamless infinite scrolling
	useEffect(() => {
		if (currentIndex === 0) {
			setTimeout(() => setCurrentIndex(videos.length), 0);
		}
	}, [currentIndex, videos.length]);

	// Pause all videos when navigating
	const pauseAllVideos = () => {
		Object.values(videoRefs).forEach((ref) => {
			if (ref.current) {
				ref.current.pause();
			}
		});
	};

	const goToPrevious = () => {
		pauseAllVideos();
		setCurrentIndex((prev) =>
			prev - 1 < 0 ? videos.length * 3 - 1 : prev - 1
		);
		setPlaying(null);
	};

	const goToNext = () => {
		pauseAllVideos();
		setCurrentIndex((prev) =>
			prev + 1 >= videos.length * 3 ? videos.length : prev + 1
		);
		setPlaying(null);
	};

	const handleVideoPlay = (index) => {
		if (playing === index) {
			if (videoRefs[index] && videoRefs[index].current) {
				videoRefs[index].current.pause();
			}
			setPlaying(null);
		} else {
			pauseAllVideos();
			if (videoRefs[index] && videoRefs[index].current) {
				videoRefs[index].current.play();
			}
			setPlaying(index);
		}
	};

	return (
		<section
			
			id='case-studies'
			className='case-section video-showcase py-12 md:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-8 md:mb-16'>
					<h2 className='text-3xl md:!text-5xl font-bold mb-4'>
						Featured Case Studies
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						See our professional work in action through these
						comprehensive video case studies demonstrating our
						expertise and commitment to excellence.
					</p>
				</div>

				<div
					className='relative max-w-7xl mx-auto group'
					ref={carouselRef}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<div className='overflow-hidden rounded-xl h-[450px] md:h-[550px] lg:h-[550px]'>
						<div
							className='flex transition-transform duration-700 ease-in-out'
							style={{
								transform: `translateX(-${
									((currentIndex - videos.length) * 100) /
									slidesToShow
								}%)`,
							}}>
							{extendedVideos.map((video, index) => {
								// Check if this is the center video in the carousel
								const isActive = playing === index;
								const isCenterSlide = index === currentIndex;

								// Calculate how far this slide is from the current center
								const distance = Math.abs(index - currentIndex);

								return (
									<div
										key={index}
										className='flex-shrink-0 transition-all duration-300'
										style={{
											width: `${100 / slidesToShow}%`,
										}}>
										<div
											className={`p-3 transition-all duration-500`}
											style={getCardStyles(
												index,
												isCenterSlide,
												distance,
												windowWidth
											)}>
											<div className='rounded-lg overflow-hidden shadow-xl bg-gray-800 hover:shadow-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300'>
												<div className='relative aspect-video'>
													<video
														ref={videoRefs[index]}
														src={video.src}
														poster={video.poster}
														className='w-full h-full object-cover'
														controls={isActive}
														preload='metadata'
														onPlay={() =>
															setPlaying(index)
														}
														onPause={() =>
															isActive &&
															setPlaying(null)
														}
													/>

													{!isActive && (
														<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center'>
															<button
																onClick={() =>
																	handleVideoPlay(
																		index
																	)
																}
																className='w-16 h-16 bg-blue-600 hover:bg-blue-500 !rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110 shadow-lg'
																aria-label='Play video'>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	className='h-8 w-8 text-white'
																	viewBox='0 0 24 24'
																	fill='currentColor'>
																	<path
																		fillRule='evenodd'
																		d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z'
																	/>
																</svg>
															</button>

															<div className='absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-md'>
																{video.client}
															</div>

															<div className='absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm py-1 px-2 rounded-md flex items-center'>
																<svg
																	className='w-4 h-4 mr-1'
																	fill='currentColor'
																	viewBox='0 0 20 20'>
																	<path
																		fillRule='evenodd'
																		d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
																		clipRule='evenodd'
																	/>
																</svg>
																{video.duration}
															</div>
														</div>
													)}
												</div>

												<div className='p-4 h-[250px] md:h-[250px]'>
													<h3 className='text-xl font-bold text-white mb-2 flex items-center'>
														{video.title}
													</h3>
													<p className='text-gray-300 mb-4'>
														{video.description}
													</p>

													<div className='flex justify-between items-center'>
														<button
															onClick={() =>
																handleVideoPlay(
																	index
																)
															}
															className='inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white !rounded-md transition-colors'>
															{isActive ? (
																<>
																	<svg
																		className='w-5 h-5 mr-1'
																		fill='currentColor'
																		viewBox='0 0 20 20'>
																		<path
																			fillRule='evenodd'
																			d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z'
																			clipRule='evenodd'
																		/>
																	</svg>
																	Pause
																</>
															) : (
																<>
																	<svg
																		className='w-5 h-5 mr-1 '
																		fill='currentColor'
																		viewBox='0 0 20 20'>
																		<path
																			fillRule='evenodd'
																			d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
																			clipRule='evenodd'
																		/>
																	</svg>
																	Watch Now
																</>
															)}
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={goToPrevious}
						className='absolute left-[-10px] md:-left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white shadow-xl p-3 !rounded-full transition-all duration-300 z-20 opacity-80 group-hover:opacity-100'
						aria-label='Previous slide'>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>
					<button
						onClick={goToNext}
						className='absolute right-[-10px] md:-right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white shadow-xl p-3 !rounded-full transition-all duration-300 z-20 opacity-80 group-hover:opacity-100'
						aria-label='Next slide'>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
