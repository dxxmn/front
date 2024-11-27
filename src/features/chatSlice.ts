import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
  },
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload
    },
    clearChatId: (state) => {
      state.chatId = null
    },
  },
})

export const { setChatId, clearChatId } = chatSlice.actions
export default chatSlice.reducer