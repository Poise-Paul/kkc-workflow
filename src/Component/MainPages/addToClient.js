import React from 'react'
import { Speedometer } from 'react-bootstrap-icons';
import { BriefcaseFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { GraphUp } from 'react-bootstrap-icons';
import {  PeopleFill } from 'react-bootstrap-icons';
import { GearWideConnected } from 'react-bootstrap-icons';
import { CalendarCheckFill } from 'react-bootstrap-icons';
// import { Check2Square } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

function addToClient() {
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
                            <div className="icons-container_icon-3 d-flex client_icon justify-content-center mb-5"> <PersonFill color="#333283" size={50} /> </div>     
                        </Link>
                        <Link to='./reports'>
                            <div className="icons-container_icon-4 d-flex  justify-content-center mb-5"> <GraphUp color="#cdcdcd" size={50} /> </div>     
                        </Link>
                    
                        <Link to='./addStaff'>
                            <div className="icons-container_icon-5 d-flex justify-content-center mb-5"> <PeopleFill color="#cdcdcd" size={50} /> </div>    
                        </Link>
                    <div className="icons-container_icon-6 d-flex justify-content-center mb-5"> <GearWideConnected color="#CDCDCD" size={50} /> </div>
                </div>
                <div className="col-sm-11  dashboard_container_main p-0">
                    <div className="content-container pl-0 ml-0">
                        <div className="content-container_main ml-5 pl-2">
                            <div className="content-container_main_dashboard-head mb-3 report_holder">
                                    <h2 className="content-container_main_dashboard-head_text"> Create Client </h2>
                            </div>
                            
                                <div className="create_client_container">
                                <div className="signIn_second_info">
                        <div className="container-fluid">
                            <form action="">
                            <div className="row signIn_second_input-row pb-0 mb-0">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr"> Company Name</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Phone</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row pb-0 mb-0">
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
                            <div className="row signIn_second_input-row pb-0 mb-0">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Client Name</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Website</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="enter client url"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row pb-0 mb-0">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Street</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">City/Town</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="enter client url"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row signIn_second_input-row pb-0 mb-0">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">State Province</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="usr">Zip Code</label>
                                        <input type="text" className="form-control" id="usr" required placeholder="enter client url"/>
                                    </div>
                                </div>
                            </div>
                            <div className="add_client pb-3">
                                <Link to='./addToClient'>
                                    <button className="btn btn-success">Add Custom Data</button>   
                                </Link>
                            </div>
                                <div className="end_buttons">
                                    <div className="signIn_second_mainButton addToClient_create_button">
                                        <button className="btn btn-primary btn-sm signIn_second_button" type="submit">
                                            <span className="signIn_second_mainButton-text"> Create Account</span> 
                                        </button>
                                    </div>
                                    <div className="signIn_second_mainButton">
                                        <button className="btn btn-danger btn-sm" type="submit">
                                            <span className="signIn_second_mainButton-text"> Cancel</span> 
                                        </button>
                                    </div>
                                </div>
                            </form>
{/* Ends Here */}
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

export default addToClient
