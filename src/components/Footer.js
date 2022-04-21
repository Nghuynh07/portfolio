import React from "react";

const Footer = () => {
  return (
    <div className='section section-5'>
      <div className='section-5-content'>
        <div className='section-5-social-media'>
          <div className='section-5-social-media-wrapper'>
            <a href='https://www.linkedin.com/in/huynhtnguyen/'>in</a>
          </div>
          <div className='section-5-social-media-wrapper'>
            <a href='https://github.com/Nghuynh07'>gh</a>
          </div>
          <div className='section-5-social-media-wrapper'>
            <a href='https://codepen.io/htn1988/'>cp</a>
          </div>
          <div className='section-5-social-media-wrapper'>
            <a href='mailto: july31nth@gmail.com'>email</a>
          </div>
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
