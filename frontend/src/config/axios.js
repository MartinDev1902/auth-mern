import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.headers.contentType = 'application/json'
axios.defaults.headers.token = localStorage.getItem('accessToken')
axios.defaults.withCredentials = true

export default axios