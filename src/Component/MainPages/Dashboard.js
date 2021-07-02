// New BBranch //
import React, { Component } from "react";
import DataTeams from "./DATA/DataTeams";
import DataDashboard, {PieChartValue} from "./DATA/DataDashboard";
import { Envelope, Speedometer } from "react-bootstrap-icons";
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
                  <div className="dashboard">
                      <div className="dashboard_head">
                      <div className="p-5">
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
                      <div className="dashboard_body row m-0 p-0">
                            <div className="dashboard_body_1 p-0 m-0">
                                <div className="dashboard_body_1_1 pl-4">
                                <div className="initial_top_container pt-5 d-flex">
                                   <div className="circle"> <span className="circle_inner_letter">K</span></div>
                                <div className="admin pl-3">
                                <h3 className="admin_head">Kehinde Kassim</h3>
                                  <a href="#">Kehindekassim@gmail.com</a> 
                            <button className="btn btn-warning"> <span className="organ_admin text-white"> <strong>ORGANIZATION ADMIN </strong> </span> </button>
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
                                    <div className="dashboard_body_1_3_first ">
                                      <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={50} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Overdue + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Overdue_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center">
                                          <span className="text-danger"> <strong>Overdue</strong> </span>
                                      </div>

                                    </div>

                                    <div className="dashboard_body_1_3_secondOne">

                                    </div>
                                    <div className="dashboard_body_1_3_thirdOne">
                                          {/* Starts Here */}

                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={50} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_Today + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_Today_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center">
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
                                    <div className="dashboard_body_2_3_first">

                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={50} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_This_week + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_This_week_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center">
                                          <span className="text-primary"> <strong>Due This Week</strong> </span>
                                      </div>

                                    </div>
                                    <div className="dashboard_body_2_3_secondOne">

                                    </div>
                                    <div className="dashboard_body_2_3_thirdOne">   
                                    <div className="jobs_icon_container mx-auto mt-5 small_edge">
                                          <Briefcase color="white" size={50} className="jobs_icon_container_icon"/>
                                      </div>

                                      <div className="time_container text-center">
                                        <span className="jobs_overdue_text_counter_jobs pr-2 mr-2">{DataDashboard.Due_Next_week + " Jobs"}</span>
                                        <span className="jobs_overdue_text_counter_hours">{DataDashboard.Due_Next_week_Hours + " Hours"}</span>
                                      </div>

                                      <div className="due_container text-center">
                                          <span className="text-success"> <strong>Due Next Week</strong> </span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div className="dashboard_body_5">

                              </div>
                              <div className="dashboard_body_3 p-0 m-0">
                                    <div className="dashboard_body_3_first">
                                          <div className="dashboard_body_3_first_head br-primary d-flex">
                                              <div className="dashboard_body_3_first_head_text">
                                                <h6 className="color float-right pl-3 pt-2">Recently Completed Jobs</h6>
                                              </div>
                                          </div>

                                          <div className="dashboard_body_3_first_body">

                                            <div class="container">          
                                              <table class="table">
                                                  <thead>
                                                  <tr>
                                                      <th className="color">Job</th>
                                                      <th  className="color">Staff</th>
                                                      <th  className="color">Date In</th>
                                                      <th  className="color">E.x Date</th>
                                                      <th  className="color">Date.o</th>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr>
                                                      <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  <tr>
                                                  <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  <tr>
                                                  <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  <tr>
                                                  <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  <tr>
                                                  <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  <tr>
                                                  <td>Audit</td>
                                                      <td>Kolawole</td>
                                                      <td>1/07/21</td>
                                                      <td>02/07/21</td>
                                                      <td>3/07/21</td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                              </div>
                                         

                                          </div>
                                    </div>
                                    <div className="dashboard_body_3_second">
                                      
                                    </div>
                                    <div className="dashboard_body_3_third">
                                      
                                    <div className="container-fluid">
                                      <div className="head_teams">
                                          <div className="icon_container mx-auto mt-3">
                                                <PeopleFill  color="white" size={50} className="icon_container_icon"/>
                                            </div>
                                            <div>
                                              <h2 className="color text-center teams_heading pt-2">Teams</h2>
                                            </div>

                                      </div>  
                                      <div className="team_list">
                              <ul>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                                  <li className="dashboard_container_third_teams_items_content_listing pb-2"><PersonCircle color="#333283" size={30} className="dashboard_container_third_teams_list_icon"/> <span  className="dashboard_container_third_teams_items_content">Poise Paul</span> <span className="status_contained pl-5 ml-5"></span></li>
                              </ul>
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
