import React, { createContext } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import CompA from "./Component/compA";
// import CompB from "./Component/compB";
import GreetComponent from './Component/GreatComponent';
// import axios from 'axios';

// const FirstName = createContext();
// const LastName = createContext();

const App = () => {
  return(
    <>
{/* <FirstName.Provider  value={"Botree"}>
  <LastName.Provider value={"Tantra"}>
    <CompA />
    <CompB />
  </LastName.Provider>
</FirstName.Provider>

<GreetComponent name="abc">
    <p>Children props</p>
</GreetComponent> */}
<CompA />
</>
    
  )
}

export default App;
// export { FirstName, LastName };
