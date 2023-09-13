import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Toasty from '../utils/toast'
import { useMutation } from 'react-query'

import { useRecoilState } from 'recoil'
import { signup } from '../Api/Auth/index'
import { userInfo } from '../Recoil'
import { toast } from 'react-toastify'
import SwalAlert from '../Components/SwalAlert'

const Signup = ({ history }) => {
  const [fullName, setfullName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [confirm_password, setconfirm_password] = useState()

  const [userData, setuserData] = useRecoilState(userInfo)

  const { mutate, isLoading, status } = useMutation((data) => signup(data), {
    retry: false,
    onSuccess: (res) => {
      console.log('ressssss', res)
      setuserData(res?.data)
      localStorage.setItem('token', JSON.stringify(res?.data.token))
      history.replace('/')
    },
    onError: (err) => SwalAlert('error', '', 'Something went wrong'),
  })

  return (
    <div>
      <section id='sign-up'>
        <div className='wrapper2'>
          <div className='signup'>
            <div className='logo'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </div>
            <h2>Sign Up</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                mutate({ email, password, fullName, confirm_password })
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
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
                  }}
                  id
                  placeholder='Enter Email Address'
                />
              </div>
              <div>
                <label htmlFor='username'>
                  Username <span>*</span>
                </label>
                <input
                  required
                  type='text'
                  name='isername'
                  value={fullName}
                  onChange={(e) => {
                    setfullName(e.target.value)
                  }}
                  id
                  placeholder='Enter Name'
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
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value)
                  }}
                  id
                  placeholder='Password'
                />
              </div>
              <div>
                <label htmlFor='confirm_password'>
                  Confirm password <span>*</span>
                </label>
                <input
                  required
                  type='password'
                  name='confirm_password'
                  value={confirm_password}
                  onChange={(e) => {
                    setconfirm_password(e.target.value)
                  }}
                  id
                  placeholder='Confirm Password'
                />
              </div>
              <div>
                {/* <input required type='checkbox' name='accept' id='accept' />
                <label htmlFor='accept' className='terms'>
                  Accept <a href='#'>Terms &amp; Conditions</a> <span>*</span>
                </label> */}
              </div>
              {/* <Link to='#'> */}
              <button className='cta' type='submit'>
                Sign Up
              </button>
              <Link to='/Login' className='terms'>
                Already have an account? Login
              </Link>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
