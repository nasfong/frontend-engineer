import { Alert as Alerts, Snackbar, Stack } from '@mui/material'
import { useState } from 'react'

export function Alert({ msg }: { msg: string }) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(!open)
  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      <Snackbar open={!open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alerts onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {msg}
        </Alerts>
      </Snackbar>
    </Stack>
  )
}
