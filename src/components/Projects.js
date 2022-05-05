import timeTracking from "../img/tracking.png";
import threeColumn from "../img/threeColumn.png";
import navigation from "../img/navigation.png";
import generator from "../img/generator.png";
import cardComponent from "../img/cardComponent.png";
import rating from "../img/rating.png";
import interactiveSlider from "../img/interactiveSlider.png";

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='section-heading projects-heading'>Projects</h1>
      <div className='projects-content'>
        <div className='project project-1'>
          <h3 className='project-title project-1-title'>
            Time Tracking Dashboard
          </h3>
          <img
            className='project-img'
            src={timeTracking}
            alt='Time Tracking Dashboard'
          />

          {/* <p className='project-text project-1-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}

          <div className='project-links'>
            <a
              className='project-link project-1-link'
              href='https://github.com/Nghuynh07/time_tracking_dashboard'
            >
              Source Code
            </a>
            <a
              className='project-link project-1-link'
              href='https://silver-stardust-813866.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-2'>
          <h3 className='project-title project-2-title'>Three Column</h3>
          <img
            className='project-img'
            src={threeColumn}
            alt='Time Tracking Dashboard'
          />

          {/* <p className='project-text project-2-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}

          <div className='project-links project-2-links'>
            <a
              className='project-link project-2-link'
              href='https://github.com/Nghuynh07/3-column-preview-card-component'
            >
              Source Code
            </a>
            <a
              className='project-link project-2-link'
              href='https://phenomenal-valkyrie-738185.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-3'>
          <h3 className='project-title project-3-title'>Dropdown Navigation</h3>
          <img
            className='project-img'
            src={navigation}
            alt='Time Tracking Dashboard'
          />

          {/* <p className='project-text project-3-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}

          <div className='project-links'>
            <a
              className='project-link project-3-link'
              href='https://github.com/Nghuynh07/dropdown_navigation'
            >
              Source Code
            </a>
            <a
              className='project-link project-3-link'
              href='https://bejewelled-mooncake-66f439.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-4'>
          <h3 className='project-title project-4-title'>Advice Generator</h3>
          <img
            className='project-img'
            src={generator}
            alt='Time Tracking Dashboard'
          />

          {/* <p className='project-text project-4-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}

          <div className='project-links'>
            <a
              className='project-link project-4-link'
              href='https://github.com/Nghuynh07/advice_gen'
            >
              Source Code
            </a>
            <a
              className='project-link project-4-link'
              href='https://polite-starburst-b6eccd.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-5'>
          <h3 className='project-title project-5-title'>Card Component</h3>
          <img
            className='project-img'
            src={cardComponent}
            alt='Time Tracking Dashboard'
          />

          {/* <p className='project-text project-5-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}

          <div className='project-links'>
            <a
              className='project-link project-5-link'
              href='https://github.com/Nghuynh07/card_component'
            >
              Source Code
            </a>
            <a
              className='project-link project-5-link'
              href='https://vermillion-kitten-ab75d1.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-6'>
          <h3 className='project-title project-6-title'>Rating Component</h3>
          <img
            className='project-img'
            src={rating}
            alt='Time Tracking Dashboard'
          />
          {/* <p className='project-text project-6-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}
          <div className='project-links'>
            <a
              className='project-link project-6-link'
              href='https://github.com/Nghuynh07/Interactive_Rating_Component'
            >
              Source Code
            </a>
            <a
              className='project-link project-6-link'
              href='https://6268d9933f323459f88242f7--glowing-strudel-c28f1b.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='project project-7'>
          <h3 className='project-title project-7-title'>Interactive Slider</h3>
          <img
            className='project-img'
            src={interactiveSlider}
            alt='Time Tracking Dashboard'
          />
          {/* <p className='project-text project-7-text'>
            Time Tracking Dashboard a challenge created by FrontendMentor. The
            objective of this challenge is to code out the design to make it
            look as close as possible to the original. The completed solution
            must be responsive using mobile 375px and desktop 1440px. This
            project was created using HTML, and custom CSS properties to achieve
            the result.
          </p> */}
          <div className='project-links'>
            <a
              className='project-link project-7-link'
              href='https://github.com/Nghuynh07/sliders'
            >
              Source Code
            </a>
            <a
              className='project-link project-7-link'
              href='https://quiet-gnome-6e0cb9.netlify.app/'
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
