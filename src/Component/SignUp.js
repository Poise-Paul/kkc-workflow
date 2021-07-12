import React from 'react';
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <form action="">
        <div className="container-fluid signIn">
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
{/* 
                                <div className="signIn_first_buttons d-flex">
                                    <Link to='/signIn'>
                                        <div className="signIn_first_buttons-links first-link pr-2" >
                                            <a className="sign-links fl">Sign Up</a>
                                        </div>
                                    </Link>
                                    <Link to='./signIn'>
                                        <div className="signIn_first_buttons-links second-link">
                                            <a className="sign-links sl"> Sign In</a>
                                        </div>
                                    </Link>
                                </div> */}

                                    <div className="signIn_first_buttons d-flex">
                                        <Link to='/signIn'>
                                            <button className="btn btn-outline-primary" style={{marginRight:"0.5em"}}>
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

                <div className="col-sm-8 signIn_second">
                <div className="signIn_second_content">
                    <h2 className="signIn_second_content-text-head">
                                    Create Admin Account
                    </h2>
                    <div className="signIn_second_info">
                        <div className="container-fluid">
                            <div className="row signIn_second_input-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">First Name</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Last Name</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Phone Number</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Email</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Password</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Confirm Password</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="signIn_second_checkbox">
                                <div className="form-check signIn_second_checkbox-1">
                                    <label htmlFor="checkbox" className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Yes, I want to receive a welcome email
                                    </label>
                                </div>

                                <div className="form-check signIn_second_checkbox-1">
                                    <label htmlFor="checkbox" className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> I agree to all the Term, Privacy Policy and Fees
                                    </label>
                                </div>
                                
                            </div>
                            
                            <div className="signIn_second_mainButton">
                                <button className="btn btn-primary btn-sm signIn_second_button" type="submit">
                                    <span className="signIn_second_mainButton-text"> Create Account</span> 
                                </button>

                                <div className="signIn_second_other-buttons-1">
                                    <p>Already have  an Account? <Link to="./SignIn">
                                   Sign In
                                    </Link> </p>
                                </div>

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

export default SignUp
