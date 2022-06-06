import { useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";

const Header = () => {
  // useEffect(() => {
  //   const callbackFunc = (entries) => {
  //     const [entry] = entries;

  //     if (!entry.isIntersecting) {
  //       document
  //         .querySelector(".landing-page-content")
  //         .classList.add("display-landing-page-content");
  //     } else {
  //       document
  //         .querySelector(".landing-page-content")
  //         .classList.remove("display-landing-page-content");
  //     }
  //   };

  //   const options = {
  //     root: null,
  //     threshold: 0.2,
  //   };

  //   const observer = new IntersectionObserver(callbackFunc, options);
  //   observer.observe(document.querySelector(".landing-page"));
  // }, []);

  // useEffect(() => {
  //   const landingPage = document.querySelector(".landing-page");
  //   const callbackFunc = (entries) => {
  //     const [entry] = entries;

  //     const heading = landingPage.children[0];
  //     if (!entry.isIntersecting) {
  //       heading.classList.add("display-landing-page-social-media");
  //     } else {
  //       heading.classList.remove("display-landing-page-social-media");
  //     }
  //   };

  //   const options = {
  //     root: null,
  //     threshold: 0.7,
  //   };

  //   const observer = new IntersectionObserver(callbackFunc, options);
  //   observer.observe(document.querySelector(".landing-page-content"));
  // }, []);

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__links'>
          <a
            href='https://www.linkedin.com/in/huynhtnguyen/'
            className='header__link'
          >
            <FaLinkedinIn />
          </a>
          <a href='https://github.com/Nghuynh07' className='header__link'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/huyniewin/' className='header__link'>
            <FaTwitter />
          </a>
          <a href='mailto: july31nth@gmail.com' className='header__link'>
            <FaMailBulk />
          </a>
        </div>
        <div className='header__main'>
          <h1 className='header__heading'>huynh nguyen</h1>
          <article className='landing-page-content-text-wrapper'>
            <h3 className='header__title'>Front-end developer</h3>
            <p className='header__text'>
              Hello there! I am a <span className='highlight'>self-taught</span>{" "}
              /<span className='highlight'> boot camp </span>
              programmer. I have the knowledge of a
              <span className='highlight'> full-stack</span> developer; however,
              my focus has been on
              <span className='highlight'> front-end</span> development and I
              enjoy every moment of it.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Header;
