import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MoneyState {
  salary: number
}

const initialState: MoneyState = {
  salary: 0
}

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setSalary: (state, action: PayloadAction<number>) => {
      state.salary = action.payload
    }
  }
})

export const { setSalary } = moneySlice.actions

export default moneySlice.reducer
