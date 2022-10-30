import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MoneyState {
  salary: number
  bills: number
  leisure: number
  saving: number
}

export interface ISetMonyPercentage {
  percentageBills: number
  percentageLeisure: number
  percentageSaving: number
}

const initialState: MoneyState = {
  salary: 0,
  bills: 0,
  leisure: 0,
  saving: 0
}

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setSalary: (state, action: PayloadAction<number>) => {
      state.salary = action.payload
    },
    setMonyPercentage: (state, action: PayloadAction<ISetMonyPercentage>) => {
      const {
        percentageBills,
        percentageLeisure,
        percentageSaving
      } = action.payload
      state.bills = (state.salary * percentageBills) / 100
      state.leisure = (state.salary * percentageLeisure) / 100
      state.saving = (state.salary * percentageSaving) / 100
    }
  }
})

export const { setSalary, setMonyPercentage } = moneySlice.actions

export default moneySlice.reducer
