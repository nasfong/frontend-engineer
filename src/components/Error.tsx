import { Alert, Button, Snackbar, Stack } from '@mui/material'
import { useState } from 'react'

export function Error({ msg }: { msg: string }) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(!open)
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={!open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
