import { useState } from "react";
import Contact from "./Contact";
import classes from "./Home.module.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const showContact = () => {
    setShow(!show);
  };

  return (
    <div className={classes.home}>
      <div className={classes.letters}>
        <span className={classes.h}>h</span>
        <span className={classes.u}>u</span>
        <span className={classes.y}>y</span>
        <span className={classes.n}>n</span>
        <span className={classes.hh}>h</span>
        <span>.</span>
        <span className={classes.nn}>n</span>
        <span className={classes.nnn}>g</span>
        <span className={classes.uu}>u</span>
        <span className={classes.yy}>y</span>
        <span className={classes.e}>e</span>
        <span className={classes.n}>n</span>
      </div>
      <h3>| full-stack developer |</h3>
      <button onClick={showContact} className={classes.contactButton}>
        Contact
      </button>
      {show && <Contact />}
    </div>
  );
};

export default Home;
