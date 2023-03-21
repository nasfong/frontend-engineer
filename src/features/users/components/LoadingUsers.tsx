import { Box, Card, CardActions, CardContent, Skeleton } from '@mui/material'

export const LoadingUsers = () => {
  return (
    <Card sx={{ boxShadow: 1, width: 350, height: 160, margin: 2, borderRadius: 3 }} >
      <CardContent sx={{ display: 'flex', columnGap: 2 }}>
        <Skeleton variant='rounded' width={100} height={100} />
        <Skeleton variant='text' width={100} height={40} />
      </CardContent>
      <CardActions sx={{ backgroundColor: '#cecfd456', display: 'flex', justifyContent: 'end' }}>
        <Skeleton variant='text' width={100} height={10} />
      </CardActions>
    </Card>
  )
}
