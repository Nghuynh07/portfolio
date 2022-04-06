import resume from "../img/resume.pdf";

import { useState } from "react";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(true);

  const displayLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className='nav'>
        {/* <a href='#logo' className='logo'>
        .H.N.
      </a> */}
        <div className='navbar-links-container'>
          <div className={`${showLinks && "show-links"}`}>
            <a href='#home' className='navbar-link'>
              home
            </a>
          </div>

          <div className={`${showLinks && "show-links"}`}>
            <a href='#about' className='navbar-link'>
              about
            </a>
          </div>
          <div className={`${showLinks && "show-links"}`}>
            <a href='#projects' className='navbar-link'>
              projects
            </a>
          </div>
          <div className={`${showLinks && "show-links"}`}>
            <a href='#contact' className='navbar-link'>
              contact
            </a>
          </div>
          <div className={`${showLinks && "show-links"}`}>
            <a href={resume} className='navbar-link'>
              resume
            </a>
          </div>
        </div>
        <div className='hamburger' onClick={displayLinks}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
