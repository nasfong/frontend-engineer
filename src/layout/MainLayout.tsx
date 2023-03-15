import { Container } from '@mui/material'
import { ScrollTop } from './components'
import { Footer } from './Footer'
import { Header } from './Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollTop>
      <Header />
      <Container sx={{ paddingY: 10 }}>
        {children}
      </Container>
      <Footer />
    </ScrollTop>
  )
}

