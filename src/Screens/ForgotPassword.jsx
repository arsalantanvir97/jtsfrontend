import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <section id='sign-up'>
        <div className='wrapper2'>
          <div className='signup'>
            <div className='logo'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </div>
            <h2>Forget Password</h2>
            <p>Enter your email address to recieve a verification code.</p>
            <form action='#' method='post'>
              <div>
                <label htmlFor='email'>
                  Email <span>*</span>
                </label>
                <input
                  required
                  type='email'
                  name='email'
                  id
                  placeholder='Enter Email Address'
                />
              </div>
              <a href='./verification.html'>
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

export default ForgotPassword
