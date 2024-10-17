import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { GrContact, GrProjects } from "react-icons/gr";
import { TbInfoSquareRounded, TbHome } from "react-icons/tb";
import '../assets/styles/NavBar.css';
import myPhoto from '../assets/images/myPic.png';

const NavBar = ({ sections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id.slice(0, -1));
        }
      });
    });

    sections.forEach((section) => {
      if (section.current !== undefined) {
        observer.observe(section.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);
  return (
    <nav>
      <ul id="nav_name">
        <li className="nav_left">
          <a href="#home">Iván</a>
        </li>
      </ul>
      <ul id="nav_cartoon">
        <li className="nav_left">
          <a href="#home">Iván</a>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <a href="#home" onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setActiveLink('about')} className={activeLink === 'about' ? 'active' : ''}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setActiveLink('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveLink('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
      <ul id="nav-ham">
        <li onClick={toggleDropdown}>
          <a><RxHamburgerMenu /></a>
        </li>
        
      </ul>
      <div className="dropdown-container" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
        <ul className="dropdown-menu">
          <li id="dropdown-top">
            <img src={myPhoto}></img>
            <button onClick={toggleDropdown}><VscChromeClose /></button>
          </li>
          <li>
            <a href="#home" onClick={toggleDropdown}><TbHome className="drop-icon"/> Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleDropdown}><TbInfoSquareRounded className="drop-icon"/> About</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleDropdown}><GrProjects className="drop-icon"/> Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleDropdown}><GrContact className="drop-icon"/> Contact</a>
          </li>
          <li>
          </li>
        </ul>
      </div>  
    </nav>
  )
};

NavBar.propTypes = {
  sections: PropTypes.array,
};
export default NavBar;