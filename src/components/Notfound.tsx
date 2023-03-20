import { Button, CardMedia, Link } from '@mui/material'
import notfoundImage from '../assets/image/notfound.png'

const Notfound = () => {
  return (
    <section className='notfound'>
      <CardMedia
        component='img'
        image={notfoundImage}
        alt='Live from space album cover'
      />
      <p>Page Not Found</p>
      <Link href='/'>
        <Button variant='contained' sx={{ paddingX: 5 }}>
          Home
        </Button>
      </Link>
    </section>
  )
}

export default Notfound