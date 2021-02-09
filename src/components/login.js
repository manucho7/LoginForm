import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '20px auto'}
    const avatarStyle = {backgroundColor: '#e10707'}
    const buttonStyle = {margin: '8px 0'}
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter Username" fullWidth required />
                <TextField label="Password" placeholder="Enter Password" fullWidth required type="password"/>
                <FormControlLabel 
                    control={
                        <Checkbox
                            name="checkB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography> Don't have an account ?
                    <Link href="#"> Sign up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;