import { PaletteMode } from '@mui/material'
import { createContext, Dispatch, useContext, useReducer } from 'react'

interface State { mode: PaletteMode, menu: boolean }
type Action =
  | { type: 'mode', payload: PaletteMode }
  | { type: 'menu', payload: boolean }

const ModeState = (): { mode: PaletteMode, menu: boolean, dispatch: Dispatch<Action> } => {
  const [{ mode, menu }, dispatch] = useReducer((state: State, { type, payload }: Action) => {
    switch (type) {
      case 'mode':
        return { ...state, mode: payload, }
      case 'menu':
        return { ...state, menu: payload, }
      default:
        return state
    }
  }, { mode: 'light', menu: false })

  return { mode, menu, dispatch }
}

const DataContext = createContext<ReturnType<typeof ModeState>>({} as ReturnType<typeof ModeState>)

export const useToggleTheme = () => {
  return useContext(DataContext)
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={ModeState()}>
      {children}
    </DataContext.Provider>
  )
}

