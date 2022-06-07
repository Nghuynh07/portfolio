import { FaTwitter, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__links'>
          <a
            href='https://www.linkedin.com/in/huynhtnguyen/'
            className='social__link'
          >
            <FaLinkedinIn />
          </a>
          <a href='https://github.com/Nghuynh07' className='social__link'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/huyniewin/' className='social__link'>
            <FaTwitter />
          </a>
          <a href='mailto: july31nth@gmail.com' className='social__link'>
            <FaMailBulk />
          </a>
        </div>
        <article className='header__main'>
          {/* <h1 className='header__heading'>huynh nguyen</h1> */}
          <h1 className='header__heading'>front-end developer</h1>
          <article className='header__contents'>
            <p className='header__text'>
              Welcome to my portfolio. I'm passionate about front-end
              development using technologies such as{" "}
              <span className='highlight'>
                HTML, CSS, JavaScript, and React Js
              </span>
            </p>
          </article>
        </article>
      </div>
    </header>
  );
};

export default Header;
