const Contact = () => {
  return (
    <div className='section section-4' id='contact'>
      <div className='section-4-wrapper'>
        <h3>Lets Talk!</h3>
        <div className='section-4-content'>
          <article className='section-4-text-wrapper'>
            <p>
              I am currently{" "}
              <span className='highlight'>
                looking for an opportunity as a front-end developer
              </span>
              . I have 10 years work experience in professional pharmacy setting
              and I believe a lot of it can be carried over into programming as
              well. I also graduated with BA in Interdisciplinary Visual Art in
              2012 which also helps me becoming a better front-end developer.
            </p>
          </article>
          {/* <article className='section-4-text-wrapper'>
            <p>
              If you are a recruiter or employer and like what you see and would
              like to hear more from me and my journey as self-taught
              programmer, please click the button below.
            </p>
          </article> */}
          <article className='section-4-text-wrapper'>
            <p>Any feed back is appreciated. Thank you</p>
          </article>
          <article className='section-4-text-wrapper'>
            <p>Otherwise, thank you for visiting!</p>
          </article>
        </div>
        <div className='section-4-btn-wrapper'>
          <a href='mailto: july31nth@gmail.com'>my email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
