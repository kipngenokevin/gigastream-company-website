// Branding Content

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
  const BrandingContent = (
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
							className='w-[400px] md:max-w-xl lg:max-w-xl h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
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
					<strong>Locations:</strong> Coastal Region
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

			{/* Hot Air Balloon Section */}
			<div className='pb-5'>
				<h2 className='text-xl font-semibold text-gray-800 mb-2'>
					Hot Air Balloon Experience
				</h2>
				<p className='text-md text-gray-600 leading-relaxed'>
					An unforgettable opportunity for audiences to engage with
					the brand through immersive hot air balloon
					experiences—elevating destination marketing by blending
					adventure, storytelling, and scenic wonder into a
					captivating brand journey.
				</p>
				<div className='flex justify-center mt-4'>
					<div className='relative w-full sm:w-1/2'>
						<Carousel
							showThumbs={false}
							showStatus={true}
							autoPlay
              infiniteLoop
              emulateTouch
							interval={3000}
							transitionTime={500}
							className='rounded-lg shadow-md overflow-hidden'>
							<div>
								<img
									src='mastercard-balloon.jpeg'
									alt='Branded Hot Air Balloon'
									className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
									loading='lazy'
								/>
							</div>
							<div>
								<img
									src='hot-air.png'
									alt='Branded Hot Air Balloon'
									className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-bottom'
									loading='lazy'
								/>
							</div>
							<div>
								<img
									src='hot-air-2.png'
									alt='Branded Hot Air Balloon'
									className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-top'
									loading='lazy'
								/>
							</div>
							<div>
								<img
									src='hot-air-3.png'
									alt='Branded Hot Air Balloon'
									className='w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 '
									loading='lazy'
								/>
							</div>
						</Carousel>
						<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
							Branded Hot Air Balloon{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
  );

export default BrandingContent;