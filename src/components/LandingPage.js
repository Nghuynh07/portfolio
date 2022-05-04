import { FaTwitter, FaGithub, FaCodepen, FaLinkedinIn } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className='landing-page section-1'>
      <div className='landing-page-email'>
        <a
          href='mailto: july31nth@gmail.com'
          className='landing-page-email-link'
        >
          july31nth<span>@</span>gmail.com
        </a>
      </div>
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
      </div>
      <div className='section-1-wrapper'>
        <p className='section-1-mynameis'>Hi, I'm</p>
        <div className='section-1-name-wrapper'>
          <h1>huynh nguyen</h1>
        </div>
        <div className='section-1-frontend-wrapper'>
          <h3>Front-end developer</h3>
        </div>
        <article className='section-1-text-wrapper'>
          <p>
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
