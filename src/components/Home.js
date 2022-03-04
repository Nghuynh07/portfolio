// import { Outlet } from "react-router-dom";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
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
      <Link to='contact' className={classes.contacts}>
        Contact
      </Link>
    </div>
  );
};

export default Home;
