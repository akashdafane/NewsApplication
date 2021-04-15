// import React from 'react';
// import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
// import { shallowEqual, useSelector } from "react-redux";
// import Dashboard from './Components/Dashboard';


//  function Routes() {
//     // const { isAuthorized } = useSelector(
//     //     ({ auth }) => ({
//     //         isAuthorized: auth.user != null,
//     //     }),
//     //     shallowEqual
//     // );
        
//     return(
//         <BrowserRouter>
//         <Switch>
//         {true ? (
//                     /*Render auth page when user at `/auth` and not authorized.*/
//                     <Route>
//                       <Dashboard />
//                     </Route>
//                 ) : (
//                         /*Otherwise redirect to root page (`/`)*/
//                         <Redirect from="/Routes" to="/login" />
//                     )}


//         </Switch>
        
//         </BrowserRouter>
        
//     )
// }

// export default Routes