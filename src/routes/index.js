import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';
import Signup from '../Components/Signup';
import Logout from '../Components/Logout';

const Routes = ({ token }) => {
    const location = useLocation;
    console.log("location", location)
    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // token = true
            setLoggedIn({ loggedIn: true })
        }
    }, [token])



    // const isAuthenticated = token;
    // console.log("isAuthenticated",isAuthenticated)
    // const isAdmin = profile && profile.is_admin;

    return (
        <>
            <Router>
                <>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Redirect to='/Login' />
                            )}
                        />
                        <Route
                            exact
                            path="/Login"
                            render={(props) =>
                                loggedIn ? (
                                    <Redirect to="/Dashboard" />
                                ) : (
                                    <Login {...props} />
                                )
                            }
                        />
                        {/* <Route
                            exact
                            path="/Dashboard"
                            render={(props) =>
                                isAuthenticated ? (
                                    <Redirect to="/Dashboard" />
                                ) : (
                                    <Login {...props} />
                                )
                                
                            }
                        /> */}
                        <Route
                            exact
                            path="/Signup"
                            render={(props) => <Signup {...props} />}
                        />
                         {/* <Route
                            exact
                            path="/Login"
                            render={(props) => <Login  {...props} />}
                        /> */}
                        <Route
                            exact
                            path="/Logout"
                            render={(props) => <Logout {...props} />}
                        />
                    </Switch>
                </>
            </Router>

        </>
    )
}

export default Routes;