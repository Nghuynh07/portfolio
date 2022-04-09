import evff from "./../img/evff.gif";
import sweeetmovies from "./../img/sweetmovies.gif";
import echovalley from "./../img/echovalley.gif";

const Projects = () => {
  return (
    <>
      <div className='projects' id='projects'>
        <h1 className='projects-title'>projects</h1>
        <div className={`project`}>
          <div className='img-container'>
            <h3>
              0<span>1</span>
            </h3>
            <img src={echovalley} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>EVFF</h1>
            <div className='project-1-technologies sweetmovies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <a
              href='https://github.com/Branley22/mern_group_project'
              className='demo'
            >
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
        <div className={`project`}>
          <div className='img-container'>
            <h3>
              0<span>2</span>
            </h3>
            <img src={sweeetmovies} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>SweetMovies</h1>
            <div className='project-1-technologies sweetmovies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <a
              href='https://github.com/Branley22/mern_group_project'
              className='demo'
            >
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
        <div className={`project `}>
          <div className='img-container'>
            <h3>
              0<span>3</span>
            </h3>
            <img src={evff} alt='projectOne' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Echo Valley Family Farm</h1>
            <div className='project-1-technologies evff'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Java(Springboot)</p>
            </div>
            <a
              href='https://github.com/Nghuynh07/echovalleyfarm'
              className='demo'
            >
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
