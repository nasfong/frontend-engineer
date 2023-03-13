import { Card, CardContent } from '@mui/material'

export const LoadingUsers = () => {
  return (
    <Card sx={{ boxShadow: 1, width: 350, height: 160, margin: 2, borderRadius: 3 }} >
      <CardContent>
        <div className='skeleton skeleton-text' />
        <div className='skeleton skeleton-text' />
        <div className='skeleton skeleton-text' />
      </CardContent>
    </Card>
  )
}
