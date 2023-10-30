import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, instanceSecond } from "../Api/ApiInterceptor";
import { API_ENDPOINTS } from "../../constants/ApiEndpoints";
import { IUsers } from "../../interfaces/Users/IUsers";
import { INumber, IString } from "../../interfaces/Global";
import toast from "react-hot-toast";
import { IUserProfile } from "../../interfaces/Users/IUserProfile";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await instance.get(API_ENDPOINTS.USERS);
  return response.data;
});

export const deleteUser = createAsyncThunk(
  "deleteCategory",
  async (id: IString) => {
    const response = await instance.delete(`${API_ENDPOINTS.USERS}`, {
      data: {
        id,
      },
    });
    return response.data;
  }
);

export const getUser = createAsyncThunk("getUserById", async (id: string) => {
  const response = await instance.get(`/auth/get-user-by-id/${id}`);
  return response.data;
});

interface IInitialState {
  users: IUsers[];
  loading: boolean;
  error: boolean;
  deleteUserModal: {
    isLoading: boolean;
    isOpen: boolean;
  };
  userData: {
    data: IUserProfile;
    isLoading: boolean;
  };
  activeUserId: IString;
}

const initialState: IInitialState = {
  users: [],
  loading: false,
  error: false,
  deleteUserModal: {
    isLoading: false,
    isOpen: false,
  },
  userData: {
    data: {} as IUserProfile,
    isLoading: false,
  },
  activeUserId: "",
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    onOpenDeleteUserModal(state) {
      state.deleteUserModal.isOpen = true;
    },
    onCloseDeleteUserModal(state) {
      state.deleteUserModal.isOpen = false;
    },
    changeActiveUserId(state, action: PayloadAction<string>) {
      state.activeUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUsers[]>) => {
          state.loading = false;
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state) => {
        // toast.success("Пользователь успешно удален");
        state.deleteUserModal.isOpen = false;
      })
      .addCase(getUser.pending, (state) => {
        state.userData.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<IUserProfile>) => {
        state.userData.isLoading = false
        state.userData.data = action.payload
      })
  },
});

export const {
  onOpenDeleteUserModal,
  onCloseDeleteUserModal,
  changeActiveUserId,
} = usersSlice.actions;
export default usersSlice.reducer;
