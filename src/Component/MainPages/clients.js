
// export default clients

import React, { Component } from 'react'
import { Speedometer } from 'react-bootstrap-icons';
import { BriefcaseFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { GraphUp } from 'react-bootstrap-icons';
import {  PeopleFill } from 'react-bootstrap-icons';
import { GearWideConnected } from 'react-bootstrap-icons';
import { CalendarCheckFill } from 'react-bootstrap-icons';
// import { Check2Square } from 'react-bootstrap-icons';
// import {Link} from "react-router-dom";

// New Tutorial

import { Switch, Route, Link } from "react-router-dom";


// End New Tutorial

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";



export class clients extends Component {
   
      
    render() {
        
        return ( 
            <div className="main-container container-fluid"> 
                <div className="row">
                    <div className="icons-container col-sm-1">
                            <Link to='./Dashboard'>
                                <div className="icons-container_icon-1  d-flex justify-content-center mb-5"> <Speedometer color="#cdcdcd" size={50} /> </div>        
                            </Link>
                            <Link to='./jobs'>
                            <div className="icons-container_icon-2 d-flex justify-content-center mb-5"> <BriefcaseFill color="#cdcdcd" size={50} /> </div>       
                            </Link>

                            <Link to="./calenderPage">
                                <div className="icons-container_icon-1  d-flex justify-content-center mb-5">
                                    {" "}
                             <CalendarCheckFill color="#cdcdcd" size={50} />{" "}
                                </div>
                                </Link>
                            <div className="icons-container_icon-3 client_icon d-flex justify-content-center mb-5"> <PersonFill color="#333283" size={50} /> </div>
                             <Link to='./reports'>
                                 <div className="icons-container_icon-4 d-flex justify-content-center mb-5"> <GraphUp color="#CDCDCD" size={50} /> </div>      
                            </Link>
                            <Link to='./addStaff'>
                                <div className="icons-container_icon-5 d-flex justify-content-center mb-5"> <PeopleFill color="#CDCDCD" size={50} /> </div>      
                            </Link>
                    </div>
                    <div className="col-sm-11  dashboard_container_main p-0"> 
                        <div className="content-container p-5 ml-0"> 
                                <div className="clients h-100">
                                        <div className="clients_head">
                                            <div className="row container-fluid">
                                                <div className="col">
                                                <h2 className="color mr-5"> Clients </h2>
                                                </div>
                                                    <div className="add_client col">
                                                        <Link to='./addToClient'>
                                                            <button className="btn btn-success">Add Client +</button>   
                                                        </Link>
                                                    </div>
                                                   
                                            </div>
                                            <hr className="line" />
                                           

                                                <div className="upload-file">
                                                    <form action="">
                                                        <h6>Import Clients</h6>
                                                        <div class="input-group d-flex">    
                                                            <input type="file" id="search" className="form-control" name="myFile" placeholder="Choose your file"/>
                                                            <button className="btn btn-primary" type="submit">Upload</button>
                                                            <h6 className="text-body pl-3 pt-2">File must be uploaded with the extension .csv, .xls, or .xlsx</h6>
                                                        </div>
                                                    
                                                        
                                                    </form>
                                                </div>
                                        </div>

                                <div className="table bg-primary">
                                    Insert Table
                                </div>

                             
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default clients

