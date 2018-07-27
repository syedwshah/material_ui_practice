import React from "react"
import { Paper, Typography} from '@material-ui/core';

export default function RightPane (props) {
    return (
        <Paper style={props.styles}>
            <Typography variant="title" align="center">
                RightPane
             </Typography>
        </Paper>
    )
}