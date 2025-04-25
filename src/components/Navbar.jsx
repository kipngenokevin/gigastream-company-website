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
	const [activeDropdown, setActiveDropdown] = useState(null);

	// Handle dropdown toggle for mobile
	const toggleDropdown = (menu) => {
		if (activeDropdown === menu) {
			setActiveDropdown(null);
		} else {
			setActiveDropdown(menu);
		}
	};

	// Handle mobile menu toggle
	const toggleMenu = () => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	};

	// Close mobile menu when screen size changes to desktop
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
			{/* Mobile menu button - only visible on mobile */}
			<div className='d-lg-none d-flex justify-content-end p-3 relative top-[-70px]'>
				<button
					onClick={toggleMenu}
					className='bg-transparent border-0 text-white '
					aria-label='Toggle Menu'>
					<RiMenu3Line className='w-8 h-8 ' />
				</button>
			</div>

		
			<nav className='justify-content-between desktop-nav d-none d-lg-flex'>
				<ul className='d-flex justify-content-between align-items-center flex-grow-1'>
					<li className='flex items-center'>
						<a
							href='#home'
							className='!no-underline text-white flex items-center'>
							HOME
							<IoIosArrowDown className='text-xl font-semibold' />
						</a>
					</li>

					<li className='d-flex align-items-center'>
						<a
							href='#blog'
							className='!no-underline text-white flex items-center'>
							ABOUT
							<IoIosArrowDown className='text-xl font-semibold' />
						</a>
					</li>
					{/* <li className='d-flex align-items-center'>
            <a
              href='#about'
              className='!no-underline text-white flex items-center'>
              BLOG
                        <IoIosArrowDown className='material-symbols-outlined' />

            </a>
          </li> */}
					<li className='d-flex align-items-center'>
						<a
							href='#portfolio'
							className='!no-underline text-white flex items-center'>
							PORTFOLIO
							<IoIosArrowDown className='text-xl font-semibold' />
						</a>
					</li>
					<li className='d-flex align-items-center'>
						<a
							href='#contacts'
							className='!no-underline text-white flex items-center'>
							CONTACTS
							<IoIosArrowDown className='text-xl font-semibold' />
						</a>
					</li>
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
					<li>
						<a href=''>
							<BsTwitterX className='social-icons w-6 h-6 text-white' />
						</a>
					</li>
					<li>
						<a href=''>
							<BsFacebook className='social-icons w-6 h-6 text-white' />
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

					{/* Mobile Navigation Items */}
					<ul className='list-unstyled mb-5'>
						<li className='mb-4 pb-3 border-bottom border-secondary'>
							<div
								className='d-flex justify-content-between align-items-center text-white'
								onClick={() => toggleDropdown("HOME")}>
								<a
									href='#home'
									className='text-white text-decoration-none fs-5'>
									HOME
								</a>
								<IoIosArrowDown
									className={`transition-transform duration-300 ${
										activeDropdown === "HOME"
											? "rotate-180"
											: ""
									}`}
								/>
							</div>
							<div
								className={`ps-3 mt-3 overflow-hidden transition-all duration-300 ${
									activeDropdown === "HOME"
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}>
								<div className='mb-2'>
									<a
										href='#home-1'
										className='text-secondary text-decoration-none'>
										Homepage 1
									</a>
								</div>
								<div>
									<a
										href='#home-2'
										className='text-secondary text-decoration-none'>
										Homepage 2
									</a>
								</div>
							</div>
						</li>

						<li className='mb-4 pb-3 border-bottom border-secondary'>
							<div
								className='d-flex justify-content-between align-items-center text-white'
								onClick={() => toggleDropdown("ABOUT")}>
								<a
									href='#blog'
									className='text-white text-decoration-none fs-5'>
									ABOUT
								</a>
								<IoIosArrowDown
									className={`transition-transform duration-300 ${
										activeDropdown === "ABOUT"
											? "rotate-180"
											: ""
									}`}
								/>
							</div>
							<div
								className={`ps-3 mt-3 overflow-hidden transition-all duration-300 ${
									activeDropdown === "ABOUT"
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}>
								<div className='mb-2'>
									<a
										href='#story'
										className='text-secondary text-decoration-none'>
										Our Story
									</a>
								</div>
								<div>
									<a
										href='#team'
										className='text-secondary text-decoration-none'>
										Our Team
									</a>
								</div>
							</div>
						</li>

						<li className='mb-4 pb-3 border-bottom border-secondary'>
							<div
								className='d-flex justify-content-between align-items-center text-white'
								onClick={() => toggleDropdown("PORTFOLIO")}>
								<a
									href='#portfolio'
									className='text-white text-decoration-none fs-5'>
									PORTFOLIO
								</a>
								<IoIosArrowDown
									className={`transition-transform duration-300 ${
										activeDropdown === "PORTFOLIO"
											? "rotate-180"
											: ""
									}`}
								/>
							</div>
							<div
								className={`ps-3 mt-3 overflow-hidden transition-all duration-300 ${
									activeDropdown === "PORTFOLIO"
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}>
								<div className='mb-2'>
									<a
										href='#projects'
										className='text-secondary text-decoration-none'>
										Projects
									</a>
								</div>
								<div>
									<a
										href='#case-studies'
										className='text-secondary text-decoration-none'>
										Case Studies
									</a>
								</div>
							</div>
						</li>

						<li className='mb-4 pb-3 border-bottom border-secondary'>
							<div
								className='d-flex justify-content-between align-items-center text-white'
								onClick={() => toggleDropdown("CONTACTS")}>
								<a
									href='#contacts'
									className='text-white text-decoration-none fs-5'>
									CONTACTS
								</a>
								<IoIosArrowDown
									className={`transition-transform duration-300 ${
										activeDropdown === "CONTACTS"
											? "rotate-180"
											: ""
									}`}
								/>
							</div>
							<div
								className={`ps-3 mt-3 overflow-hidden transition-all duration-300 ${
									activeDropdown === "CONTACTS"
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}>
								<div className='mb-2'>
									<a
										href='#get-in-touch'
										className='text-secondary text-decoration-none'>
										Get in Touch
									</a>
								</div>
								<div>
									<a
										href='#locations'
										className='text-secondary text-decoration-none'>
										Locations
									</a>
								</div>
							</div>
						</li>
					</ul>

					{/* Social Icons in Mobile Menu */}
					<div className='mt-auto'>
						<ul className='d-flex justify-content-center list-unstyled gap-4'>
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
							<li>
								<a href=''>
									<BsTwitterX className='social-icons w-6 h-6 text-white' />
								</a>
							</li>
							<li>
								<a href=''>
									<BsFacebook className='social-icons w-6 h-6 text-white' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
