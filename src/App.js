import React, { createContext } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import CompA from "./Component/compA";
import CompB from "./Component/compB";
import GreetComponent from './Component/GreatComponent';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './Routes'
// import axios from 'axios';

// const FirstName = createContext();
// const LastName = createContext();

const App = () => {
  return(
  <div>
  <Routes />

  </div>
    
  )
}

export default App;
// export { FirstName, LastName };
