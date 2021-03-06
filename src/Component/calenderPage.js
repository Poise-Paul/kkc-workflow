import React, { Component } from "react";
// import Data_Jobs from "./DATA/Data_Jobs";
// import JobPagination from "./pagination/Job_Pagination";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
// import { Search } from "react-bootstrap-icons";
// import { Check2Square } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export class jobs extends Component {
  render() {
    return (
      <div className="main-container container-fluid">
        <div className="row">
          <div className="icons-container col-sm-1">
            <Link to="./Dashboard">
              <div className="icons-container_icon-1  d-flex justify-content-center mb-5">
                {" "}
                <Speedometer color="#cdcdcd" size={50} />{" "}
              </div>
            </Link>

            <Link to="./clients">
              <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
                {" "}
                <BriefcaseFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>

              <div className="icons-container_icon-1 jobs_icon d-flex justify-content-center mb-5">
                {" "}
                <CalendarCheckFill color="#333283" size={50} />{" "}
              </div>
            <Link to="./clients">
              <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
                {" "}
                <PersonFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>

            <Link to="./reports">
              <div className="icons-container_icon-4 d-flex justify-content-center mb-5">
                {" "}
                <GraphUp color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>

            <Link to="./addStaff">
              <div className="icons-container_icon-5 d-flex justify-content-center mb-5">
                {" "}
                <PeopleFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>
          </div>
          <div className="col-sm-11  dashboard_container_main p-0">
            <div className="content-container my_background p-5 ml-0">
              <div className="calender_box_head">
                  {/* Heading of Calender Box Head */}
                    <div className="content-container_main_dashboard-head mb-3">
                        <h2 className="content-container_main_dashboard-head_text">
                          {" "}
                          Calender{" "}
                        </h2>
                      </div>
                        {/* Heading of Calender Box Head */}

                        {/* Calender Intro Goes Here */}
                          <div className="calender_intro row container-fluid">
                              <div className="calender_intro_box col-sm-9 row p-0 m-0">
                                   <div className="calender_intro_box_text col-sm-9 float-left">
                                      <h1 className="text-white">Good Morning Boss</h1>
                                      <p className="text-white">Here is a great way to start your day Lorem ipsum dolor sit amet 
                                        consectetur adipisicing elit. Optio in ipsa quam perspiciatis sit dolorem praesentium architecto eveniet aliquid libero?
                                        </p>
                                    </div>
                                  
                                      <div className="calender_intro_box_pic pt-3 col-sm-3">
                                        <img src="./images/office Image.png" alt="Not shown"  width="100%"/> 
                                      </div>
                              </div>
                              <div className="calender_intro_button col-sm-3 pl-2">
                              <button className="btn btn-primary mt-5">
                                Create Event+
                              </button>
                              </div>
                          </div>
                        {/* Calender Intro Ends Here */}
              </div>
             
                  <div className="calender_box">

                  </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default jobs;
