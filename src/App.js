import React, { Component } from 'react';
import './App.css';
// import ButtonAppBar from '../src/Components/Navigation/ButtonAppBar';
// import Navigation from '../src/Components/Navigation/Navigation';
// import SideNav from '../src/Components/Navigation/Sidenav';
// import Loadable from 'react-loadable';
// import Menu from './Components/Menu/Menu';
// import Main from './Views/Main/Main'
// import MenuBar from './Views/Menu/MenuBar';
import Navigation from "./Views/Navigation/Navigation";
import Dashboard from './Views/Dashboard/Dashboard';
// import BasicExample from './Components/BasicExample';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  constructor (){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: true,
    }
  }
 
  onRouteChange= (route) => {
    console.log(route);
    if( route ==='signout'){
      this.setState({isSignedIn: false}) //changing to true for testing. Change to false later
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn,route} = this.state;
    return (
      <div className="App">
        {/* <Main /> */}
        
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' 
          ?  <div>
              <Dashboard />
            </div>
          :(  route==='signin'
              ?<div> Please Sign In  Tid:  pwd: Login</div>
              :<div>Hello Please register</div>
            )
        }
        
      </div>
    );
  }
}

export default App;

/* 
  1. Create a top Nav bar -- Login/ Logout , Alerts, Messages
  2. Create a side Nav bar -- Dashboard, Search, Profile, Messages
  3. Dashboard - One graph, Recommended Matches
  4. Search - filter, search results - cards
  5. Login - create profile
  6. Profile -page
  7. View number
  8. Messages
  
*/