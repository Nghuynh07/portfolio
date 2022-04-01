const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className='contact-title'>Contact</h1>
      <div className='contact-wrapper'>
        <h1 className='contact-heading'>Lets Talk</h1>
        <form className='form'>
          <div className='input-wrapper'>
            <input type='text' placeholder='Your Name' />
          </div>
          <div className='input-wrapper'>
            <textarea placeholder='Your message' className='textarea' />
          </div>
          <input type='submit' value='Send' className='form-btn' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
