/** @format */

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SustainabilityContent = (
	<div className='space-y-6'>
		<div>
			<h2 className='text-xl font-semibold text-gray-800 mb-1'>
				Sustainability - Hewa Safi
			</h2>
			<div className='flex justify-center mt-4'>
				<div className='w-full sm:w-2/3 h-[450px]'>
					<Carousel
						showThumbs={false}
						showStatus={true}
						autoPlay
						infiniteLoop
						emulateTouch
						interval={4000}
						transitionTime={500}
						className='rounded-lg shadow-md overflow-hidden'>
						<div>
							<img
								src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561381/hewasafi-1_q8zqar.png'
								alt='Hewa Safi Billboard'
								className='object-cover h-96 md:h-[450px] lg:h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								Hewa Safi Billboard
							</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561380/hewasafi-fabric_ff0xme.png'
								alt='Hewa Safi Fabric design'
								className='object-cover h-96 md:h-[450px] lg:h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								Hewa Safi Fabric design
							</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561380/hewasafi-analysis_panymo.png'
								alt='Hewa Safi Effectiveness Analysis'
								className='object-cover h-96 md:h-[450px] lg:h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								Hewa Safi Effectiveness Analysis
							</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561379/hewasafi-test_uaafpj.png'
								alt='Hewa Safi Billboard'
								className='object-cover h-96 md:h-[450px] lg:h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								Hewa Safi Test Cases
							</p>
						</div>
						<div>
							<img
								src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561380/hewasafi-size_p6r1l2.png'
								alt='Hewa Safi Billboard'
								className='object-cover h-96 md:h-[450px] lg:h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								Hewa Safi Billboard Size
							</p>
						</div>
					</Carousel>
				</div>
			</div>
			<div className='md:mt-12 lg:mt-12'>
				<p className='text-md text-gray-600 leading-relaxed'>
					Hewa Safi is an innovative patented printable panel designed
					to absorb and disaggregate harmful particles in the air,
					thereby helping to fight domestic and atmospheric pollution
					produced by cars, heating, and industrial emissions. The air
					purification process is passive, utilizing the natural
					movement of air through the panel's three layers.
				</p>

				<p className='text-sm text-gray-500 italic mt-2'>
					"Designed for people, kind to the environment"
				</p>
			</div>
		</div>

		{/* Rangi Safi */}
		<div className='border-b border-gray-200 pb-2'>
			<h2 className='text-xl font-semibold text-gray-800 mb-2'>
				Rangi Safi{" "}
			</h2>
			<div className='flex justify-center mt-4'>
				<div className='relative w-full sm:w-1/2'>
					<img
						src='https://res.cloudinary.com/dipqldzry/image/upload/v1745561377/rangi-safi_bdqtva.png'
						alt='Rangi Safi Painting'
						className='min-w-[300px]  md:w-full lg:w-full md:h-96 lg:h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 '
						loading='lazy'
					/>
					<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
						Rangi Safi Painting
					</div>
				</div>
			</div>
			<p className='text-md text-gray-600 leading-relaxed mt-4 '>
				Rangi Safi is an eco-friendly, self-cleaning paint that improves
				indoor air quality by eliminating up to 88.8% of pollutants like
				NOx, SOx, PM10, PM2.5, VOCs, and CO. It repels dust, dirt, and
				germs, reducing energy costs and keeping surfaces clean. Easy to
				apply and affordable, it forms a protective film that resists
				buildup. When exposed to sunlight, it prevents water stains
				through a hydrophilic effect—keeping surfaces looking freshly
				painted.
			</p>
		</div>
	</div>
);

export default SustainabilityContent;
