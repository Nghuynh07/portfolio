const Contact = () => {
  return (
    <div className='contact flex'>
      <div className='contact-wrapper flex'>
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
