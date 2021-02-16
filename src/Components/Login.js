import React, { Component } from 'react';
import './Login.css'
// import { Link } from "react-router-dom";
import NewsDetails from './NewsDetails';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { startlogin } from "../actions/personAction";
import { connect } from "react-redux";


class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",

        }
    }

    handleState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    login = (e) => {
        e.preventDefault();
        // console.log(this.props)
        this.setState({ email: "", password: "" });
        this.props.login(this.state);
        // console.log("object",this.props.login)
        

        if (this.state.email == "admin" && this.state.password == "admin1") {
            localStorage.setItem('newsdata', JSON.stringify(this.state.email));
            toast.success("success");
            setTimeout(() => {
                this.props.history.push("/NewsDetails")
            }, 2000);


        }
        else {
            toast.error("Please Try Again");
        }


    }

    render() {
        return (

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
                                value={this.state.email}
                                onChange={this.handleState} />
                            </div><br></br>

                            {/* <!--password--> */}
                            <label id="align">Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-key"></i>
                                    </div>
                                </div>

                                <input 
                                type="password" 
                                placeholder="Enter Password" 
                                className="form-control" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleState} />


                            </div>
                            <br />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="chk1" />
                                <label className="custom-control-label" for="chk1">Remember Me</label>
                            </div>

                            <button type="button" className="btn btn-primary btn-block btn-md" id="login" id="button" onClick={this.login} >Login</button>

                            <br />
                            <button type="button" className="btn btn-danger" >Cancel</button>
                            <span className="psw" id="forget">
                                "Forget" <a href="#">Password? </a>
                            </span>

                        </div>

                    </div>  <br />
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

        )
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.loggedIn,
      loginProcessing: state.loginProcessing
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: data => dispatch(startlogin(data))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  