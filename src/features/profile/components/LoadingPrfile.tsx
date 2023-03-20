import { Box, Card, Skeleton } from '@mui/material'

export const LoadingPrfile = () => {
  return (
    <Box display='flex' flexDirection={{ xs: 'column-reverse', md: 'row' }} justifyContent='space-evenly' minHeight={500}>
      <Card sx={{ borderRadius: '16px', boxShadow: 5, padding: 5, minWidth: { xs: 300, md: 500 } }}>
        <Box lineHeight={0.3} marginBottom={5} display='flex' justifyContent='space-between'>
          <Box>
            <Skeleton variant="text" width={180} height={40} />
            <Skeleton variant="text" width={100} height={20} />
          </Box>
          <Skeleton variant="circular" width={100} height={100} sx={{ display: { xs: 'block', md: 'none' } }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
        </Box>
      </Card>
      <Skeleton variant="circular" width={200} height={200} sx={{ display: { xs: 'none', md: 'block' } }} />
    </Box>
  )
}
