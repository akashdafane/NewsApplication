// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Login from "./Components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import Logout from "./Components/Logout";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/Signup";
import NewsDetails from "./Components/NewsDetails";
import AddTodos from "./Components/AddTodos";
import ListTodos from "./Components/ListTodos";
import Forms from "./Components/Forms";
import ListFormData from "./Components/ListFormData";
import FetchUser from "./Components/FetchUser";
import FormikForm from "./Components/FormikForm";
import FetchData from "./Components/FetchData";
// import Routes from './Routers';
import Increment from "./Components/Increment";
import UserFilter from "./Components/UserFilter";
import Demo from "./Components/Demo";
import Posts from "./Components/Posts";
// import SectionA from './Components/SectionwiseAverage';
import SectionwiseAverage from "./Components/SectionwiseAverage";
import SectionB from "./Components/SectionB";
import LocalStorage from "./Components/LocalStorage";
import Dbounce from "./Components/Dbounce";
// import MemoCom from './Components/MemoCom';
import ParentComponent from "./Components/ParentComponent";
import FieldArr from "./Components/FieldArr";
import AverageofSectionB from "./Components/AverageofSectionB";
// import React, { Suspense, lazy } from 'react';
import FieldArrayList from "./Components/FieldArrayList";
import ReactChart from "./Components/ReactChart";
import Demo1 from "./Components/Charts/demo";
// import Loader from './Components/Loader';

// const Dashboard = lazy(() => import('./Components/Dashboard'));

function App(props) {
  console.log("props", props);
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/Dashboard" component={Dashboard} />
        <PublicRoute path="/AddTodos" component={AddTodos} exact />
        <Route path="/login" component={Login} {...props} />
        <Route path="/Logout" component={Logout} {...props} />
        <Route path="/Signup" component={SignUp} {...props} />
        <PublicRoute
          path="/NewsDetails"
          component={NewsDetails}
          {...props}
          exact
        />
        {/* <Route path="/AddTodos" component={AddTodos} {...props} /> */}
        <PublicRoute path="/ListTodos" component={ListTodos} {...props} exact />
        <PublicRoute path="/Forms" component={Forms} {...props} exact />
        <PublicRoute
          path="/ListFormData"
          component={ListFormData}
          {...props}
          exact
        />
        {/* <Route path="/Dashboard" component={Dashboard} {...props} /> */}
        <PublicRoute path="/Fetchuser" component={FetchUser} {...props} exact />
        <PublicRoute
          path="/Formikform"
          component={FormikForm}
          {...props}
          exact
        />
        <PublicRoute path="/FetchData" component={FetchData} {...props} exact />
        <PublicRoute path="/Increment" component={Increment} {...props} exact />
        <PublicRoute
          path="/UserFilter"
          component={UserFilter}
          {...props}
          exact
        />
        <PublicRoute path="/Posts" component={Posts} {...props} exact />
        <PublicRoute
          path="/SectionwiseAverage"
          component={SectionwiseAverage}
          {...props}
          exact
        />
        <PublicRoute path="/Demo" component={Demo} {...props} exact />
        <PublicRoute path="/SectionB" component={SectionB} {...props} exact />
        <PublicRoute
          path="/LocalStorage"
          component={LocalStorage}
          {...props}
          exact
        />
        <PublicRoute path="/Dbounce" component={Dbounce} {...props} exact />
        <PublicRoute
          path="/ParentComponent"
          component={ParentComponent}
          {...props}
          exact
        />
        <PublicRoute path="/FieldArr" component={FieldArr} {...props} exact />
        <PublicRoute
          path="/FieldArrayList"
          component={FieldArrayList}
          {...props}
          exact
        />
        <PublicRoute
          path="/AverageofSectionB"
          component={AverageofSectionB}
          {...props}
          exact
        />
        {/* <PublicRoute path="/Routes" component={Routes} /> */}
        <PublicRoute path="/ReactChart" component={ReactChart} exact />
        <PublicRoute path="/Demo1" component={Demo1} exact />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
