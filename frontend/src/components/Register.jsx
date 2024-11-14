import React from 'react';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <>
    <TextField id="outlined-basic" label="email" variant="outlined"  value={user.userName}/><br/><br/>
    <TextField id="outlined-basic" label="password" variant="outlined" value={user.userName} />
    </>
  )
}

export default Register