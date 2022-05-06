import { useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";

const LandingPage = () => {
  useEffect(() => {
    const callbackFunc = (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        document
          .querySelector(".landing-page-content")
          .classList.add("display-landing-page-content");
      } else {
        document
          .querySelector(".landing-page-content")
          .classList.remove("display-landing-page-content");
      }
    };

    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callbackFunc, options);
    observer.observe(document.querySelector(".landing-page"));
  }, []);

  useEffect(() => {
    const landingPage = document.querySelector(".landing-page");
    const callbackFunc = (entries) => {
      const [entry] = entries;

      const heading = landingPage.children[0];
      if (!entry.isIntersecting) {
        heading.classList.add("display-landing-page-social-media");
      } else {
        heading.classList.remove("display-landing-page-social-media");
      }
    };

    const options = {
      root: null,
      threshold: 0.7,
    };

    const observer = new IntersectionObserver(callbackFunc, options);
    observer.observe(document.querySelector(".landing-page-content"));
  }, []);

  return (
    <div className='landing-page'>
      <div className='landing-page-social-media'>
        <a
          href='https://www.linkedin.com/in/huynhtnguyen/'
          className='landing-page-social-media-link'
        >
          <FaLinkedinIn />
        </a>

        <a
          href='https://github.com/Nghuynh07'
          className='landing-page-social-media-link'
        >
          <FaGithub />
        </a>

        <a
          href='https://codepen.io/htn1988/'
          className='landing-page-social-media-link'
        >
          <FaCodepen />
        </a>

        <a
          href='https://twitter.com/huyniewin/'
          className='landing-page-social-media-link'
        >
          <FaTwitter />
        </a>
        <a
          href='mailto: july31nth@gmail.com'
          className='landing-page-social-media-link'
        >
          <FaMailBulk />
        </a>
      </div>
      <div className='landing-page-content'>
        <p className='landing-page-content-mynameis'>Hi, I'm</p>
        <h1 className='landing-page-content-name'>huynh nguyen</h1>
        <h3 className='landing-page-content-developer'>Front-end developer</h3>
        <article className='landing-page-content-text-wrapper'>
          <p className='landing-page-content-text'>
            Hello there! I am a <span className='highlight'>self-taught</span> /
            <span className='highlight'> boot camp </span>
            programmer. I have the knowledge of a
            <span className='highlight'> full-stack</span> developer; however,
            my focus has been on
            <span className='highlight'> front-end</span> development and I
            enjoy every moment of it.
          </p>
        </article>
      </div>
    </div>
  );
};

export default LandingPage;
