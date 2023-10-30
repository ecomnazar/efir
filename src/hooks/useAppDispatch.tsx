import { useDispatch } from 'react-redux'
import { store } from "../services/Store";

export const useAppDispatch: () => typeof store.dispatch = useDispatch