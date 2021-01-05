// axios
import axios from 'axios'
import router from './main'
import storage from './storage.service'

const baseURL = process.env.VUE_APP_API_BASEURL

const headers = {
  'Content-Type': 'application/json'
}

const instance = axios.create({
  baseURL: baseURL,
  headers
})

instance.interceptors.request.use(function (config) {
  const auth = storage.get('auth')

  if (auth) {
    config.headers.Authorization = 'Bearer ' + auth.accessToken
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response
}, function async (error) {
  if (error.response.status === 401) {
    return router.push('/pages/login')
  }

  throw error
})

export default instance
