import { useEffect } from "react";
import resume from "../img/resume.pdf";

const Nav = () => {
  const showNav = (e) => {
    if (e.target.classList.contains("hamburger")) {
      document.querySelector(".nav__links").classList.toggle("toggle__nav");
    }
  };

  return (
    <nav className='nav' onClick={showNav}>
      <div className='nav__container'>
        <div className='hamburger'>
          <div className='hamburger__line'></div>
          <div className='hamburger__line'></div>
          <div className='hamburger__line'></div>
        </div>
        <div className='nav__links'>
          <a href='#about' className='nav__link'>
            about
          </a>
          <a href='#projects' className='nav__link'>
            projects
          </a>
          <a href='#contact' className='nav__link'>
            contact
          </a>
          <a href={resume} className='nav__link nav__resume'>
            resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
