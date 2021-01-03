import { TextField } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const Signup = () => {
    return (
        <div>
            <h3>Sign-Up</h3>
            <TextField id="outlined-basic" label="First Name *" variant="outlined" style={{margin:"2px"}} /><br></br>
            <TextField id="outlined-basic" label="Last Name *" variant="outlined" style={{margin:"2px"}}/><br></br>
            <TextField id="outlined-basic" label="Email Address *" variant="outlined" style={{margin:"2px"}} /><br></br>
            <TextField id="outlined-basic" label="Password *" variant="outlined" style={{margin:"2px"}} /><br></br>
            <a href="" style={{margin:"2px"}}>Already Have an account? Login </a><br></br>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}> I want to recieve </Checkbox><br></br>
            <Button variant="outlined" style={{marginTop:"2%", backgroundColor:"blue"}}>Sign-Up</Button><br></br>
        </div>
    )
}

export default Signup
