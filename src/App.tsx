import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { Suspense } from 'react'
import Loading from './components/Loading'
import { DataProvider } from './hooks/useToggleTheme'

const App: React.FC<{ basename: string }> = ({ basename }) => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter basename={basename}>
        <DataProvider>
          <Routes />
        </DataProvider>
      </BrowserRouter >
    </Suspense>
  )
}

export default App
