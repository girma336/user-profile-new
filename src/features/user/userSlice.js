import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';


const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    user: []
}

export const getUser = createAsyncThunk('user/get', async() => {
    try {
        return await userService.getUser()
    } catch (error) {
        const message = 
        (error.response && 
            error.response.data && 
            error.response.data.message) ||
        error.message || 
        error.toString()

        throw new Error(message);        
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
        state.isLoading = false;
        state.isError = '';
        state.message = '';
        state.isSuccess= false;
    }},

    extraReducers: (builder) => {
        builder
          .addCase(getUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isSuccess = true
          })  
          .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess= false
            state.isError = true
            state.message = 'No data to show'
            state.user = null
          })
    }
})

export const {reset} = userSlice.actions;
export const userReducer = userSlice.reducer;