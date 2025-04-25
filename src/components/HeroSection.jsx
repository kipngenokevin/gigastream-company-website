/** @format */

import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HeroSection() {
	const [text, setText] = useState(true);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVisible(false);
			setTimeout(() => {
				setText(!text);
				setIsVisible(true);
			}, 1000);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [text]);

	const handleClick = () => {
		setIsVisible(false);
		setTimeout(() => {
			setText(!text);
			setIsVisible(true);
		}, 1000);
	};

	return (
		<section
			id='home'
			className='container d-flex justify-content-between align-items-center hero-main'>
			<div className='d-flex justify-content-start align-items-center'>
				<IoIosArrowBack className="text-3xl" />
			</div>
			<div className='col-sm-6 d-flex-justify-content-start'>
				<h1 className={`hero-title ${isVisible ? "active" : ""} text-4xl md:text-5xl lg:text-6xl font-bold`}>
					{text ? "AMPLYFYING BRANDS" : "ENGAGING AUDIENCES"}
				</h1>
				<div className='in-touch-btn'>
					<a href='#contacts ' className='no-underline!'>
						<button className='flex items-center gap-4 group '>
							GET IN TOUCH
							<BsArrowRight className='text-2xl group-hover:translate-x-3 transition duration-300' />
						</button>
					</a>
				</div>
			</div>
			<div className='col-sm-2 d-flex justify-content-end align-items-center'>
				<IoIosArrowForward onClick={handleClick} className='text-3xl' />
			</div>
		</section>
	);
}
