import type { Action, ThunkAction } from "@reduxjs/toolkit"
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {api} from "./services/api";
import auth from "../features/authSlice"
import chat from "../features/chatSlice"
import file from "../features/fileSlice"
import { listenerMiddleware } from "../features/middleware";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    chat,
    file
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
