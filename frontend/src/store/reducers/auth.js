import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authApi from '../../api/auth'

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        autoLogin: (state, action) => {
            const token = localStorage.getItem('accessToken')
        
            if(!token){
                state.token = null;
                localStorage.removeItem('accessToken')
                localStorage.removeItem('expirationDate')
            }else{
                const expirationDate = new Date(localStorage.getItem('expirationDate'))
            
                if(expirationDate <= new Date()){
                    state.token = null;
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('expirationDate')
                }
                else{
                    console.log('Logined')
                    state.token = token
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.token = payload.token
            localStorage.setItem('accessToken', payload.token)
            localStorage.setItem('expirationDate', payload.expirationDate)
        })

        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.token = payload.token
            localStorage.setItem('accessToken', payload.token)
            localStorage.setItem('expirationDate', payload.expirationDate)
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            state.token = null;
            localStorage.removeItem('accessToken')
            localStorage.removeItem('expirationDate')
        })

        builder.addCase(refresh.fulfilled, (state, {payload}) => {
            state.token = payload.token
            localStorage.setItem('accessToken', payload.token)
            localStorage.setItem('expirationDate', payload.expirationDate)
        })
    }
})

export const register = createAsyncThunk('auth/register', async (user) => {
    try{
        const response = await authApi.register(user)

        return response.data

    }catch(error){
        console.log(error)
    }
})

export const login = createAsyncThunk('auth/login', async (user) => {
    try{
        const response = await authApi.login(user)
        return response.data
    }catch(error){
        console.log(error)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    try{
        const response = await authApi.logout()
        return response.data
    }catch(error){
        console.log(error)
    }
})

export const refresh = createAsyncThunk('auth/refresh', async () => {
    try{
        const responce = await authApi.refresh()
        return responce.data
    }catch(error){
        console.log(error)
    }
})

export const {autoLogin} = authSlice.actions
export default authSlice.reducer