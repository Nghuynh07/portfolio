import React from "react";

const Form = () => {
  return (
    <div className='form-project-wrapper'>
      <h1>
        <spa>Sign</spa>
        <span>In</span>
      </h1>
      <div className='buttons'>
        <button className='signin-btn'>SignIn</button>
        <button className='signup-btn'>signUp</button>
      </div>
      <form className='form-project'>
        <div className='form-project-input-wrapper'>
          <input
            type='text'
            className='form-project-input'
            id='username'
            placeholder='User name'
            autoComplete='off'
          />
          <p class='form-project-error'>Error Message</p>
        </div>
        <div className='form-project-input-wrapper'>
          <input
            type='email'
            className='form-project-input'
            id='email'
            placeholder='Email'
            autoComplete='off'
          />
          <p class='form-project-error'>Error Message</p>
        </div>
        <div className='form-project-input-wrapper'>
          <input
            type='password'
            className='form-project-input'
            id='password'
            placeholder='Password'
            autoComplete='off'
          />
          <p class='form-project-error'>Error Message</p>
        </div>
        <div className='form-project-input-wrapper'>
          <input
            type='password'
            className='form-project-input'
            id='passwordConfirm'
            placeholder='Confirm Password'
            autoComplete='off'
          />
          <p class='form-project-error'>Error Message</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
