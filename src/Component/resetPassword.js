import React from 'react';
import {Link} from "react-router-dom";

function resetPassword() {
    return (
        <form action="">
        <div className="container-fluid resetPassword-container">
            <div className="row">
                <div className="col-sm-4 signIn_first">
                        <div className="signIn_first-content">
                            <div className="signIn_first-logo">
                                <img src="/images/Kassim logo-04.png" alt="" />
                            </div>
                                <div className="signIn_first_text">
                                    <h2 className="signIn_first_text-head">
                                    Kehinde Kassim & Co.
                                    </h2>

                                    <p className="signIn_first_text-primary">
                                    Welcome to our Cloud-base, software <br /> 
                                    application that helps our accouting, <br />
                                    bookkeeping, Payrolls & tax track recurring <br />
                                    client work.
                                    </p>

                                    <div className="signIn_first_buttons d-flex">
                                        <Link to='/SignUp'>
                                            <div className="signIn_first_buttons-links first-link pr-2" >
                                                <a className="sign-links sl">Sign Up</a>
                                            </div>

                                        </Link>
                                        <Link to='./SignUp'>
                                            <div className="signIn_first_buttons-links second-link">
                                                <a className="sign-links fl"> Sign In</a>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                </div>

                <div className="col-sm-8 main-sign_second">
                        <div className="main-sign_second-container">
                            <div className="image-container d-flex justify-content-center">
                                <img src="/images/Group 680.png" alt="" />
                            </div>
                                <h2 className="main-sign_second-head text-center pt-5">
                                   Reset Password
                                </h2>
                            <div className="main-sign_second-form">
                                    <div className="form-group">
                                        <label htmlFor="usr">Enter 6 digit Token sent to mail</label>
                                        <input type="text" className="form-control" id="usr" placeholder="Enter Token" required/>
                                    </div>
                            </div>
                            <div className="container-fluid others">
                                <div className="row">
                                    <div className="col-sm-6 first-half">
                                        <div className="form-check signIn_second_checkbox-1">
                                            <label htmlFor="checkbox" className="form-check-label">
                                                <input type="checkbox" className="form-check-input" /> Resend Link
                                            </label>
                                            <div>
                                                <Link to="./mainPassword">
                                                    Forgot Password
                                                </Link>
                                            </div>
                                          
                                        </div>
                                    </div>

                                    <div className="col-sm-6 second-half d-flex justify-content-end">
                                        <button className="btn btn-primary btn-sm signIn_second_button sign-button" type="submit">
                                        <span className="signIn_second_mainButton-text">Sign In</span> 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </form>
    )
}

export default resetPassword



