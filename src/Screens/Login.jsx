import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Toasty from '../utils/toast'
import { useMutation } from 'react-query'

import { useRecoilState } from 'recoil'
import { login } from '../Api/Auth/index'
import { userInfo } from '../Recoil'
import { toast } from 'react-toastify'
import SwalAlert from '../Components/SwalAlert'

const Login = ({ history }) => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const [userData, setuserData] = useRecoilState(userInfo)

  const { mutate, isLoading, status } = useMutation((data) => login(data), {
    retry: false,
    onSuccess: (res) => {
      console.log('ressssss', res)
      setuserData(res?.data)
      localStorage.setItem('token', JSON.stringify(res?.data.token))
      history.replace('/')
    },
    onError: (err) => SwalAlert('error', '', 'Invalid credentials'),
  })

  return (
    <div>
      <section id='sign-up'>
        <div className='wrapper2'>
          <div className='signup'>
            <div className='logo'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </div>
            <h2>Login To Your Account</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                mutate({ email, password })
              }}
            >
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
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
                  }}
                />
              </div>
              <div>
                <label htmlFor='password'>
                  Password <span>*</span>
                </label>
                <input
                  required
                  type='password'
                  name='password'
                  id
                  placeholder='Password'
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value)
                  }}
                />
              </div>
              <div>
                {/* <input required type='checkbox' name='accept' id='accept' /> */}

                <a className='forgot' href='./forgot-password.html'>
                  Forgot Password?
                </a>
              </div>
              <button className='cta' type='submit'>
                Sign In
              </button>
              <Link to='/Signup' className='terms'>
                Create an account? Sign Up
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
