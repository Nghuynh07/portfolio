import gitHub from "../img/githubUser.png";
import suite from "../img/suite.png";
import darkfylo from "../img/darkfylo.png";
import tipCal from "../img/tipCal.png";

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        <h2 className='projects__heading'>projects</h2>
        <div className='projects__main'>
          <div className='projects__project'>
            <h3 className='projects__title'>GitHub User</h3>
            <div className='projects__img'>
              <img src={gitHub} alt='GitHub User' />
            </div>
            <div className='projects__technologies'>
              <p>React</p>
              <p>Styled-Components</p>
            </div>
            <div className='projects__cta'>
              <a
                href='https://github.com/Nghuynh07/github_user_search'
                className='projects__link'
              >
                Source Code
              </a>
              <a
                href='https://unique-blini-71039f.netlify.app/'
                className='projects__link'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='projects__project'>
            <h3 className='projects__title'>Tip Calculator</h3>
            <div className='projects__img'>
              <img src={tipCal} alt='GitHub User' />
            </div>
            <div className='projects__technologies'>
              <p>React</p>
              <p>SASS</p>
            </div>
            <div className='projects__cta'>
              <a
                href='https://github.com/Nghuynh07/tip_calculator'
                className='projects__link'
              >
                Source Code
              </a>
              <a
                href='https://gilded-arithmetic-ec0e2c.netlify.app/'
                className='projects__link'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='projects__project'>
            <h3 className='projects__title'>Dark-Fylo Landing Page</h3>
            <div className='projects__img'>
              <img src={darkfylo} alt='GitHub User' />
            </div>
            <div className='projects__technologies'>
              <p>HTML</p>
              <p>SASS</p>
              <p>JavaScript</p>
            </div>
            <div className='projects__cta'>
              <a
                href='https://github.com/Nghuynh07/fylo_dark_landingpage'
                className='projects__link'
              >
                Source Code
              </a>
              <a
                href='https://glowing-otter-230a66.netlify.app/'
                className='projects__link'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='projects__project'>
            <h3 className='projects__title'>Suite Landing Page</h3>
            <div className='projects__img'>
              <img src={suite} alt='GitHub User' />
            </div>
            <div className='projects__technologies'>
              <p>HTML</p>
              <p>SASS</p>
              <p>JavaScript</p>
            </div>
            <div className='projects__cta'>
              <a
                href='https://github.com/Nghuynh07/suit_landing_page'
                className='projects__link'
              >
                Source Code
              </a>
              <a
                href='https://bejewelled-cheesecake-f8530a.netlify.app/'
                className='projects__link'
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
