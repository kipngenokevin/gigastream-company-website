/** @format */

import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTwitterX,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
	return (
		<nav className=' justify-content-between desktop-nav'>
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
	);
}
