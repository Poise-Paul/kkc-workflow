

// New BBranch //
import React, { Component } from "react";
import DataTeams from "./DATA/DataTeams";
import DataDashboard, {PieChartValue} from "./DATA/DataDashboard";
import { Envelope, EyeFill, Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { Briefcase } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import {  XCircleFill } from "react-bootstrap-icons";


// git add .
// git commit -m "responsivness"
// git push -u origin  paul-branch


export class Dashboard extends Component {
  render() {

    const data01 = [
        {name: PieChartValue.Overdue, value: parseInt(PieChartValue.Overdue_Hours) },
        {name: PieChartValue.Due_Today, value: parseInt(PieChartValue.Due_Today_Hours) },
        {name: PieChartValue.Due_This_week, value: parseInt(PieChartValue.Due_This_week_Hours) },
        {name: PieChartValue.Due_Next_week, value: parseInt(PieChartValue.Due_Next_week_Hours) },
    ]

    return (
      <div className="main-container container-fluid">
        <div className="row">
          <div className="icons-container col-sm-1">
            <div className="icons-container_icon-1 dashboard_icon d-flex justify-content-center mb-5">
              {" "}
              <Speedometer color="#333283" size={50} />{" "}
            </div>
            <Link to="./jobs">
              <div className="icons-container_icon-2 d-flex justify-content-center mb-5">
                {" "}
                <BriefcaseFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>

            <Link to="./calenderPage">
              <div className="icons-container_icon-2 d-flex justify-content-center mb-5">
                {" "}
                <CalendarCheckFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>
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
              <div className="content-container pl-0 ml-0">
                  <div className="dashboard p-5">
                      <div className="dashboard_head">
                      <div className="">
                          <h2 className="dashboard_head_text">
                            {" "}
                            Dashboard{" "}
                          </h2>
                          <h2 className="dashboard_head_message_head color">
                            Welcome Boss!
                          </h2>
                          <p className="dashboard_head_message_p color">
                            Let's see how the <strong>staff's</strong>  are doing!
                          </p>
                        </div>
                      </div>
                      <div className="dashboard_body row m-0 p-0 scroll">
                            <div className="dashboard_body_1 p-0 m-0">
                                <div className="dashboard_body_1_1">
                                <div className="initial_top_container pt-5 d-flex">
                                   <div className="circle"> <span className="circle_inner_letter">K</span></div>
                                <div className="admin pl-3">
                                <h3 className="admin_head">Kehinde Kassim</h3>
                                  <a href="#">Kehindekassim@gmail.com</a> 
                            <button className="btn btn-warning"> <span className="organ_admin text-white"> <strong>ORGANIZATION ADMIN</strong> </span> </button>
                              </div>
                                </div>
                                </div>
                                <div className="dashboard_body_1_2">
                                  <div class="dashboard_container_first_profile_content_dropdown">
                                        <select name="" id="" className="form-select" aria-label="Default select example">
                                          <option value="first">All Assigned</option>
                                          {DataTeams.map((value, index) => {
                                              return (
                                                  <option key={index} value="first">{value.Client_Name}</option>
                                              )
                                          })}
                                        </select>
                                      </div>

                                </div>
                                <div className="dashboard_body_1_3 d-flex">
                                    <div className="dashboard_body_1_3_first scroll">
                                      <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={40} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center pt-3">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Overdue + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Overdue_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center pt-2">
                                          <span className="text-danger"> <strong>Overdue</strong> </span>
                                      </div>

                                    </div>

                                    <div className="dashboard_body_1_3_secondOne">

                                    </div>
                                    <div className="dashboard_body_1_3_thirdOne scroll">
                                          {/* Starts Here */}

                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={40} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center pt-3">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_Today + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_Today_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center pt-2">
                                          <span className="text-info"> <strong>Due Today</strong> </span>
                                      </div>
                                    
                                    {/* Ends Here */}

                                    </div>
                                </div>

                            </div>  
                            <div className="dashboard_body_4">

                            </div>
                            <div className="dashboard_body_2 p-0 m-0">
                                  <div className="dashboard_body_2_1">
                                        <div className="dashboard_body_2_1_pieChat">
                                            <PieChart width={400} height={400}>
                                              <Pie
                                                dataKey="value"
                                                isAnimationActive={false}
                                                data={data01}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={80}
                                                fill="#8884d8"
                                                label
                                              />
                                              <Tooltip />
                                            </PieChart>
                                        </div>
                                    </div>
                                <div className="dashboard_body_2_2">
                                  
                                </div>

                                <div className="dashboard_body_2_3 d-flex">
                                    <div className="dashboard_body_2_3_first scroll">

                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={40} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center pt-3">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_This_week + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_This_week_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center pt-2">
                                          <span className="text-primary"> <strong>Due This Week</strong> </span>
                                      </div>

                                    </div>
                                    <div className="dashboard_body_2_3_secondOne">

                                    </div>
                                    <div className="dashboard_body_2_3_thirdOne scroll">   
                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={40} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center pt-3">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_Next_week + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_Next_week_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center pt-2">
                                          <span className="text-success"> <strong>Due Next Week</strong> </span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div className="dashboard_body_5">

                              </div>
                              < div className="dashboard_body_3 p-0 m-0">
                              <div className="jobs_fill_container mb-3">

                                <div className="card scroll mb-3 mt-1">
                                  <div className="card-header">
                                    Job Name
                                    <div className="d-flex float-right">
                                    <a data-toggle="modal" data-target="#exampleModal">
                                      <EyeFill color="#0275d8" size={25} className="/"/>
                                    </a> 
                                      <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">
                                     No of Tasks under this current job
                                    </h5>
                                   <p>
                                     Time the job was completed
                                   </p>
                                  </div>
                                </div>
                                
                                <div className="card scroll mb-3 mt-1">
                                  <div className="card-header">
                                    Job Name
                                    <div className="d-flex float-right">
                                  <a data-toggle="modal" data-target="#exampleModal">
                                      <EyeFill color="#0275d8" size={25} className="/"/>
                                    </a>  
                                      <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      This is the Task Title
                                    </h5>
                                    <p className="card-text">
                                      Description of the job will be here
                                     </p>
                                  </div>
                                </div>

                                {/* Modal Goes Here (For Jobs being done today) */}

                                          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Job Name</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                        </button>
                                                      </div>
                                                      <div className="modal-body">
                                                        <ul>
                                                          <li>Poise Paul</li>
                                                          <li>Adeola</li>
                                                          <li>Buma</li>
                                                        </ul>

                                                        <p>
                                                          Description of the Job Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, impedit.
                                                        </p>

                                                        <p id="show-time">12:33</p>
                                                      </div>
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Delete</button>
                                                      </div>
                                                    </div>
                                                </div>
                                          </div>


                                {/* Modal Ends Here for jobs being done today */}


                                <div className="card scroll mb-3 mt-1">
                                  <div className="card-header">
                                    Staff Name
                                    <div className="d-flex float-right">
                                    <a data-toggle="modal" data-target="#exampleModal">
                                      <EyeFill color="#0275d8" size={25} className="/"/>
                                    </a> 
                                      <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      This is the Task Title
                                    </h5>
                                    <p className="card-text">
                                      Time for job shows here
                                     </p>
                                  </div>
                                </div>

                                <div className="card scroll mb-3 mt-1">
                                  <div className="card-header">
                                    Job Name
                                    <div className="d-flex float-right">
                                    <a data-toggle="modal" data-target="#exampleModal">
                                      <EyeFill color="#0275d8" size={25} className="/"/>
                                    </a> 
                                      <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      This is the Task Title
                                    </h5>
                                    <p className="card-text">
                                      Description of the job will be here
                                     </p>
                                  </div>
                                </div>
                                </div>
                              </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Dashboard;
