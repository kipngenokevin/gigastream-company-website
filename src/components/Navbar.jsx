/** @format */

import Facebook from "../../public/facebook.svg";
import Linkedin from "../../public/linkedin.svg";
import Instagram from "../../public/instagram.svg";
import X from "../../public/X.svg";

export default function Navbar() {
	return (
		<nav className=' justify-content-between desktop-nav'>
			<ul className='d-flex justify-content-between align-items-center flex-grow-1'>
				<li className='flex items-center'>
					<a
						href='#home'
						className='!no-underline text-white flex items-center'>
						HOME
						<span className='material-symbols-outlined ml-1'>
							keyboard_arrow_down
						</span>
					</a>
				</li>

				<li className='d-flex align-items-center'>
					<a
						href='#about'
						className='!no-underline text-white flex items-center'>
						ABOUT
						<span className='material-symbols-outlined'>
							keyboard_arrow_down
						</span>
					</a>
				</li>
				<li className='d-flex align-items-center'>
					<a
						href='#blog'
						className='!no-underline text-white flex items-center'>
						BLOG
						<span className='material-symbols-outlined'>
							keyboard_arrow_down
						</span>
					</a>
				</li>
				<li className='d-flex align-items-center'>
					<a
						href='#portfolio'
						className='!no-underline text-white flex items-center'>
						PORTFOLIO
						<span className='material-symbols-outlined'>
							keyboard_arrow_down
						</span>
					</a>
				</li>
				<li className='d-flex align-items-center'>
					<a
						href='#contacts'
						className='!no-underline text-white flex items-center'>
						CONTACTS
						<span className='material-symbols-outlined'>
							keyboard_arrow_down
						</span>
					</a>
				</li>
			</ul>
			<ul className='d-flex justify-content-end'>
				<li>
					<img
						className='social-icons'
						src={Facebook}
						alt='Facebook'
						href=''
					/>
				</li>
				<li>
					<img className='social-icons' src={X} alt='X' />
				</li>
				<li>
					<a href='https://www.instagram.com/gigastream_media/' target='_blank'>
						<img
							className='social-icons'
							src={Instagram}
							alt='Instagram'
						/>
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/company/gigastream-media-tech-ltd' target='_blank'>
						<img
							className='social-icons'
							src={Linkedin}
							alt='Linkedin'
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
}
