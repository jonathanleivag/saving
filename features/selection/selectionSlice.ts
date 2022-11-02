import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TIsOpen } from '../../components/views/home/grafico/PieChart'

export interface SelectionState {
  selection: ISelection
  grafico: IGrafico
}

interface IGrafico {
  percentage: number
  title: string
  isOpen: TIsOpen
}

interface ISelection {
  money: number
  title: string
}

const initialState: SelectionState = {
  selection: {
    money: 0,
    title: ''
  },
  grafico: {
    percentage: 0,
    title: '',
    isOpen: false
  }
}

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<ISelection>) => {
      state.selection.money = action.payload.money
      state.selection.title = action.payload.title
    },
    setGrafico: (state, action: PayloadAction<IGrafico>) => {
      state.grafico = action.payload
    }
  }
})

export const { setSection, setGrafico } = selectionSlice.actions

export default selectionSlice.reducer
