import { Box, Skeleton } from '@mui/material'

export const LoadingFollow = () => {
  return (
    <Box display='flex' alignItems='center' columnGap={2}>
      <Skeleton variant='circular' width={50} height={50} />
      <Box>
        <Skeleton variant='text' width={100} height={10} />
        <Skeleton variant='text' width={50} height={10} />
      </Box>
    </Box>
  )
}