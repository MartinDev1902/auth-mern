import axios from '../config/axios'

const authApi = {
    register: data => axios.post('/auth/register', data),
    login: data => axios.post('/auth/login', data),
    logout: () => axios.get('/auth/logout'),
    refresh: () => axios.post('/auth/refresh'),
}

export default authApi; 