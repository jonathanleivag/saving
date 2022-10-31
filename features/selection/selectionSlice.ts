import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectionState {
  money: number
  title: string
}

const initialState: SelectionState = {
  money: 0,
  title: ''
}

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<SelectionState>) => {
      state.money = action.payload.money
      state.title = action.payload.title
    }
  }
})

export const { setSection } = selectionSlice.actions

export default selectionSlice.reducer
