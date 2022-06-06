import { FaTwitter, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const Header = () => {
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
          <article className='header__contents'>
            <p className='header__text'>
              Welcome to my portfolio. I'm a passionate
              <span className='header__title'> front-end developer</span>. I
              have been working with <span className='highlight'>HTML</span>,
              <span className='highlight'> CSS</span>,{" "}
              <span className='highlight'>JavaScript</span> and{" "}
              <span className='highlight'>React JS</span>.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Header;
