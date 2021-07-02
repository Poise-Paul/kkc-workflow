import React, { Component } from 'react'
import DataTeams from "./DATA/DataTeams";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';


export class reports extends Component {
  state = {
    val: '',
    valueBar: {
      Client_Name: "kende chris and Co",
      Due_Next_week: "7",
      Email: "kende@gmail.com",
      Jobs_Due_Today: "3",
      Jobs_Overdue: "1",
      Jobs_due_this_week: "2",
    },
  }
  render() {
    const data = [
      {
        name: "Jobs Overdue",
        uv: parseInt(this.state.valueBar.Jobs_Overdue + 1),
        pv: parseInt(this.state.valueBar.Jobs_Overdue + 1),
        amt: parseInt(this.state.valueBar.Jobs_Overdue + 5),
        cnt: parseInt(this.state.valueBar.Jobs_Overdue),
      },
      {
        name: "Jobs Due Today",
        uv: parseInt(this.state.valueBar.Jobs_Due_Today + 1),
        pv: parseInt(this.state.valueBar.Jobs_Due_Today + 1),
        amt: parseInt(this.state.valueBar.Jobs_Due_Today + 5),
        cnt: parseInt(this.state.valueBar.Jobs_Due_Today),
      },
      {
        name: "Jobs due this week",
        uv: parseInt(this.state.valueBar.Jobs_due_this_week + 1),
        pv: parseInt(this.state.valueBar.Jobs_due_this_week + 1),
        amt: parseInt(this.state.valueBar.Jobs_due_this_week + 5),
        cnt: parseInt(this.state.valueBar.Jobs_due_this_week),
      },
      {
        name: "Jobs Due Next week",
        uv: parseInt(this.state.valueBar.Due_Next_week + 1),
        pv: parseInt(this.state.valueBar.Due_Next_week + 1),
        amt: parseInt(this.state.valueBar.Due_Next_week + 5),
        cnt: parseInt(this.state.valueBar.Due_Next_week),
      },
      {
        name: 'Jobs Complited',
        uv: parseInt(this.state.valueBar.Jobs_Due_Today + 1),
        pv: parseInt(this.state.valueBar.Jobs_Due_Today + 1),
        amt: parseInt(this.state.valueBar.Jobs_Due_Today + 2),
        cnt: parseInt(this.state.valueBar.Jobs_Due_Today +5),
      },
      {
        name: 'Jobs Failed To Complit',
        uv: parseInt(this.state.valueBar.Due_Next_week),
        pv: parseInt(this.state.valueBar.Due_Next_week),
        amt: parseInt(this.state.valueBar.Due_Next_week),
        cnt: parseInt(this.state.valueBar.Due_Next_week === 0 ? 1 : this.state.valueBar.Due_Next_week - 1),
      },
    ];
     
    const select = (e) => {
      DataTeams.filter((value) => {
        if (e.target.value === "") {
          return false;
        } else if (value.Client_Name.includes(e.target.value)) {
          this.setState({valueBar: value})
          return value;
        }
      })
    }
    return (
      <div className="main-container container-fluid">
        <div className="row">
          <div className="icons-container col-sm-1">
            <Link to="./Dashboard">
              <div className="icons-container_icon-1 d-flex justify-content-center mb-5">
                {" "}
                <Speedometer color="#cdcdcd" size={50} />{" "}
              </div>
            </Link>
  
            <Link to="./jobs">
              <div className="icons-container_icon-2 d-flex justify-content-center mb-5">
                {" "}
                <BriefcaseFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>
              <Link to="./calenderPage">
              <div className="icons-container_icon-1  d-flex justify-content-center mb-5">
                {" "}
                <CalendarCheckFill color="#cdcdcd" size={50} />{" "}
              </div>
            </Link>
            <Link to="./clients">
              <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
                {" "}
                <PersonFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>
            <div className="icons-container_icon-4 d-flex reports_icon justify-content-center mb-5">
              {" "}
              <GraphUp color="#333283" size={50} />{" "}
            </div>
            <Link to="./addStaff">
              <div className="icons-container_icon-5 d-flex justify-content-center mb-5">
                {" "}
                <PeopleFill color="#CDCDCD" size={50} />{" "}
              </div>
            </Link>
          </div>
          <div className="col-sm-11  dashboard_container_main p-0">
            <div className="content-container pl-0 ml-0">
              <div className="reports container-fluid p-3">

                <div className=" h-100 container-fluid">
                  <div className="reports_head w-100">
                        <div className="content-container_main_dashboard-head mb-3 report_holder">
                        <h2 className="content-container_main_dashboard-head_text">
                          {" "}
                          Reports{" "}
                        </h2>
                      </div>
                      <div className="mb-2 report_holder">
                        <h2 className="color text-center">
                          {" "}
                          Progress Reports{" "}
                        </h2>
                      </div>
                      <a href="/">
                        {" "}
                        <p className="text-info text-center m-0 pb-2">
                          *Select a particular date to get started - Pick a staff, month
                          and year to view reports for that specified year
                        </p>
                      </a>
                  </div>

                  <div className="reports_body">
                          <div className="container">
                          <div className="row">
                            <div class="dashboard_container_first_profile_content_dropdown col">
                              <span> Select Staff </span>
                              <select onChange={(e) => select(e)} name="" id="list">
                                <option value="first">All Assigned</option>
                                {DataTeams.map((value, index) => {
                                      return (
                                          <option key={index}>{value.Client_Name}</option>
                                      )
                                  })}
                              </select>
                            </div>
          
                            <div class="dashboard_container_first_profile_content_dropdown col">
                              <label htmlFor="">Select Date</label>
                              <input type="month" name="bdaymonth" />
                            </div>
                          </div>
                        </div>

                        {/* Charts Functions */}


                      <ComposedChart
                        width={1300}
                        height={500}
                        data={data}
                        margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={50} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        <Scatter dataKey="cnt" fill="red" />
                      </ComposedChart>
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

export default reports
