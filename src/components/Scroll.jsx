/** @format */

import Mouse from "../../public/mouse.svg";
import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Scroll() {
	const textRef = useRef(null);
	useEffect(() => {
		gsap.to(textRef.current, {
			text: "SCROLL DOWN",
			duration: 3,
			ease: "power2.inOut",
			delay:2,
		});
	}, []);
	return (
		<div className='col-sm-12 d-flex justify-content-center'>
			<div className='text-center'>
				<div className='relative left-12 transform'>
					<img
						className='animate-bounce'
						src={Mouse}
						alt='Scroll down'
						width={40}
						style={{ margin: "1rem" }}
					/>
				</div>
				<h5 ref={textRef}>WELCOME !!!</h5>
			</div>
		</div>
	);
}
