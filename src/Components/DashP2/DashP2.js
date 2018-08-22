import React from 'react';
import {Grid,Paper } from '@material-ui/core';

const DashP2 = (props) =>{
    return (
        <div>
            <Grid container>
                <Grid item xs >
                    <Paper style={{"height":"350", "width":"300"}}>
                        Notes
                        Messages
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}

export default DashP2;