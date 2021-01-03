import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    return (
        <div>
            <h1>Simply Login</h1>
            <div>
              <TextField id="outlined-basic" label="Email Address *" variant="outlined" /><br></br>
              <TextField id="outlined-basic" label="Password *" variant="outlined" style={{marginTop:"2%"}}/><br></br>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}> Remember Me </Checkbox><br></br>
              <Button variant="outlined" style={{marginTop:"2%", backgroundColor:"red"}}>Sign-In</Button><br></br>
              <div>
                <a href="">Forgot Password ?</a><br></br>
                <a href="">Sign-Up</a>

              </div>
              
            </div>
        </div>
    )
}

export default Login
