import React, { Component } from "react";
import DataTeams from "./DATA/DataTeams";
import StaffPagination from "./pagination/StaffPagination";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
// import { Check2Square } from 'react-bootstrap-icons';
// import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export class addStaff extends Component {
  state = {
    curentPage: 1,
    dataPerPage: 10,
    filter: [],
  };

  filter = (e) => {
    this.setState({ filter: e.target.value.toLocaleLowerCase() });
    // console.log(this.state.filter)
  };
  render() {
    const paginate = (value) => {
      this.setState({ curentPage: value });
    };
    const indexOfLastPost = this.state.curentPage * this.state.dataPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage;
    const currentPage = DataTeams.slice(indexOfFirstPost, indexOfLastPost);
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
            <Link to="./reports">
              <div className="icons-container_icon-4 d-flex justify-content-center mb-5">
                {" "}
                <GraphUp color="#cdcdcd" size={50} />{" "}
              </div>
            </Link>
            <div className="icons-container_icon-5 d-flex clients_icon justify-content-center mb-5">
              {" "}
              <PeopleFill color="#333283" size={50} />{" "}
            </div>
          </div>
          <div className="col-sm-11  dashboard_container_main p-0">
            <div className="content-container pl-0 ml-0">
              <div className="staff container-fluid h-100">
                <div className="report_holder staff_head w-100 p-3">
                    <div className="staff_head_text">
                          <h2> {" "}Teams{" "}</h2>
                    </div>

                    <div className=" d-flex pb-2 pt-2">
                    <div className="no-of-users p-0 m-0">
                      {/* This will show your current No of users */}
                          <h5> You Currently have <span> <strong> 10</strong> </span> Users</h5>  
                    </div>

                    <div className=" pl-5">
                          <Link to="./addToTeam">
                            <button className="btn btn-primary add_staff_button">
                              Add Staff +
                            </button>
                          </Link>
                        </div>
                    <div className="search_box below_team_container_search-box">
                      <div class="input-group">
                        <input
                          onChange={(e) => this.filter(e)}
                          type="text"
                          id="search"
                          className="form-control"
                          name="jobs"
                          placeholder="Find Staff"
                        />
                        <span class="input-group-addon pl-2 pt-2">
                          <Search color="#cdcdcd" size={20} />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
                    
                     <div className="staff_body w-100 scroll p-3  mb-5">
                            <StaffPagination
                          totalPost={DataTeams.length}
                          paginate={paginate}
                          dataPerPage={this.state.dataPerPage}
                          data={currentPage}
                          filter={this.state.filter}/>
                     </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addStaff;
