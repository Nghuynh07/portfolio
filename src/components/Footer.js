import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer section-5'>
      <div className='footer-content'>
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
