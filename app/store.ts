import { configureStore } from '@reduxjs/toolkit'

import { moneyReducer, percentageReducer, selectionReducer } from '../features'

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    percentage: percentageReducer,
    selection: selectionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
