import ScrollToTop from 'react-scroll-up'
import { KeyboardDoubleArrowUp as KeyboardDoubleArrowUpIcon } from '@mui/icons-material'
import { Button } from '@mui/material'

export function ScrollTop({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop showUnder={100} duration={1000}>
        <Button variant='contained'>
          <KeyboardDoubleArrowUpIcon />
        </Button>
      </ScrollToTop>
    </>
  )
}