import React from "react";
import { useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";
const Footer = () => {
  useEffect(() => {
    const callbackFunc = (entries) => {
      const links = document.querySelector(".footer-social-media");

      const [entry] = entries;

      if (!entry.isIntersecting) {
        links.classList.add("footer-display");
      } else {
        links.classList.remove("footer-display");
      }
    };
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callbackFunc, options);

    const footer = document.querySelector(".footer");
    observer.observe(footer);
  }, []);

  return (
    <div className='footer'>
      <div className='footer-social-media'>
        <a
          href='https://www.linkedin.com/in/huynhtnguyen/'
          className='footer-social-media-link'
        >
          <FaLinkedinIn />
        </a>

        <a
          href='https://github.com/Nghuynh07'
          className='footer-social-media-link'
        >
          <FaGithub />
        </a>

        <a
          href='https://codepen.io/htn1988/'
          className='footer-social-media-link'
        >
          <FaCodepen />
        </a>
        <a
          href='https://twitter.com/huyniewin/'
          className='footer-social-media-link'
        >
          <FaTwitter />
        </a>

        <a
          href='mailto: july31nth@gmail.com'
          className='footer-social-media-link'
        >
          <FaMailBulk />
        </a>
      </div>

      <div className='copyright'>
        <p>
          Code<span>&</span>Designed by Huynh Nguyen
        </p>
      </div>
    </div>
  );
};

export default Footer;
