import { useEffect } from "react";
import resume from "../img/resume.pdf";

const Nav = () => {
  const showHamburger = (e) => {
    const parentContainer = e.target.closest(".nav");

    if (e.target.classList.contains("hamburger")) {
      parentContainer.classList.toggle("change");
    }
  };
  useEffect(() => {}, []);

  return (
    <nav className='nav' onClick={showHamburger}>
      <div className='hamburger'>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>

      <ul className='nav-links'>
        <li className='nav-item'>
          <a href='#about' className='nav-link'>
            about
          </a>
        </li>
        <li className='nav-item'>
          <a href='#projects' className='nav-link'>
            projects
          </a>
        </li>
        <li className='nav-item'>
          <a href='#contact' className='nav-link'>
            contact
          </a>
        </li>
        <li className='nav-resume resume'>
          <a href={resume} className='nav-resume-link'>
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
