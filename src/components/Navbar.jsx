/** @format */

import { useState, useEffect } from "react";
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTwitterX,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		const newState = !isOpen;
		setIsOpen(newState);
		document.body.style.overflow = newState ? "hidden" : "auto";
	};

	const handleLinkClick = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 992 && isOpen) {
				setIsOpen(false);
				document.body.style.overflow = "auto";
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	return (
		<>
			{/* Mobile menu button */}
			<div className='d-lg-none d-flex justify-content-end p-3 relative top-[-70px]'>
				<button
					onClick={toggleMenu}
					className='bg-transparent border-0 text-white'
					aria-label='Toggle Menu'>
					<RiMenu3Line className='w-8 h-8' />
				</button>
			</div>

			{/* Desktop nav */}
			<nav className='justify-content-between desktop-nav d-none d-lg-flex'>
				<ul className='d-flex justify-content-between align-items-center flex-grow-1'>
					{["home", "about","portfolio", "contacts"].map(
						(section) => (
							<li
								key={section}
								className='d-flex align-items-center'>
								<a
									href={`#${section}`}
									className='!no-underline text-white flex items-center'>
									{section.toUpperCase()}
									<IoIosArrowDown className='text-xl font-semibold' />
								</a>
							</li>
						)
					)}
				</ul>
				<ul className='d-flex justify-content-end'>
					<li>
						<a
							href='https://www.instagram.com/gigastream_media/'
							target='_blank'>
							<BsInstagram className='social-icons w-6 h-6 text-white' />
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/company/gigastream-media-tech-ltd'
							target='_blank'>
							<BsLinkedin className='social-icons w-6 h-6 text-white' />
						</a>
					</li>
				</ul>
			</nav>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black z-50 d-lg-none ${
					isOpen
						? "opacity-100 visible"
						: "opacity-0 invisible pointer-events-none"
				} transition-all duration-300`}>
				<div className='h-100 d-flex flex-column p-4'>
					{/* Close button */}
					<div className='d-flex justify-content-end mb-4'>
						<button
							onClick={toggleMenu}
							className='bg-transparent border-0 text-white'>
							<RiCloseLine className='w-8 h-8' />
						</button>
					</div>

					{/* Navigation Links */}
					<ul className='list-unstyled mb-5'>
						{[
							{ label: "HOME", id: "home" },
							{ label: "ABOUT", id: "about" },
							{ label: "PORTFOLIO", id: "portfolio" },
							{ label: "CONTACTS", id: "contacts" },
						].map(({ label, id }) => (
							<li
								key={id}
								className='mb-4 pb-3 border-bottom border-secondary'>
								<a
									href={`#${id}`}
									className='text-white text-decoration-none fs-5 d-block'
									onClick={handleLinkClick}>
									{label}
								</a>
							</li>
						))}
					</ul>

					{/* Social Icons */}
					<div className='mt-auto'>
						<ul className='d-flex justify-content-center list-unstyled gap-8'>
							<li>
								<a
									href='https://www.instagram.com/gigastream_media/'
									target='_blank'>
									<BsInstagram className='social-icons w-6 h-6 text-white' />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/company/gigastream-media-tech-ltd'
									target='_blank'>
									<BsLinkedin className='social-icons w-6 h-6 text-white' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
