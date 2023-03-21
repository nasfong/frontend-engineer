import { Box, Button, CardMedia, Link } from '@mui/material'
import notfoundImage from '../assets/image/notfound.png'

function Notfound() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <CardMedia
        component='img'
        image={notfoundImage}
        alt='Live from space album cover'
      />
      <Box fontSize={30} color='gray'>Page Not Found</Box>
      <Link href='/'>
        <Button variant='contained' sx={{ paddingX: 5 }}>
          Home
        </Button>
      </Link>
    </Box>
  )
}

export default Notfound