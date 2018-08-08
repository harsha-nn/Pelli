import React, { Component } from 'react';
import './App.css';
// import ButtonAppBar from '../src/Components/Navigation/ButtonAppBar';
// import Navigation from '../src/Components/Navigation/Navigation';
// import SideNav from '../src/Components/Navigation/Sidenav';
// import Loadable from 'react-loadable';
import Menu from './Components/Menu/Menu';
// import BasicExample from './Components/BasicExample';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  // constructor (){
  //   super();
  //   this.state = {
  //     showMenu: true
  //   }
  // }
 

  render() {
    return (
      <div className="App">
        <Menu />
        <h1> This is home page</h1>
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