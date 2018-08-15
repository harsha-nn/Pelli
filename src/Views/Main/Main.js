import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
    // Redirect
  } from 'react-router-dom';
  import Loadable from 'react-loadable';
  import ButtonAppBar from '../Navigation/ButtonAppBar';
//   import MenuList from '../List/MenuList';
// import { Switch } from '@material-ui/core';
//   import dashboardRoutes from '../../Routes/Dashboard';

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
  const Profile = Loadable({
    loader: () => import('../Profile/Profile'),
    loading: Loading,
  });
//   const switchRoutes = (
//     <Switch>
//       {dashboardRoutes.map((prop, key) => {
//         if (prop.redirect)
//           return <Redirect from={prop.path} to={prop.to} key={key} />;
//         return <Route path={prop.path} component={prop.component} key={key} />;
//       })}
//     </Switch>
//   );
const Main = () => {
    return (
        <div>
            <ButtonAppBar navbarName = {"Pelli Choopulu"} />
             <Router>
            <div>
                <nav className="flex flex-column w-200px fixed pa30 justify-between">
                <button className="pa2 grow" ><Link to="/"> Dashboard</Link></button>
                <button className="pa2 grow" ><Link to="/about"> About</Link></button>
                <button className="pa2" > <Link to="/profile"> Profile</Link></button>
                <button className="pa2" > <Link to="/messages"> Messages</Link></button>
                <button className="pa2" > <Link to="/search"> search</Link></button>

                </nav>
                {/* <MenuList /> */}
                <div className="content" >
                    {/* {switchRoutes} */}
                    <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile" component={Profile}/> 
                    </Switch>
                </div>
        
            </div>
        </Router>
        </div>
    );
}

export default Main;

/* <Route exact path="/" component={Dashboard}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile" component={Profile}/> */