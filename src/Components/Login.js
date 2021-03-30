import React, { useState } from 'react';
import './Login.css'
// import { Link } from "react-router-dom";
import NewsDetails from './NewsDetails';
// import Dashboard from './Dashboard';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { startlogin } from "../actions/personAction";
import { connect } from "react-redux";
import { login1 } from "../actions/actionType"
import { bindActionCreators } from 'redux';
import { loginInfo } from '../actions/loginAction';
import { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Input from './Common/Input';

const Login = (props) => {

    const [email, setEmail] = useState({ email: '' })
    const [password, setPassword] = useState({ password: '' })
    const [loggedIn, setLoggedIn] = useState()

    let login = (e) => {
        e.preventDefault();
        props.dispatch(loginInfo(
            email.email,
            password.password
        ));
        console.log("#####", props.loginData)
        // console.log("deng", props.loginData[0].email)

        if (email.email === "admin" && password.password === "admin1") {
            localStorage.setItem('token', "kmdskmda");
            // toast.success("success");
            setLoggedIn({ loggedIn: true })
            // setTimeout(() => {
            // props.history.push("/Dashboard")

            // <Redirect to="/Dashboard" />
            // <In />
            // }, 2000);
        }
        else {
            // toast.error("Please Try Again");
        }

    }


    return (
        <>
            {
                loggedIn
                &&
                // setTimeout(() => {
                //     toast.success("success");
                // }, 2000) 
                <Redirect to="/Dashboard" />

            }

            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center container">
                        <div className=" form-group">

                            {/* <!--Email--> */}
                            <label id="email">Email Address</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    id="email1"
                                    name="email"
                                    value={email.email}
                                    onChange={e => setEmail({ email: e.target.value })} />
                            </div><br></br>

                            {/* <!--password--> */}
                            <label id="align">Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-key"></i>
                                    </div>
                                </div>
                                <Input
                                    type={"password"}
                                    isPassword
                                    placeholder={"Enter Password"}
                                    className={"form-control"}
                                    //  name={"password"}  
                                    value={password.password}

                                    onChange={(val) => setPassword({ password: val })}
                                //  iconClass="fas fa-lock"
                                />
                                {/* <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                    name="password"
                                    value={password.password}
                                    onChange={e => setPassword({ password: e.target.value })} /> */}
                            </div>
                            <br />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="chk1" />
                                <label className="custom-control-label" for="chk1">Remember Me</label>
                            </div>

                            <button type="button" className="btn btn-primary btn-block btn-md" id="login" id="button" onClick={login} >Login</button>

                            <br />
                            <button type="button" className="btn btn-danger" >Cancel</button>
                            <span className="psw" id="forget">
                                "Forget" <a href="#">Password? </a>
                            </span>

                        </div>

                    </div>
                    <br />
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    )
}



// const mapDispatchToProps = dispatch =>
// bindActionCreators({
//     login1
// }, dispatch)

const mapStateToProps = (state) => ({
    loginData: state.loginReducer.loginData
});

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Login);




