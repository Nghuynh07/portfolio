import { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const showHamburger = () => {
    setShow(!show);
  };

  return (
    <>
      {/* HAMBURGER */}
      <span className={classes.hidden} onClick={showHamburger}></span>

      {show && (
        <div className={show && classes.showHamburger}>
          <span className={classes.x} onClick={showHamburger}>
            X
          </span>
          <Link to='/' className={classes.hamburgerLinks}>
            home
          </Link>
          <Link to='about' className={classes.hamburgerLinks}>
            about
          </Link>
          <Link to='projects' className={classes.hamburgerLinks}>
            projects
          </Link>
        </div>
      )}

      {/* NAVBAR */}
      <nav className={classes.navbar}>
        <div className={classes.navbarContainer}>
          <Link to='/' className={classes.navbarLogo}>
            h.n.
          </Link>

          <div className={classes.navbarLinksContainer}>
            <Link className={classes.navbarLinks} to='/'>
              home
            </Link>
            <Link className={classes.navbarLinks} to='about'>
              about
            </Link>
            <Link className={classes.navbarLinks} to='projects'>
              projects
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
