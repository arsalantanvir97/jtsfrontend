import React from 'react'

const Verification = () => {
  return (
    <div>
      <section id='sign-up'>
        <div className='wrapper2'>
          <div className='signup'>
            <div className='logo'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </div>
            <h2>Forget Password</h2>
            <p>Enter verification code to recover your password.</p>
            <form action='#' method='post'>
              <div>
                <label htmlFor='verification_code'>
                  Verification Code <span>*</span>
                </label>
                <input
                  required
                  type='text'
                  name='verification_code'
                  id
                  placeholder='Enter Verification Code'
                />
              </div>
              <a href='./forgot-password.html' className='text-right'>
                Resend Code
              </a>
              <a href='./new-password.html'>
                <button className='cta' type='submit'>
                  Continue
                </button>
              </a>
              <a href='./login.html'>Back To Login</a>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Verification
