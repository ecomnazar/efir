import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { instance, instanceSecond } from "../Api/ApiInterceptor";
import { API_ENDPOINTS } from "../../constants/ApiEndpoints";
import toast from "react-hot-toast";
import { IString } from "../../interfaces/Global";
import { IUserProfile } from "../../interfaces/Users/IUserProfile";

interface IAddAdmins {
  username: string;
  password: string;
  region: string;
  phone_number: string;
  gender: string;
}

export const fetchAdmins = createAsyncThunk("fetchAdmins", async () => {
  const response = await instance.get(API_ENDPOINTS.ADMINS);
  return response.data;
});

export const addAdmins = createAsyncThunk(
  "addAdmins",
  async ({ username, password, region, phone_number, gender }: IAddAdmins) => {
    const data = {
      username,
      password,
      region,
      phone_number,
      gender
    };
    const response = await instance.post(API_ENDPOINTS.ADMINS, data);
    return response.data;
  }
);

export const deleteAdmins = createAsyncThunk(
  "deleteAdmins",
  async (id: string) => {
    const response = await instance.delete(API_ENDPOINTS.ADMINS, {
      data: {
        id: id,
      },
    });
    return response.data
  }
);

export interface IAdminData {
  created_at: string;
  gender: "male" | "female";
  id: string;
  is_staff: boolean;
  is_superuser: boolean;
  phone_number: string;
  region: string;
  username: string;
}

interface IAdminSlice {
  allAdmins: {
    data: IAdminData[];
    isLoading: boolean;
    isError: boolean;
  };
  postAdminModal: {
    isLoading: boolean;
    openModal: boolean;
  };
  deleteConfirmationAdminModal: {
    isLoading: boolean;
    openModal: boolean;
  };
  activeAdminId: IString
}

const initialState: IAdminSlice = {
  allAdmins: {
    data: null!,
    isLoading: false,
    isError: false,
  },
  postAdminModal: {
    isLoading: false,
    openModal: false,
  },
  deleteConfirmationAdminModal: {
    isLoading: false,
    openModal: false,
  },
  activeAdminId: '',
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    openAddAdminModal(state) {
      state.postAdminModal.openModal = true;
    },
    closeAddAdminModal(state) {
      state.postAdminModal.openModal = false;
    },
    // -------------------------------------
    openDeleteConfirmationAdminModal(state) {
      state.deleteConfirmationAdminModal.openModal = true;
    },
    closeDeleteConfirmationAdminModal(state) {
      state.deleteConfirmationAdminModal.openModal = false;
    },
    changeActiveAdminId(state, action: PayloadAction<string>){
      state.activeAdminId = action.payload
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.allAdmins.isLoading = true;
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.allAdmins.isLoading = false;
        state.allAdmins.data = action.payload;
      })
      .addCase(fetchAdmins.rejected, (_, action) => {
        console.log("admins fetch error" + action.payload);
      })
      .addCase(addAdmins.pending, (state) => {
        state.postAdminModal.isLoading = true;
      })
      .addCase(addAdmins.fulfilled, (state) => {
        state.postAdminModal.isLoading = false;
        state.postAdminModal.openModal = false;
        toast.success("Админ успешно добавлен");
      })
      .addCase(addAdmins.rejected, (_, action) => {
        console.log("admins post error" + action.payload);
        toast.error("Админ не добавлен");
      })
      .addCase(deleteAdmins.pending, (state) => {
        state.deleteConfirmationAdminModal.isLoading = true;
      })
      .addCase(deleteAdmins.fulfilled, (state) => {
        state.deleteConfirmationAdminModal.isLoading = false;
        state.deleteConfirmationAdminModal.openModal = false;
        toast.success("Админ успешно удален");
      })
      .addCase(deleteAdmins.rejected, (_, action) => {
        console.log("admins post error" + action.payload);
      })
  },
});

export const { openAddAdminModal, closeAddAdminModal, openDeleteConfirmationAdminModal, closeDeleteConfirmationAdminModal, changeActiveAdminId } = adminSlice.actions;
export default adminSlice.reducer;
