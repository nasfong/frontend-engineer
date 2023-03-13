import { Box, Card } from '@mui/material'

export const LoadingPrfile = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Card sx={{ borderRadius: '16px', boxShadow: 5, padding: 5, minWidth: 500 }}>
        <Box sx={{ lineHeight: '0.3', marginBottom: 5 }}>
          <div className='skeleton skeleton-text' />
          <div className='skeleton skeleton-text' />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <div className='skeleton skeleton-text' />
          <div className='skeleton skeleton-text' />
          <div className='skeleton skeleton-text' />
          <div className='skeleton skeleton-text' />
        </Box>
      </Card>
      <div className='skeleton skeleton-text' style={{ height: 200, width: 200, borderRadius: '50%' }} />
    </Box>
  )
}
