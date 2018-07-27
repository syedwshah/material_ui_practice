import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const styles = {
    pane: {
        padding: 20
        // marginTop: 5,
        // marginBottom: 5,
        // margin: 3
    }
}

export default function Exercises (props) {
    return (
    <Grid container spacing={8}>
        <Grid item sm>
            <Paper style={styles.pane}>
                <Typography align="center">Left pane</Typography>
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.pane}>
                <Typography align="center">Right pane</Typography>
            </Paper>
        </Grid>
    </Grid>
    )
} 
