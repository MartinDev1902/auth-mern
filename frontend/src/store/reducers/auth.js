import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authApi from '../../api/auth'

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
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

        builder.addCase(refresh.fulfilled, (state, {payload, type}) => {  
            if(payload){
                state.token = payload.token
                localStorage.setItem('accessToken', payload.token)
                localStorage.setItem('expirationDate', payload.expirationDate) 
            }
              
        })

        builder.addCase(autoLogin.fulfilled, (state, {payload}) => {
            state.token = payload
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

export const refresh = createAsyncThunk('auth/refresh', async (_, {dispatch}) => {
    try{
        const responce = await authApi.refresh()
        return responce.data
    }catch(error){
        dispatch(logout())
    }
})

export const autoLogin = createAsyncThunk('auth/autoLogin', async(_, {dispatch}) => {
    try{
        const token = localStorage.getItem('accessToken')
        
        if(!token){
            dispatch(refresh())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
        
            if(expirationDate <= new Date()){
                dispatch(logout())
            }
            else{
                return token
            }
        }
    
    }catch(error){
        console.log(error)
    }
})

//export const {} = authSlice.actions
export default authSlice.reducer