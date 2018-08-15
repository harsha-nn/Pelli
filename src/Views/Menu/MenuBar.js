import React from 'react';
import { Paper, MenuList, MenuItem } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
    // Redirect
  } from 'react-router-dom';
  import Loadable from 'react-loadable';
  import ButtonAppBar from '../Navigation/ButtonAppBar';
  import "./Menu.css";

const Loading = () => <div>Loading...</div>;

const Dashboard = Loadable({
  loader: () => import('../Dashboard/Dashboard'),
  loading: Loading,
});
const About = Loadable({
    loader: () => import('../About/About'),
    loading: Loading,
  });
  const Profile = Loadable({
    loader: () => import('../Profile/Profile'),
    loading: Loading,
  });



class MenuBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu:false
        }
    }
    onMenuClick = ()=>{
        this.state.showMenu ? this.setState({showMenu:false}):this.setState({showMenu:true})
    }

    render(){
    return (
    <div>
         <ButtonAppBar navbarName = {"Pelli Choopulu"} onMenuClick={this.onMenuClick} />
         {
             this.state.showMenu ?
         
         <Router>
         <div>
           
            <Paper className="flex flex-column w-200px fixed pa30 justify-between">
                <MenuList>
                    <MenuItem><Link to="/"> Dashboard</Link></MenuItem>
                    <MenuItem><Link to="/about"> About</Link></MenuItem>
                    <MenuItem > <Link to="/profile"> Profile</Link></MenuItem>
                    <MenuItem > <Link to="/messages"> Messages</Link></MenuItem>
                    <MenuItem className="pa2" > <Link to="/search"> search</Link></MenuItem>
                </MenuList>
            </Paper>
           
            <div className="content" >
               
                <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/profile" component={Profile}/> 
                </Switch>
            </div>
    
         </div>
         </Router>
         : <div className="content">
             <Router>
              <Route exact path="/" component={Dashboard}/>
             </Router>
         </div>
         }
    </div>
    );
    }
}

export default MenuBar;