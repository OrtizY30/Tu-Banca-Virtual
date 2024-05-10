import { FmdGoodOutlined, LocalPhoneOutlined, LocalPhoneRounded, Smartphone } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <Stack direction={'row'} gap={5} alignItems={'center'}>

      <Stack alignItems={'center'} gap={1} >
        <Smartphone  sx={{color: '#6A80F7', fontSize: '35px'}}/>
        <Typography variant='h6' color={'#6A80F7'}> Contáctanos</Typography>
      </Stack>

      <Stack alignItems={'center'} gap={1}>
        <FmdGoodOutlined sx={{color: '#6A80F7', fontSize: '35px'}}/>
        <Typography variant='h6' color={'#6A80F7'}> Oficinas</Typography>
      </Stack>

      <Button color='inherit' variant='outlined' sx={{color: '#6A80F7', borderRadius: 4, height: 50}}>Registrarse</Button>
      
    </Stack>
  )
}

export default Nav