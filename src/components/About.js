import { useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaSass, FaGit, FaReact } from "react-icons/fa";
const About = () => {
  // useEffect(() => {
  //   const about = document.querySelector(".about");
  //   const aboutLeftSide = document.querySelector(".about-left");

  //   const callback = (entries, observer) => {
  //     const [entry] = entries;
  //     if (!entry.isIntersecting)
  //       aboutLeftSide.classList.add("about-left-hidden");
  //     else aboutLeftSide.classList.remove("about-left-hidden");
  //   };
  //   const options = {
  //     root: null,
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver(callback, options);
  //   observer.observe(about);
  // }, []);

  // useEffect(() => {
  //   const about = document.querySelector(".about");
  //   const aboutRightSide = document.querySelector(".about-right");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (!entry.isIntersecting)
  //         aboutRightSide.classList.add("about-right-hidden");
  //       else aboutRightSide.classList.remove("about-right-hidden");
  //     },
  //     {
  //       root: null,
  //       threshold: 0.1,
  //     }
  //   );

  //   observer.observe(about);
  // }, []);

  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <article className='about__section1'>
          <h2 className='about__heading'>About</h2>
          <p className='about__text'>
            Hi, my name is Huynh. I am a self-taught programmer from Seattle,
            WA. If I am not working in the pharmacy, I spend most of my free
            time coding and taking on challenges on FrontendMentor as a way to
            improve my front-end skills.
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
