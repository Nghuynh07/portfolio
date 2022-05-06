const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <div className='contact -wrapper'>
        <h1 className='section-heading heading'>Let's Talk!</h1>
        <div className='contact-content'>
          <article className='contact-text-wrapper'>
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
          <article className='contact-text-wrapper'>
            <p>Any feed back is appreciated. Thank you</p>
          </article>
          <article className='contact-text-wrapper'>
            <p>Otherwise, thank you for visiting!</p>
          </article>
        </div>
        <a href='mailto: july31nth@gmail.com' className='contact-btn-link'>
          my email
        </a>
      </div>
    </div>
  );
};

export default Contact;
