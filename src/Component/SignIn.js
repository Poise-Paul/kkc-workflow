import React, { Component } from "react";
import DataSignIn from "./MainPages/DATA/DataSignIn";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  login = (e) => {
    e.preventDefault()
    const email = document.querySelector('.Email')
    const password = document.querySelector('.Password')

    if (password.value === DataSignIn.password & email.value === DataSignIn.Email){
      window.location.href = 'http://localhost:3000/dashboard'
    }else{
      alert("sorry you enterd wrong details")
      email.value = ""
      password.value = ""
    }
  };
  render() {
    return (
      <div className="container-fluid main-sign">
        <div className="row">
          <div className="col-sm-4 signIn_first">
            <div className="signIn_first-content">
              <div className="signIn_first-logo">
                <img src="/images/Kassim logo-04.png" alt="" />
              </div>
              <div className="signIn_first_text">
                <h2 className="signIn_first_text-head">Kehinde Kassim & Co.</h2>

                <p className="signIn_first_text-primary">
                  Welcome to our Cloud-base, software <br />
                  application that helps our accouting, <br />
                  bookkeeping, Payrolls & tax track recurring <br />
                  client work.
                </p>
                <div className="signIn_first_buttons d-flex">
                                        <Link to='/signIn'>
                                            <button className="btn btn-outline-primary mr-2">
                                                Sign In
                                            </button>
                                        </Link>

                                        <Link to='/SignUp'>
                                            <button className="btn btn-outline-primary">
                                                Sign Up
                                            </button>
                                        </Link>

                                    </div>
              </div>
            </div>
          </div>

          <div className="col-sm-8 main-sign_second">
            <form onSubmit={(e) => {this.login(e)}}>
              <div className="main-sign_second-container">
                <div className="image-container d-flex justify-content-center">
                  <img src="/images/Group 129.png" alt="" />
                </div>
                <h2 className="main-sign_second-head text-center pt-5">
                  Sign In
                </h2>

                <div className="main-sign_second-form">
                  <div className="form-group">
                    <label htmlFor="usr">Email</label>
                    <input
                      type="email"
                      className="form-control Email"
                      id="usr"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="usr">Password</label>
                    <input
                      type="password"
                      className="form-control Password"
                      id="usr"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div className="container-fluid others">
                  <div className="row">
                    <div className="col-sm-6 first-half">
                      <div className="form-check signIn_second_checkbox-1">
                        <label htmlFor="checkbox" className="form-check-label">
                          <input type="checkbox" className="form-check-input" />{" "}
                          Remember Me
                        </label>
                        <div>
                          <Link to="./Password">Forgot Password</Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 second-half d-flex justify-content-end">
                      <button
                        className="btn btn-primary btn-sm signIn_second_button sign-button"
                        type="submit buttonload">
                         <i class="fa fa-circle-o-notch fa-spin"></i><span className="signIn_second_mainButton-text">
                          Sign In
                        </span>
                      </button>
                    </div>

                    <div className="container pt-5">
                      <p className="text-center">
                        Already have an Account?{" "}
                        <Link to="./SignUp">Sign In</Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default SignIn;
