import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import usersApi from "../../api/users"

const initialState = {
    fullName: '',
    email: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
            state.fullName = payload.fullName
            state.email = payload.email
        })
    }
    
})

export const getUser = createAsyncThunk('users/getUser', async (id) => {
    try{
        const response = await usersApi.getUser(id)
        return response.data
    }catch(error){
        console.log(error)
    }
})

export default usersSlice.reducer