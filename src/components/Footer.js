import { FaTwitter, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__media'>
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

        <div className='copyright'>
          <p>
            Coded<span>&</span>Designed by Huynh Nguyen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
