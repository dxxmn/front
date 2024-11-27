import { createSlice } from "@reduxjs/toolkit"
import { allApi } from "../app/services/allApi"
import { RootState } from "../app/store"
import { User } from "../app/types"

interface InitialState {
  user: User | null
  isAuthenticated: boolean
  token?: string
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(allApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token
        state.isAuthenticated = true
      })
      .addMatcher(allApi.endpoints.current.matchFulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload
      })
    }
})

export const { logout, resetUser } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated

export const selectUser = (state: RootState) => state.auth.user