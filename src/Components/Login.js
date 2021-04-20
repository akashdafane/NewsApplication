import React, { useEffect, useState } from 'react';
import './Login.css'
// import { Link } from "react-router-dom";
// import NewsDetails from './NewsDetails';
// import Dashboard from './Dashboard';
// import { ToastContainer, toast } from "react-toastify";
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
// import { startlogin } from "../actions/personAction";
import { connect } from "react-redux";
// import { loadData, login1 } from "../actions/actionType"
// import { bindActionCreators } from 'redux';
// import { loginInfo } from '../actions/loginAction';
import { Link, Redirect } from 'react-router-dom';
import Input from './Common/Input';
import Button from './Common/Button';
// import Dashboard from './Dashboard';
// import Loader from './Loader';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import Checkbox from './Common/Checkbox';
// import { CheckBox } from '@material-ui/icons';

const Login = () => {

    // const [email, setEmail] = useState({ email: '' })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState({ password: '' })
    const [loggedIn, setLoggedIn] = useState()
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {

        setEmail(
            localStorage.username
        )
    }, [])

    const onChangeCheckbox = event => {
        setIsChecked(event.target.checked)

    }

    // console.log("checkbox",isChecked)
    const login = () => {
        // e.preventDefault();
        // props.dispatch(loginInfo(
        //     email.email,
        //     password.password
        // ));
        // console.log("#####", props.loginData)
        // localStorage.getItem('email')
        // console.log("localstorage", localStorage.getItem('email'))
        if (isChecked == true) {
            localStorage.username = email
            localStorage.checkbox = isChecked
        } else {
            console.log("empty")
        }



        if (email !== "" && localStorage.getItem('email') == email) {

            localStorage.setItem('token', "kmdskmda")
            toast.success("success");
               
            setTimeout(() => {
                // setIsChecked(true)
            //     const mes =  <Loader
            //     type="Puff"
            //     color="#00BFFF"
            //     height={100}
            //     width={100}
            //     timeout={3000} //3 secs
            //   />

                setLoggedIn({ loggedIn: true})
                
            }, 2000);

        }
        else {
            toast.error("Please Try Again");
        }

    }


    return (
        <>
        
            {
                loggedIn
                &&  
            //     <Loader
            //     type="Puff"
            //     color="#00BFFF"
            //     height={100}
            //     width={100}
            //     timeout={3000} //3 secs
            //   />&&
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
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
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
                                <input type="checkbox" className="custom-control-input" id="chk1" name="lsRememberMe" checked={isChecked} onChange={onChangeCheckbox} />

                                <label className="custom-control-label" htmlFor="chk1">Remember Me</label>
                            </div>


                            <button type="button" className="btn btn-primary btn-block btn-md"  id="button" onClick={login} >Login</button>
                            <Link to="/Signup"> <Button type={"button"} className={"btn btn-success btn-block btn-md"} onClick={() => { }} id="Signup" label={"Signup"} /></Link>

                            <br />
                            <button type="button" className="btn btn-danger" >Cancel</button>
                            <span className="psw" id="forget">
                                Forget <a href="#">Password? </a>
                            </span>

                        </div>

                    </div>
                    <br />
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
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




