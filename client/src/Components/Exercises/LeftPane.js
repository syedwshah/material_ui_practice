import React from "react"
import { Paper, Typography} from '@material-ui/core';

export default function LeftPane (props) {
    return (
        <Paper style={props.styles}>
            <Typography variant="title" align="center">
                LeftPane
             </Typography>
        </Paper>
    )
}
