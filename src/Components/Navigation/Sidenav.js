import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import Loadable from 'react-loadable';

// import Dashboard from '../Dashboard/Dashboard';
const Loading = () => <div>Loading...</div>;

const Dashboard = Loadable({
  loader: () => import('../Dashboard/Dashboard'),
  loading: Loading,
});
const About = Loadable({
    loader: () => import('../About/About'),
    loading: Loading,
  });
// <Route path="/about" component={About}/>
// <Route path="/profile" component={Profile}/>

const SideNav = (props) => {
    // const Dahboard = {Dahboard};
    return (
        <Router>
        <div className="fn ">  
        <nav className="flex flex-column ba solid dib w-50 b--light-gray bg-light-buttonurbuttonle">
          <button className="pa2" ><Link to="/"> Dashboard</Link></button>
          <button className="pa2" ><Link to="/about"> About</Link></button>
          <button className="pa2" > <Link to="/profile"> Profile</Link></button>
          <button className="pa2" > <Link to="/messages"> Messages</Link></button>
          <button className="pa2" > <Link to="/search"> search</Link></button>

        </nav>
        <div className="tc bg-light-blue w-50 dib" >
            <Route exact path="/" component={Dashboard}/>
            <Route path="/about" component={About}/>
        </div>
      
        </div>
        </Router>
    );
}

export default SideNav;