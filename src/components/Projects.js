import evff from "./../img/evff.gif";
import sweeetmovies from "./../img/sweetmovies.gif";
import echovalley from "./../img/echovalley.gif";
import weatherAPI from "./../img/weatherAPI.PNG";
import imgSlider from "./../img/img_slider.png";
import dropDown from "./../img/dropDown.png";
import slider from "./../img/slider.png";
const Projects = () => {
  return (
    <>
      <div className='section section-3' id='projects'>
        <div className={`project`}>
          <div className='img-container'>
            <h3>
              0<span>1</span>
            </h3>
            <img src={echovalley} alt='project-1' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Echo Valley Family Farm (MERN)</h1>
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
            <img src={sweeetmovies} alt='project-2' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Sweet Movies</h1>
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
            <img src={evff} alt='project-3' loading='lazy' />
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
        <div className={`project `}>
          <div className='img-container'>
            <h3>
              0<span>4</span>
            </h3>
            <img src={weatherAPI} alt='project-4' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Weather API</h1>
            <div className='project-1-technologies evff'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <a href='https://github.com/Nghuynh07/weather_API' className='demo'>
              Go To Demo
            </a>
            <div className='line'></div>
          </div>
        </div>
        <div className={`project `}>
          <div className='img-container'>
            <h3>
              0<span>5</span>
            </h3>
            <img src={imgSlider} alt='project-5' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Image Slider</h1>
            <div className='project-1-technologies evff'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <a
              href='https://github.com/Nghuynh07/image-slider'
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
              0<span>6</span>
            </h3>
            <img src={dropDown} alt='project-6' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Dropdown Menu </h1>
            <div className='project-1-technologies evff'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <a
              href='https://github.com/Nghuynh07/Dropdown-Menu'
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
              0<span>7</span>
            </h3>
            <img src={slider} alt='project-7' loading='lazy' />
          </div>
          <div className='project-wrapper'>
            <h1 className='project-title'>Slider</h1>
            <div className='project-1-technologies evff'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <a href='https://github.com/Nghuynh07/sliders' className='demo'>
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
