import axios from '../config/axios'

const authApi = {
    register: data => axios.post('/users/register', data),
    login: data => axios.post('/users/login', data),
    logout: () => axios.get('/users/logout'),
    refresh: () => axios.post('/users/refresh'),
    getUser: id => axios.get(`/users/`, {params:{
        id
    }})
}

export default authApi; 