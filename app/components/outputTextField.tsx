'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function OutputTextField() {
  return (
    <Box
      component="form"
      sx={{
        width: '19ch',
        alignContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{}} id="outlined-basic" label="" variant="outlined" className="bg-black/40 rounded-full h-16 align-middle mt-6 -ml-11" />
    </Box>
  )
}
