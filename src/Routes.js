import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import CompA from './Component/compA';
import CompB from './Component/compB';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import Index from './Component/Index';



const Routes = () => {
 return(
   <Router>
   <div>
  <Switch>
    <Route path="/compA" component={CompA}/>
    <Route path="/compB" component={CompB} />
    <Route path="/home" component={Home}/>
    <Route path="/index" component={Index}/>
    <Route path="/Dashboard" component={Dashboard} />
    <Redirect from = "/" to="/Dashboard"/>
  </Switch>
  </div>
  </Router>
 );

}


export default Routes