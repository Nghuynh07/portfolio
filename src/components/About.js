const About = () => {
  return (
    <div className='section section-2' id='about'>
      <div className='section-2-wrapper'>
        <div className='section-2-left'>
          <h3 className='myStory'>My Story</h3>
          <article className='section-2-text-wrapper'>
            <p className='section-2-text'>
              Hi there! My name is Huynh and I am a full-stack developer. I
              remember looking at wesbites and wondering how these beautiful
              pages were created. I had no idea what ['front-end', 'back-end',
              'full-stack', 'programmer'] even mean. Over the years, my
              curiosity grew and in March 2021, I decided to slowly transition
              my career towards programming after 10 years of pharmacy setting.
              I immediately enrolled online coding boot camp for 3 languages:
              ['Java', 'Python', 'Javascript'] and started my journey. About
              half way through I spark interest in front-end developments.
            </p>
            <p className='section-2-text'>
              I struggle often as a self taught programmer; however, I am
              extremely grateful to found my passion. One year ago, I was a
              blank piece of paper coming into programming. Fast-forward to
              today, I am a full-stack developer.
            </p>
          </article>
        </div>
        <div className='section-2-right'>
          <div className='section-2-technologies'>
            <h3>Technologies I fell in love with:</h3>
            <p>Javascript</p>
            <p>React</p>
            <p>Node.js/Express.js</p>
            <p>Sass</p>
          </div>
          <div className='section-2-technologies'>
            <h3>Other technologies I have worked with:</h3>
            <p>Python (Django/full-stack)</p>
            <p>Java (Springboot/full-stack)</p>
            <p>Boostrap</p>
            <p>Git/github</p>
            <p>Material UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
