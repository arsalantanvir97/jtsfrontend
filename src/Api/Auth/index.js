import axios from 'axios'
import api, { baseURL } from '../../utils/api'

export const signup = (data) =>
  axios({
    url: `${baseURL}/auth/userRegister`,
    method: 'POST',
    data,
  })

export const login = (data) =>
  axios({
    url: `${baseURL}/auth/userLogin`,
    method: 'POST',
    data,
  })
