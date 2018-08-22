import React from 'react';
import {Grid,Paper } from '@material-ui/core';

const DashP1 = (props) =>{
    return (
        <div>
            <Grid container>
                <Grid item xs >
                    <Paper style={{"height":"150", "width":"300"}}>
                        Graph
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}

export default DashP1;