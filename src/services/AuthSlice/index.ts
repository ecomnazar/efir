import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../Api/ApiInterceptor'
import { API_ENDPOINTS } from '../../constants/ApiEndpoints'
import { saveAccessToken } from './AuthHelper'

export const fetchUser = createAsyncThunk('fetchUser', async ({ username, password }: { username: string, password: string }) => {
    const data = {
        username,
        password
    }
    const response = await instance.post(API_ENDPOINTS.LOGIN, data)
    return response.data
})

interface IAuthSlice {
    isLoading: boolean,
    isError: boolean
}

const initialState: IAuthSlice = {
    isLoading: false,
    isError: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false
                saveAccessToken(action.payload.token)
                window.location.replace("/");
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isError = true
            })
    }
})

export default authSlice.reducer