import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material'
import { PeopleAlt as PeopleAltIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { UsersProps } from './users.type'


export const UsersItem = ({ user }: { user: UsersProps }) => {
  return (
    <Card sx={{ boxShadow: 5, minWidth: 350, borderRadius: 3 }} >
      <CardContent sx={{ display: 'flex', justifyContent: 'start', padding: 1, columnGap: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 100, borderRadius: 3 }}
          image={user.avatar_url}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <Typography component="div" variant="h5">
            {user.login}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ backgroundColor: '#F3F3F3', display: 'flex', justifyContent: 'end' }}>
        <Link to={`/${user.login}`} style={{ textDecoration: 'none' }}>
          <Button size='small' variant='contained' startIcon={<PeopleAltIcon />}>
            View Profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
