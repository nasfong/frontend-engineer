import { Button, Link } from '@mui/material'
import notfoundImage from '../assets/image/notfound.png'

const Notfound = () => {
  return (
    <section className='notfound'>
      <img src={notfoundImage} />
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