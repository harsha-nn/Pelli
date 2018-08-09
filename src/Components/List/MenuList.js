import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
 
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard"
// import About from "@material-ui/icons/About";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function MenuList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          <Link to="/"> Dashboard</Link>
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <About />
          </ListItemIcon> */}
          <ListItemText primary="About" />
          <Link to="/about"> About</Link>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
        <ListItemIcon> <Person /> </ListItemIcon>
          <ListItemText primary="Profile" />
          <Link to="/profile"> Profile</Link>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Search" />
        </ListItem>
      </List>
    </div>
  );
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
