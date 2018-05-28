import axios from 'axios'
import { BASE_URL } from './config'
import querystring from 'querystring'

const ax = axios.create({
  baseURL: BASE_URL
})

ax.interceptors.request.use(function (config) {
  if (
    config.method == 'post' || 
    config.method == 'put' ||
    config.method == 'delete' ||
    config.method == 'patch'
  ) {
    config.data = querystring.stringify(config.data)
  }

  return config
}, error => {
  return Promise.reject(error)
})

ax.interceptors.response.use(function (response) {
  return response
}, error => {
  return Promise.reject(error)
})

export default ax