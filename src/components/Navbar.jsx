import Facebook from '../../public/facebook.svg'
import Linkedin from '../../public/linkedin.svg'
import Instagram from '../../public/instagram.svg'
import X from '../../public/X.svg'

export default function Navbar () {
    return (
        <nav className=" justify-content-between desktop-nav">
            <ul className="d-flex justify-content-between align-items-center flex-grow-1">
                <li className="d-flex align-items-center">
                    HOME 
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </li>
                <li className="d-flex align-items-center">
                    ABOUT
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </li>
                <li className="d-flex align-items-center">
                    BLOG
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </li>
                <li className="d-flex align-items-center">
                    PORTFOLIO
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </li>
                <li className="d-flex align-items-center">
                    CONTACTS
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </li>
            </ul>
            <ul className="d-flex justify-content-end">
                <li><img className='social-icons' src={Facebook} alt="Facebook" /></li>
                <li><img className='social-icons' src={X} alt="X" /></li>
                <li><img className='social-icons' src={Instagram} alt="Instagram" /></li>
                <li><img className='social-icons' src={Linkedin} alt="Linkedin" /></li>
            </ul>
            
        </nav>
    )
}