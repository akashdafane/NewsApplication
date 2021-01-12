// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import { Route, Switch, Redirect } from "react-router-dom";
import NewsDetails from './Components/NewsDetails'


function App(props) {
  console.log("props", props)
  return (
    <div classNameName="App">

      <Switch>
        <Route path="/login" component={Login} {...props} />
        <Route path="/NewsDetails" component={NewsDetails} {...props} />
        <Redirect from="/" to="/login" />

      </Switch>

    </div>
  );
}

export default App;
