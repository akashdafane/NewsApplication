// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import { Route, Switch, Redirect } from "react-router-dom";
import NewsDetails from './Components/NewsDetails'
import AddTodos from './Components/AddTodos'
import ListTodos from './Components/ListTodos';
import Forms from './Components/Forms';
import ListFormData from './Components/ListFormData';
import Dashboard from './Components/Dashboard';
import FetchUser from './Components/FetchUser';
import FormikForm from './Components/FormikForm';
import FetchData from './Components/FetchData';
import Routes from './Routers';
import Logout from './Components/Logout';
import Increment from './Components/Increment';
import UserFilter from './Components/UserFilter';
import Demo from './Components/Demo';
import Posts from './Components/Posts';
// import SectionA from './Components/SectionwiseAverage';
import SectionwiseAverage from './Components/SectionwiseAverage'
import SectionB from './Components/SectionB';
import LocalStorage from './Components/LocalStorage';
import Dbounce from './Components/Dbounce'
import MemoCom from './Components/MemoCom';
import ParentComponent from './Components/ParentComponent';
import  FieldArr  from './Components/FieldArr'
// import AverageofSectionB from './Components/AverageofSectionB';
// import React, { Suspense, lazy } from 'react';

// const Dashboard = lazy(() => import('./Components/Dashboard'));

function App(props) {
  
  console.log("props", props)
  return (
    <div className="App">

      <Switch>

        <Route path="/login" component={Login} {...props} />
        <Route path="/NewsDetails" component={NewsDetails} {...props} />
        <Route path="/AddTodos" component={AddTodos} {...props} />
        <Route path="/ListTodos" component={ListTodos} {...props} />
        <Route path="/Forms" component={Forms} {...props} />
        <Route path="/ListFormData" component={ListFormData} {...props} />
        <Route path="/Dashboard" component={Dashboard} {...props} />
        <Route path="/Fetchuser" component={FetchUser} {...props} />
        <Route path="/Formikform" component={FormikForm} {...props} />
        <Route path="/FetchData" component={FetchData} {...props} />
        <Route path="/Logout" component={Logout} {...props} />
        <Route path="/Increment" component={Increment}{...props} />
        <Route path="/UserFilter" component={UserFilter} {...props} />
        <Route path="/Posts" component={Posts} {...props} />
        <Route path="/SectionwiseAverage" component={SectionwiseAverage} {...props} />
        <Route path="/Demo" component={Demo} {...props}/>
        <Route path="/SectionB" component={SectionB} {...props} />
        <Route path="/LocalStorage" component={LocalStorage} {...props} />
        <Route path="/Dbounce" component={Dbounce} {...props} />
        <Route path="/ParentComponent" component={ParentComponent} {...props} />
        <Route path="/FieldArr" component={FieldArr} {...props}/>
        {/* <Route path="/AverageofSectionB" component={AverageofSectionB} {...props} /> */}
        {/* <Route path="/Routes" component={Routes} /> */}
        <Redirect from="/" to="/login" />

      </Switch>
      {/* <AddTodos /> */}
      {/* <ListTodos /> */}
      {/* <Forms />
      <ListFormData /> */}
      {/* <FetchUser /> */}
    </div>
  );
}

export default App;
