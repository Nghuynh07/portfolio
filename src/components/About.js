import { FaHtml5, FaCss3, FaJs, FaSass, FaGit, FaReact } from "react-icons/fa";
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <article className='about__section1'>
          <h2 className='about__heading'>About</h2>
          <p className='about__text'>
            Hi, my name is Huynh. I am a self-taught and self-motivated
            programmer from Seattle, Washington. My current occupation is
            pharmacy technician; however, my dream career is to become a
            front-end developer. If I am not working in the pharmacy, I spend
            most of my free time coding and taking on challenges on Frontend
            Mentor(<abbr title='Frontend Mentor'>FEM</abbr>).
          </p>
          <a
            href='https://www.frontendmentor.io/profile/Nghuynh07'
            className='about__btn'
          >
            FrontendMentor
          </a>
        </article>

        <section className='about__section2'>
          <h3 className='about__title'>Technologies</h3>
          <div className='about__technologies'>
            <div className='about__technology'>
              <p className='about__p'>HTML</p>
              <div className='about__svg'>
                <FaHtml5 />
              </div>
            </div>
            <div className='about__technology'>
              <p className='about__p'>CSS</p>
              <div className='about__svg'>
                <FaCss3 />
              </div>
            </div>
            <div className='about__technology'>
              <p className='about__p'>JavaScript</p>
              <div className='about__svg'>
                <FaJs />
              </div>
            </div>
            <div className='about__technology'>
              <p className='about__p'>React</p>
              <div className='about__svg'>
                <FaReact />
              </div>
            </div>
            <div className='about__technology'>
              <p className='about__p'>Sass</p>
              <div className='about__svg'>
                <FaSass />
              </div>
            </div>
            <div className='about__technology'>
              <p className='about__p'>Git/github</p>
              <div className='about__svg'>
                <FaGit />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
