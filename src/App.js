import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch ,Redirect} from "react-router-dom";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import SignIn from "./Component/sign-in/SignIn";
import Password from "./Component/Password";
import resetPassword from "./Component/resetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import mainPassword from "./Component/mainPassword";
import Dashboard from "./Component/MainPages/Dashboard";
import jobs from "./Component/MainPages/jobs";
import clients from "./Component/MainPages/clients";
import reports from "./Component/MainPages/reports";
import addStaff from "./Component/MainPages/addStaff";
import addToTeam from "./Component/MainPages/addToTeam";
import addToClient from "./Component/MainPages/addToClient";
import addToJobs from "./Component/MainPages/addToJobs";
import calenderPage from "./Component/calenderPage";
import MainProtectedRoute from "../src/router/MainProtectedRoute";
import { Link } from "react-router-dom";
import { Calendar } from "react-bootstrap-icons";
import Tutorial from "./Component/react-table/Tutorial";
import TutorialsList from "./Component/react-table/TutorialsList";
import AddTutorial from "./Component/react-table/AddTutorial";

// toast.configure()

export class App extends Component {
 
   
  render() {
   

    return (
      <Router>
        <Switch>
          {/* <button onClick={ notify }> Notify!</button> */}

          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem("token") != undefined ? (
                <Redirect to="/dashboard" />
              ) : (
                <SignIn />
              )
            }
          />
       <MainProtectedRoute isAuthenticated={localStorage.getItem("token")}  path='/dashboard' component={Dashboard} />
          
          <Route path="/Home" exact component={Home} />
          <Route path="/tutorials" exact component={TutorialsList} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Password" component={Password} />
          <Route path="/resetPassword" component={resetPassword} />
          <Route path="/mainPassword" component={mainPassword} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route path="/jobs" component={jobs} />
          <Route path="/clients" component={clients} />
          <Route path="/reports" component={reports} />
          <Route path="/addStaff" component={addStaff} />
          <Route path="/addToTeam" component={addToTeam} />
          <Route path="/addToClient" component={addToClient} />
          <Route path="/addToJobs" component={addToJobs} />
          <Route path="/calenderPage" component={calenderPage} />

          <div className="container-fluid hero">
            <div className="mainContainer m-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col textContainer">
                    <div className="textContainer_logo">
                      <img src="/images/Kassim logo-04.png" alt="" />
                    </div>
                    <div className="textContainer_text">
                      <h2 className="textContainer_text-head">
                        Kehinde Kassim & Co.
                      </h2>
                      <div className="textContainer_text-primary">
                        Welcome to our Cloud-base, software <br />
                        application that helps our accouting, <br />
                        bookkeeping, Payrolls & tax track recurring <br />
                        client work.
                      </div>

                      <h5 className="get_started">Get Started as who;</h5>
                      <Link to="/SignUp">
                        <button className="btn btn-lg textContainer_button mr-3">
                          <span className="textContainer_button-text">
                            {" "}
                            <strong>Admin</strong>
                          </span>
                        </button>
                      </Link>

                      <Link to="/SignUp">
                        <button className="btn btn-lg textContainer_button">
                          <span className="textContainer_button-text">
                            {" "}
                            <strong>Staff/User</strong>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col image-container">
                    <img src="/images/Group 771.png" width="100%" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
