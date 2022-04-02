import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [focus, setFocus] = useState(false);

  const displayLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className='nav'>
      {/* <a href='#logo' className='logo'>
        .H.N.
      </a> */}
      <div className='navbar-links-container'>
        <div className={`${showLinks ? "show-links" : ""}`}>
          <a href='#home' className='navbar-link'>
            home
          </a>
        </div>

        <div className={`${showLinks ? "show-links" : null}`}>
          <a href='#about' className='navbar-link'>
            about
          </a>
        </div>
        <div className={`${showLinks ? "show-links" : null}`}>
          <a href='#projects' className='navbar-link'>
            projects
          </a>
        </div>
        <div className={`${showLinks ? "show-links" : null}`}>
          <a href='#contact' className='navbar-link'>
            contact
          </a>
        </div>
      </div>
      <div className='hamburger' onClick={displayLinks}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
