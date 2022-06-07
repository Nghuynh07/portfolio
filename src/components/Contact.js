const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <div className='contact__container'>
        <h2 className='contact__heading'>Let's Talk!</h2>
        <form className='contact__form'>
          <div className='contact__wrapper'>
            <label htmlFor='name'>
              <input
                className='contact__input'
                id='name'
                type='text'
                placeholder='Your Name'
              />
            </label>
            {/* <p className='error'>Please enter your name</p> */}
          </div>
          <div className='contact__wrapper'>
            <label htmlFor='email'>
              <input
                className='contact__input'
                id='email'
                type='email'
                placeholder='Your Email'
              />
            </label>
            {/* <p className='error'>Please enter your email</p> */}
          </div>
          <div className='contact__wrapper'>
            <label htmlFor='email'>
              <textarea
                className='contact__input contact__textarea'
                placeholder='Your Message'
              ></textarea>
            </label>
            <p className='error'>Please enter your message</p>
          </div>
          <button className='contact__btn'>send</button>
        </form>
        {/* <a href='mailto: july31nth@gmail.com' className='contact-btn-link'>
          my email
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
