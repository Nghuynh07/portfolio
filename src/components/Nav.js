import React from "react";

const Nav = () => {
  return (
    <nav className='nav'>
      <a href='#logo' className='logo'>
        .H.N.
      </a>
      <div className='navbar-links-container'>
        <a href='#home' className='navbar-link'>
          home
        </a>
        <a href='#about' className='navbar-link'>
          about
        </a>
        <a href='#projects' className='navbar-link'>
          projects
        </a>
        <a href='#contact' className='navbar-link'>
          contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
