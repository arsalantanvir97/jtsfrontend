import axios from 'axios'

export let baseURL
export let imageURL

// if (window.location.hostname == 'localhost') {
//   baseURL = 'http://localhost:5000/api'
//   imageURL = 'http://localhost:5000/'
// } else {
  baseURL = 'https://dedicatedtestserver.com:8099/api'
  imageURL = 'https://dedicatedtestserver.com:8099/'
// }

let api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})
api.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('token', token)
  //   console.log(`'tokentokentoken'.`, token?.token);
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  console.log('config', config)
  return config
})

export default api
