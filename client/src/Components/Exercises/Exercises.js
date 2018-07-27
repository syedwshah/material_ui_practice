import React from 'react';
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import { Grid } from '@material-ui/core';

const styles = {
    pane: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        margin: 10
    }
}

export default Exercises => 
(
    <Grid container>
        <Grid item sm>
            <LeftPane styles={styles.pane}/>
        </Grid>
        <Grid item sm>
            <RightPane styles={styles.pane}/>
        </Grid>
    </Grid>
)
