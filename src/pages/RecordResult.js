import { Box, TextField } from '@mui/material'
import React from 'react'

const RecordResult = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <h1>
        Record Result
      </h1>
      <h3>Speak to text</h3>
      <Box style={{
        width: '50%',
        height: 200,
        border: '1px solid #000',
        padding: 12,
        borderRadius: 12
      }}>
        <div>Result...</div>
      </Box>
      <h3>Summary</h3>
      <Box style={{
        width: '50%',
        height: 200,
        border: '1px solid #000',
        padding: 12,
        borderRadius: 12
      }}>
        <div>Result...</div>
      </Box>
    </Box>
  )
}

export default RecordResult