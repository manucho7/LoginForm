import React from 'react';
import { Avatar, Grid, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '20px auto'}
    const avatarStyle = {backgroundColor: 'green'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Login;