import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../Api/ApiInterceptor";
import { API_ENDPOINTS } from "../../constants/ApiEndpoints";

interface IGetMe {
  created_at: string;
  gender: "male" | "female";
  id: string;
  is_staff: boolean;
  is_superuser: boolean;
  phone_number: string;
  region: string;
  username: string;
}

interface IInitialState {
    data: IGetMe,
    isLoading: boolean
}

export const fetchMe = createAsyncThunk("fetchMe", async () => {
  const response = await instance.get(API_ENDPOINTS.ME);
  return response.data
});

const initialState: IInitialState = {
    data: {} as IGetMe,
    isLoading: false
};

const meSlice = createSlice({
  name: "meSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchMe.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchMe.fulfilled, (state, action: PayloadAction<IGetMe>) => {
            state.data = action.payload
        })
  }
});

export default meSlice.reducer;
