import axios from '../config/axios'

const usersApi = {
    getUser: id => axios.get('/users', {params: {id}})
}

export default usersApi