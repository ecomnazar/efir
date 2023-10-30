import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../AdminSlice";
import CategorySlice from "../CategorySlice";
import MeSlice from "../MeSlice";
import AuthSlice from "../AuthSlice";
import UsersSlice from "../UsersSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        admin: AdminSlice,
        me: MeSlice,
        category: CategorySlice,
        users: UsersSlice
    }
})