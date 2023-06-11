import axios from '../config/axios'

const authApi = {
    register: data => axios.post('/users/register', data),
    login: data => axios.post('/users/login', data)
}

export default authApi; 