import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/Routes'
import Loading from './components/Loading'
import { MainLayout } from './layout/MainLayout'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
