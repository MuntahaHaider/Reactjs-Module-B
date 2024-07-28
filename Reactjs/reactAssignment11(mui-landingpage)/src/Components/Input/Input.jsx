import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({label}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: {
          xs:'40ch',
          sm:'50ch',
          md:'50ch',
          lg:'50ch'
        } },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="standard-basic" label={label} variant="standard" />

    </Box>
  );
}
