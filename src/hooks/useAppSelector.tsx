import { TypedUseSelectorHook, useSelector } from "react-redux"
import { store } from "../services/Store"

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector