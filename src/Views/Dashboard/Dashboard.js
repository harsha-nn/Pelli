import React from 'react';
// import Menu from '../Menu/Menu';
import DashP1 from '../../Components/DashP1/DashP1';
import DashP2 from '../../Components/DashP2/DashP2';
import {Grid, Paper } from '@material-ui/core';
import SmallCardList from '../../Components/SmallCardList/SmallCardList';
import {members} from "../../members";

const Dashboard = () => {
    return (
        <div>
        <Grid container xs spacing = {16} >
            <Grid item xs  >
                <Paper className="grow shadow-5" style={{"height":"200px"}} >
                    <DashP1 />
                 </Paper>
            </Grid>
            <Grid item xs >
                <Paper className="grow shadow-5" style={{"height":"200px"}} >
                    <DashP2 />
                 </Paper>
            </Grid>
            <Grid item xs  >
                <Paper className="grow shadow-5" style={{"height":"200px"}} >
                    25 of 30 contacts seen
                 </Paper>
            </Grid>
            <Grid item xs  >
                <Paper className="grow shadow-5" style={{"height":"200px"}} >
                   Next payment on 4th of September
                 </Paper>
            </Grid>
        </Grid>
            <SmallCardList members={members}/>
        </div>
    );
}

export default Dashboard;