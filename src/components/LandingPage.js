const container = document.querySelector("#root");

console.log(container.children[0]);

const LandingPage = () => {
  return (
    <>
      <header id='home'>
        <div className='heading-wrapper'>
          <div className='frontend'>
            <h1 className='frontEndDeveloper'>f</h1>
            <h1 className='frontEndDeveloper'>r</h1>
            <h1 className='frontEndDeveloper'>o</h1>
            <h1 className='frontEndDeveloper'>n</h1>
            <h1 className='frontEndDeveloper'>t</h1>
            <h1 className='frontEndDeveloper'>-</h1>
            <h1 className='frontEndDeveloper'>e</h1>
            <h1 className='frontEndDeveloper'>n</h1>
            <h1 className='frontEndDeveloper'>d</h1>
          </div>
          <div className='developer'>
            <h1 className='frontEndDeveloper'>d</h1>
            <h1 className='frontEndDeveloper'>e</h1>
            <h1 className='frontEndDeveloper'>v</h1>
            <h1 className='frontEndDeveloper'>e</h1>
            <h1 className='frontEndDeveloper'>l</h1>
            <h1 className='frontEndDeveloper'>o</h1>
            <h1 className='frontEndDeveloper'>p</h1>
            <h1 className='frontEndDeveloper'>e</h1>
            <h1 className='frontEndDeveloper'>r</h1>
          </div>
          <div className='text-wrapper'>
            <p className='inter'>
              Interdisciplinary Visual Art and Pharmacy background
            </p>
            <p className='inter'>
              Enjoy minimal designs and feeling good about it
            </p>
          </div>
          <div className='social-media'>
            <a href='https://github.com/Nghuynh07'>GitHub</a>
            <a href='https://www.linkedin.com/in/huynhtnguyen/'>LinkedIn</a>
            <a href='mailto: july31nth@gmail.com'>Email</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
