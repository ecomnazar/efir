import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceSecond } from "../Api/ApiInterceptor";
import { API_ENDPOINTS } from "../../constants/ApiEndpoints";
import { INumber, IString } from "../../interfaces/Global";
import toast from "react-hot-toast";

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  const response = await instanceSecond.get(`${API_ENDPOINTS.CATEGORY}`);
  return response.data;
});

export const addCategory = createAsyncThunk(
  "addCategory",
  async (name: IString) => {
    const response = await instanceSecond.post(`${API_ENDPOINTS.CATEGORY}`, {
      name,
    });
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (id: INumber) => {
    console.log('id category');
    
    const response = await instanceSecond.delete(`${API_ENDPOINTS.CATEGORY}`, {
      data: {
        id,
      },
    });
    return response.data
  }
);

export interface ICategoryData {
  id: number;
  slug: string;
  name: string;
}

interface IInitialState {
  data: ICategoryData[];
  deleteCategoryModal: {
    isLoading: boolean;
    isOpen: boolean;
  };
  activeCategoryId: number;
}

const initialState: IInitialState = {
  data: [] as ICategoryData[],
  deleteCategoryModal: {
    isLoading: false,
    isOpen: false,
  },
  activeCategoryId: 0
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    onOpenDeleteCategoryModal(state){
        state.deleteCategoryModal.isOpen = true
    },
    onCloseDeleteCategoryModal(state){
        state.deleteCategoryModal.isOpen = false
    },
    changeActiveCategoryId(state, action: PayloadAction<number>){
        state.activeCategoryId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCategory.fulfilled,
        (state, action: PayloadAction<ICategoryData[]>) => {
          state.data = action.payload;
        }
      )
      .addCase(addCategory.fulfilled, () => {
        // toast.success("Категория успешно добавлен");
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        // toast.success("Категория успешно удален");
        state.deleteCategoryModal.isOpen = false
      })
  },
});


export const { onOpenDeleteCategoryModal, onCloseDeleteCategoryModal, changeActiveCategoryId } = categorySlice.actions
export default categorySlice.reducer;
