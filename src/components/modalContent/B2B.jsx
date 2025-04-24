/** @format */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// B2B Content
const B2bContent = (
	<div className='space-y-6'>
		<div>
			<p className='text-gray-700 mb-4 leading-relaxed font-medium text-lg'>
				Experience the future of QR codes. QR-IOSITY: An AI application
				that reimagines QR codes as a powerful tool for advertising,
				gaming, and rewarding customer engagement.
			</p>

			<div className='flex justify-center mt-4'>
				<div className='w-full sm:w-2/3 h-[450px]'>
					<Carousel
						showThumbs={false}
						showStatus={true}
						autoPlay
						infiniteLoop
						emulateTouch
						interval={5000}
						transitionTime={500}
						className='rounded-lg shadow-md overflow-hidden'>
						<div>
							<img
								src='b2b-1.png'
								alt='B2B/ B2C Tech Solutions'
								className='object-cover h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								QR-iosity
							</p>
						</div>
						<div>
							<img
								src='b2b-2.png'
								alt='B2B/ B2C Tech Solutions'
								className='object-cover h-[450px] w-full'
								loading='lazy'
							/>
							<p className='legend text-xs bg-black bg-opacity-50'>
								QR-iosity{" "}
							</p>
						</div>
					</Carousel>
				</div>
			</div>
			<div className='mt-12'>
				<p className='text-md text-gray-600 leading-relaxed'>
					Our B2B/ B2C tech solutions are designed to enhance
					engagement and drive growth. We leverage cutting-edge
					technology to create tools that facilitate seamless
					interactions between businesses and consumers. Our solutions
					are tailored to meet the unique needs of clients, ensuring
					that they can effectively connect with their target
					audiences.
				</p>
				<p className='text-sm text-gray-500 italic mt-2'>
					"Empowering businesses and consumers through technology"
				</p>
			</div>
		</div>
	</div>
);
export default B2bContent;