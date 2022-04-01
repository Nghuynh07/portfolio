import evff from "./../img/evff.gif";
import sweeetmovies from "./../img/sweetmovies.gif";

const Projects = () => {
  return (
    <>
      <div className='projects' id='projects'>
        <h1 className='projects-title'>projects</h1>
        <div className={`project`}>
          <div className='img-container'>
            <img src={sweeetmovies} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Echo Valley Family Farm</h1>
            <div className='project-1-technologies sweetmovies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <a href='#link' className='demo'>
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
        <div className={`project `}>
          <div className='img-container'>
            <img src={evff} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Echo Valley Family Farm</h1>
            <div className='project-1-technologies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <a href='#link' className='demo'>
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
        <div className={`project `}>
          <div className='img-container'>
            <img src={evff} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Echo Valley Family Farm</h1>
            <div className='project-1-technologies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <a href='#link' className='demo'>
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
