import resume from "../img/resume.pdf";

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <a href='http://huynhtn.com/'>H</a>
      </div>
      <ul className='nav-links'>
        <li className='nav-item'>
          <span></span>
          <a href='#about' className='nav-link'>
            about
          </a>
        </li>
        <li className='nav-item'>
          <span></span>
          <a href='#projects' className='nav-link'>
            projects
          </a>
        </li>
        <li className='nav-item'>
          <span></span>
          <a href='#contact' className='nav-link'>
            contact
          </a>
        </li>
        <li className='nav-resume resume'>
          <a href={resume} className='nav-resume-link'>
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
