import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";
import useForm from "../../hooks/useForm";
import validate from "../../utils/validate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../sign-in/sign-in.styles.scss";

const eye = <FontAwesomeIcon icon= {faEye} />;
const initialState = {
  email: {
    value: "",
    required: true,
    requiredMessage: "Email address is required!",
    email: true,
    emailMessage: "Email address is not valid!",
  },
  password: {
    value: "",
    required: true,
    minLength: 6,
    minLengthMessage: "Password must be at least 6 characters long!",
    maxLength: 16,
    maxLengthMessage: "Too many characters!",
  },
};
export const SignIn = ({buttonloader,LoginUser}) => {
  const { formData, errors, changeHandler, setErrors } = useForm(
    initialState,
    validate
  );

  const submitHandler = (e) => {
    e.preventDefault();
    let formErrors = validate(formData, true);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const data = new FormData();
      data.append("email", formData.email.value);
      data.append("password", formData.password.value);
      console.log("form can be submitted now...");
      var record={email:formData.email.value,password:formData.password.value}
      console.log(record)
      LoginUser(record)
      for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  };

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
              <ToastContainer />


              {/* <div className="signIn_first_buttons d-flex">
                <Link to="/SignUp">
                  <div className="signIn_first_buttons-links first-link pr-2">
                    <a className="sign-links sl">Sign Up</a>
                  </div>
                </Link>
                <Link to="./SignIn">
                  <div className="signIn_first_buttons-links second-link">
                    <a className="sign-links fl"> Sign In</a>
                  </div>
                </Link>
              </div> */}

              <div className="sign_buttons">
              <Link to="/SignUp">
                <button className="btn btn-outline-primary" style={{marginRight:"0.5em"}}>
                  Sign In
                </button>
                </Link>
                <Link to="/SignUp">
                <button className="btn btn-outline-primary">
                  Sign Up
                </button>
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="col-sm-8 main-sign_second">
          <form onSubmit={submitHandler}>
            <div className="main-sign_second-container">
              <div className="image-container d-flex justify-content-center">
                <img src="/images/Group 129.png" alt="" />
              </div>
              <h2 className="main-sign_second-head text-center pt-5">
                Sign In
              </h2>

              <div className="main-sign_second-form">
                <Input
                  label="Email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={formData.email.value}
                  onChange={changeHandler}
                  error={errors.email}
                />
                <div className="password_button">

                <Input
                  type="password"
                  label="Password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password.value}
                  onChange={changeHandler}
                  error={errors.password}
                />
                <i>{eye}</i>
                </div>
           
              </div>
              <div className="container-fluid bottom-section">
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
                      type="submit"
                    >
                      <i className={buttonloader === true ? "fa fa-spinner fa-spin" : ''}></i>
                      <span className="signIn_second_mainButton-text">
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
  );
};




function mapStateToProps(state) {
  console.log(state)
    return {
        loading: state.userReducer.loader,
        user: state.userReducer.user,
        triggerLogging: state.userReducer.triggerLogging,
        buttonloader: state.utilityReducer.buttonloader
    };
}
const mapDispatchToProps = (dispatch) => ({

    LoginUser(payload) {
        dispatch({ type: "LOGIN_USER", payload });
    },
    SetError() {
        dispatch({ type: "API_ERRORED" });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
