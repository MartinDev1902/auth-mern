import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authApi from '../../api/auth'

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        test: (state, action) => {
            console.log(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            console.log(state, action)
        })

        builder.addCase(login.fulfilled, (state, action) => {
            console.log(state, action)
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

export const {test} = authSlice.actions
export default authSlice.reducer