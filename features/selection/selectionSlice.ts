import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TIsOpen } from '../../components/views/home/grafico/PieChart'

export interface SelectionState {
  selection: ISelection
  grafico: IGrafico
}

interface IGrafico {
  percentage: number
  title: string
  titleOriginal: 'bills' | 'leisure' | 'saving'
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
    titleOriginal: 'bills',
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
    },
    setIsOpen: (state, action: PayloadAction<TIsOpen>) => {
      state.grafico.isOpen = action.payload
    }
  }
})

export const { setSection, setGrafico, setIsOpen } = selectionSlice.actions

export default selectionSlice.reducer
