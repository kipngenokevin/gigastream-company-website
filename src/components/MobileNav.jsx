import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      <button onClick={toggleMenu} className="menu-button">
        {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
      </button>
      {isOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#blog" onClick={toggleMenu}>BLOG</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>PORTFOLIO</a></li>
          <li><a href="#contacts" onClick={toggleMenu}>CONTACTS</a></li>
        </ul>
      )}
    </div>
  );
}

