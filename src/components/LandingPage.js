const container = document.querySelector("#root");

console.log(container.children[0]);

const LandingPage = () => {
  return (
    <>
      <header id='home'>
        <div className='heading-wrapper'>
          <h1 id='frontend'>front-end</h1>
          <h1 id='developer'>developer</h1>
          <div className='text-wrapper'>
            <p className='inter'>
              Interdisciplinary Visual Art and Pharmacy background
            </p>
            <div className='creativity'>
              <p>Creativity</p>
              <p>Simplicity</p>
              <p>Aesthetic</p>
            </div>
          </div>
          <div className='social-media'>
            <a href='https://github.com/Nghuynh07'>GitHub</a>
            <a href='https://www.linkedin.com/in/huynhtnguyen/'>LinkedIn</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
