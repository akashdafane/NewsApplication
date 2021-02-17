// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import { Route, Switch, Redirect } from "react-router-dom";
import NewsDetails from './Components/NewsDetails'
import AddTodos from './Components/AddTodos'
import ListTodos from './Components/ListTodos';
import Forms from './Components/forms';
import ListFormData from './Components/ListFormData';


function App(props) {
  console.log("props", props)
  return (
    <div classNameName="App">

      {/* <Switch>
        <Route path="/login" component={Login} {...props} />
        <Route path="/NewsDetails" component={NewsDetails} {...props} />
        <Route path="/AddTodos" component={AddTodos} /> 
        <Route path="/ListTodos" component={ListTodos} />
        <Redirect from="/" to="/login" />

      </Switch> */}
      {/* <AddTodos />
      <ListTodos /> */}
      {/* <Forms /> */}
      <ListFormData />
    </div>
  );
}

export default App;
