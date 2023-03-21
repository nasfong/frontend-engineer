import { Alert, Box, Button, CardMedia, Link, Snackbar, Stack } from '@mui/material'
import { useState } from 'react'
import ErrorImage from '../assets/image/error.png'

export function Error({ msg }: { msg: string }) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(!open)
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <CardMedia
        component='img'
        image={ErrorImage}
        alt='Live from space album cover'
        sx={{ maxWidth: 500, maxHeight: 500 }}
      />
      <Box fontSize={30} color='gray'>Something Went Wrong!</Box>
      <Link href='/'>
        <Button variant='contained' sx={{ paddingX: 5 }}>
          Home
        </Button>
      </Link>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <Snackbar open={!open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            {msg}
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  )
}
