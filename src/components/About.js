import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const about = document.querySelector(".about");
    const aboutLeftSide = document.querySelector(".about-left");
    const callback = (entries, observer) => {
      const [entry] = entries;
      // console.log(entry);
      if (!entry.isIntersecting)
        aboutLeftSide.classList.add("about-left-hidden");
      else aboutLeftSide.classList.remove("about-left-hidden");
    };
    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(about);
  }, []);

  useEffect(() => {
    const about = document.querySelector(".about");
    const aboutRightSide = document.querySelector(".about-right");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting)
          aboutRightSide.classList.add("about-right-hidden");
        else aboutRightSide.classList.remove("about-right-hidden");
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(about);
  }, []);

  return (
    <div className='about' id='about'>
      <div className='about-wrapper'>
        <div className='about-left '>
          <h3 className='section-heading'>My Story</h3>
          <article className='about-text-wrapper'>
            <p className='about-text'>
              Hi there! My name is <span className='highlight'>Huynh</span> and
              I am a full-stack developer. I remember looking at wesbites and
              wondering how these beautiful pages were created. I had no idea
              what [<span className='highlight'>'front-end'</span>, 'back-end',
              'full-stack', 'programmer'] even mean. Over the years, my
              curiosity grew and in March 2021, I decided to slowly transition
              my career towards programming after 10 years of pharmacy setting.
              I immediately enrolled online coding boot camp for 3 languages:
              ['Java', 'Python', <span className='highlight'>'JavaScript'</span>
              ] and started my journey. About half way through I spark interest
              in front-end developments.
            </p>
          </article>
        </div>
        <div className='about-right'>
          <div className='about-technologies'>
            <h3>Technologies: </h3>
            <p>Javascript</p>
            <p>React</p>
            <p>Node.js/Express.js</p>
            <p>Sass</p>
            <p>Git/github</p>
          </div>
          <div className='about-technologies'>
            <h3>Other Stacks:</h3>
            <p>Python (Django/full-stack)</p>
            <p>Java (Springboot/full-stack)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
