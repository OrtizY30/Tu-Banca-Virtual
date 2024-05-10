import { Box, Card, CardContent, Skeleton, Stack } from '@mui/material'
import React from 'react'

const SkeletonHome = () => {
  return (
    <Stack gap={2} sx={{ width: 500, height: 250 }}>
    <Box>
      <Skeleton variant="rectangular" height={180} />
    </Box>

    <Box>
      <Skeleton variant="rectangular" height={60} />
    </Box>
  </Stack>
  )
}

export default SkeletonHome