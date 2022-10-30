import { createSlice } from '@reduxjs/toolkit'

export interface PercentageState {
  bills: number
  leisure: number
  saving: number
}

const initialState: PercentageState = {
  bills: 50,
  leisure: 30,
  saving: 20
}

export const percentageSlice = createSlice({
  name: 'percentage',
  initialState,
  reducers: {}
})

export default percentageSlice.reducer
