import { CardMedia, Link, Paper, Typography } from '@mui/material'
import { FollowProps } from '../components/profile.type'

type FollowItem = {
  follow: FollowProps
  pageRef?: (node: any) => void
}

export const FollowItem = ({ follow, pageRef }: FollowItem) => {
  return (
    <Link
      href={`/${follow.login}`}
      ref={pageRef}
      display='flex'
      justifyContent='start'
      alignItems='center'
      columnGap={2}
      sx={{ textDecoration: 'none' }}
    >
      <Paper elevation={3} sx={{ width: 50, height: 50, borderRadius: '50%' }}>
        <CardMedia
          component='img'
          sx={{ width: 50, height: 50, borderRadius: '50%' }}
          image={follow.avatar_url}
          alt='Logo'
        />
      </Paper>
      <Typography variant='subtitle1' color='text.secondary' component='div' display='flex' justifyContent='space-between'>
        {follow.login} - {follow.id}
      </Typography>
    </Link>
  )
}