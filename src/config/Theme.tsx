import { createContext, Dispatch, useContext, useReducer } from 'react'

interface State { mode: boolean }
type Action = { type: 'mode', payload: boolean }

const ModeState = (): { mode: boolean, dispatch: Dispatch<Action> } => {
  const [{ mode }, dispatch] = useReducer((state: State, { type, payload }: Action) => {
    switch (type) {
      case 'mode':
        return { ...state, mode: payload, }
      default:
        return state
    }
  }, { mode: false })

  return { mode, dispatch }
}

const DataContext = createContext<ReturnType<typeof ModeState>>({} as ReturnType<typeof ModeState>)

export const useMode = () => {
  return useContext(DataContext)
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={ModeState()}>
      {children}
    </DataContext.Provider>
  )
}

