const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <h1 className='contact-title'>Contact</h1>
      <div className='contact-container'>
        <div className='contact-wrapper'>
          <h1 className='contact-heading'>Lets Talk</h1>
          <form className='form'>
            <div className='input-wrapper'>
              <input type='text' placeholder='Your Name' name='name' />
            </div>
            <div className='input-wrapper'>
              <input type='email' placeholder='Your Name' name='email' />
            </div>
            <div className='input-wrapper'>
              <textarea
                placeholder='Your message'
                className='textarea'
                name='message'
              />
            </div>
            <input type='submit' value='Send' className='form-btn' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
