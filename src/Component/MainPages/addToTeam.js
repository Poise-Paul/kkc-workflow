import React from 'react'
import { Speedometer } from 'react-bootstrap-icons';
import { BriefcaseFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { GraphUp } from 'react-bootstrap-icons';
import {  PeopleFill } from 'react-bootstrap-icons';
import { GearWideConnected } from 'react-bootstrap-icons';
import { CalendarCheckFill } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

function addToTeam() {
    return (
        <div className="main-container container-fluid">
        <div className="row">
            <div className="icons-container col-sm-1">
                    <Link to='./Dashboard'>
                        <div className="icons-container_icon-1 d-flex justify-content-center mb-5"> <Speedometer color="#cdcdcd" size={50} /> </div>    
                    </Link>
                
                    <Link to='./jobs'>
                        <div className="icons-container_icon-2 d-flex justify-content-center mb-5"> <BriefcaseFill color="#CDCDCD" size={50} /> </div>     
                    </Link>

                    <Link to="./calenderPage">
                        <div className="icons-container_icon-1  d-flex justify-content-center mb-5">
                            {" "}
                    <CalendarCheckFill color="#cdcdcd" size={50} />{" "}
                         </div>
                        </Link>
                    <Link to='./clients'>
                        <div className="icons-container_icon-3 d-flex justify-content-center mb-5"> <PersonFill color="#CDCDCD" size={50} /> </div>     
                    </Link>
                    <Link to='./reports'>
                        <div className="icons-container_icon-4 d-flex  justify-content-center mb-5"> <GraphUp color="#cdcdcd" size={50} /> </div>     
                    </Link>
                
                <div className="icons-container_icon-5 d-flex clients_icon justify-content-center mb-5"> <PeopleFill color="#333283" size={50} /> </div>
            </div>
            <div className="col-sm-11  dashboard_container_main p-0">
                <div className="content-container pl-0 ml-0">
                    <div className="content-container_main ml-5 pl-2">
                        <div className="content-container_main_dashboard-head mb-3 report_holder">
                                <h2 className="content-container_main_dashboard-head_text"> Teams </h2>
                        </div>
                        <div className="row staff_account_creation_container">
                            <div className="col-sm-5 staff_account_creation_container_addStaff_account">
                                <h2 className="content-container_main_dashboard-head_text"> Add Staff Account </h2>
                                <div className="staff_account_creation_container_staff_disclaimer pt-5"> 
                                    <strong>
                                   <span className="text-secondary"> Creating this Account gives staff(s)/user(s) access <br />  to this web application
                                    by sending them an invitation <br /> to use anywhere and anytime. </span>
                                    <span className="text-primary">The user you are <br /> about to add will have 
                                    access to use <br />  this application. </span>
                                    </strong>
                                </div>
                            </div>
                            <div className="col-sm-7 ">
                                <div className="signIn_second_content createStaff_form ">
                    <h2 className="signIn_second_content-text-head">
                                    Create Staff Account
                    </h2>
                    <form action="">
                    <div className="signIn_second_info">
                        <div className="container-fluid">
                            <div className="row signIn_second_input-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">First Name</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="Input Staff First Name"/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Last Name</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="Input Staff Last Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Phone Number</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="+234"/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Email</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="Input Staff Email"/>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard_container_first_profile_content_dropdown pt-1 pb-4">
                                    <label htmlFor="" className="d-block">Assign Roles to staff</label>
                                      <select name="Assign Role to staff" id="">
                                        <option value="first">Junior Accountant</option>
                                        <option value="first">Senior Accountant</option>
                                        <option value="first">Secretary</option>
                                        <option value="first">Director</option>
                                        <option value="first">Admin</option>
                                      </select>
                                    </div>
                            <div className="signIn_second_checkbox">
                                <div className="form-check signIn_second_checkbox-1">
                                    <label htmlFor="checkbox" className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> The staff Account will get full Permission
                                    </label>
                                </div>
                                
                            </div>
                            
                            <div className="signIn_second_mainButton">
                                <button className="btn btn-primary btn-sm signIn_second_button" type="submit">
                                    <span className="signIn_second_mainButton-text"> Send Invite</span> 
                                </button>

                            </div>


                        </div>
                      

                    </div>
                    </form>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default addToTeam
