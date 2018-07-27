import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default Header => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="Headline" color="inherit">
                Exercise Database
            </Typography>
        </Toolbar>
    </AppBar>
)