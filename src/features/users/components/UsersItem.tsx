import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material'
import { PeopleAlt as PeopleAltIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { UserItemProps } from './users.type'


export const UsersItem = ({ user }: UserItemProps) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'start', padding: 1, columnGap: 2 }}>
          <Paper elevation={3}>
            <CardMedia
              component='img'
              sx={{ width: 100, height: 100, borderRadius: 3 }}
              image={user.avatar_url}
              alt='Live from space album cover'
            />
          </Paper>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
            <Typography component='div' variant='h5'>
              {user.login}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ backgroundColor: '#cecfd456', display: 'flex', justifyContent: 'end' }}>
          <Link to={`/${user.login}`} style={{ textDecoration: 'none' }}>
            <Button size='small' variant='contained' startIcon={<PeopleAltIcon />}>
              View Profile
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
