import React from 'react'

const NewPassword = () => {
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
                <label htmlFor='password'>
                  New Password <span>*</span>
                </label>
                <input
                  required
                  type='password'
                  name='password'
                  id
                  placeholder='Enter Verification Code'
                />
              </div>
              <div>
                <label htmlFor='Confirm Password'>
                  New Password <span>*</span>
                </label>
                <input
                  required
                  type='password'
                  name='Confirm Password'
                  id
                  placeholder='Enter Verification Code'
                />
              </div>
              <a href='./login.html'>
                <button className='cta' type='submit'>
                  Update
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

export default NewPassword
