import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsError: (state, action) => {
            state.isError = action.payload
        },
        setIsSuccess: (state, action) => {
            state.isSuccess = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => { }
})

export default authSlice.reducer