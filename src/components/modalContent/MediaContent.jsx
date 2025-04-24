/** @format */

import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MediaContent = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const videoRef = useRef(null);

	const mediaItems = [
		{
			type: "video",
			src: "/cinemax-screen-1.mp4",
			poster: "/api/placeholder/640/360",
			title: "Media in Cinemax",
			description: "Innovative digital media solutions in Cinemax",
		},
		{
			type: "image",
			src: "/cinemax-1.jpeg",
			title: "Junction LED Screen",
			description: "Innovative digital media solutions in Cinemax",
		},
		{
			type: "video",
			src: "/cinemax-screen-2.mp4",
			poster: "/api/placeholder/640/360",
			title: "Junction LED Screen",
			description: "Innovative digital media solutions in Cinemax",
		},
		{
			type: "image",
			src: "/cinemax-screen-2.jpeg",
			title: "Media Concessions",
			description: "Innovative digital media solutions in Cinemax",
		},
		{
			type: "video",
			src: "/cinemax-screen-3.mp4",
			poster: "/api/placeholder/640/360",
			title: "Media in Cinemax",
			description: "Innovative digital media solutions in Cinemax",
		},
	];

	const currentItem = mediaItems[currentIndex];

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		let timeout;

		if (currentItem.type === "video" && videoRef.current) {
			const video = videoRef.current;

			const handleVideoEnd = () => {
				goToNext();
			};

			video.addEventListener("ended", handleVideoEnd);

			video.play().catch((error) => {
				console.log("Video autoplay was prevented:", error);
			});

			return () => {
				video.removeEventListener("ended", handleVideoEnd);
			};
		} else {
			// For image: auto-advance after 3 seconds
			timeout = setTimeout(goToNext, 5000);
		}

		return () => {
			if (timeout) clearTimeout(timeout);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	return (
		<div className='w-full py-12 px-4 md:px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='space-y-6'>
					<div className='mb-8'>
						<h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-3'>
							{currentItem.title}
						</h3>

						<div className='relative md:max-w-2xl lg:max-w-fit mx-auto rounded-xl overflow-hidden shadow-lg'>
							{currentItem.type === "video" ? (
								<video
									ref={videoRef}
									className='w-full h-96 max-h-[500px] object-contain mx-auto rounded-xl shadow-md'
									muted
									playsInline
									poster={currentItem.poster}>
									<source
										src={currentItem.src}
										type='video/mp4'
									/>
									Your browser does not support the video tag.
								</video>
							) : (
								<img
									src={currentItem.src}
									alt={currentItem.title}
									className='w-full h-96 md:max-h-[500px] lg:max-h-[500px] object-contain mx-auto rounded-xl shadow-md'
								/>
							)}

							<div className='absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4'>
								<IoIosArrowBack className="text-2xl text-white relative right-7"
								onClick={goToPrev}
								/>
							<IoIosArrowForward className="text-2xl text-white relative left-7" onClick={goToNext}/>
							
							</div>
						</div>

						<div className='flex justify-center mt-3'>
							{mediaItems.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`mx-1 h-2 w-2 rounded-full ${
										index === currentIndex
											? "bg-red-500"
											: "bg-gray-300"
									}`}
								/>
							))}
						</div>

						<p className='text-sm text-gray-500 italic mt-2 text-center'>
							{currentItem.description}
						</p>
					</div>

					<div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
						<div className='md:w-1/2 space-y-4'>
							<p className='text-sm md:text-base text-gray-700 leading-relaxed'>
								Our approach merges strategic insight with
								state-of-the-art capabilities to create
								solutions that are not only cutting-edge but
								also deeply resonant with modern
								audiences—driving measurable growth, relevance,
								and long-term success.
							</p>

							<div className='bg-gray-50 p-2 rounded-lg border-l-4 border-red-500'>
								<h4 className='font-medium text-gray-800'>
									Our Media Solutions:
								</h4>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-sm md:text-base'>
									<li>Junction LED Screen</li>
									<li>
										Media concessions – Moja Expressway/
										DOOH
									</li>
									<li>Outdoor Auditing</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaContent;
