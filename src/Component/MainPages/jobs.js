import React, { Component } from "react";
import Data_Jobs from "./DATA/Data_Jobs";
import JobPagination from "./pagination/Job_Pagination";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
// import { Check2Square } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export class jobs extends Component {
  state = {
    curentPage: 1,
    dataPerPage: 10,
    filter: [],
  };

  filter = (e) => {
    this.setState({filter: e.target.value.toLocaleLowerCase()})
    // console.log(this.state.filter)
  }


  render() {
    const paginate = (value) => {
      this.setState({curentPage: value});
    };
    const indexOfLastPost = this.state.curentPage * this.state.dataPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage;
    const currentPage = Data_Jobs.slice(indexOfFirstPost, indexOfLastPost);

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

            <div className="icons-container_icon-2 jobs_icon d-flex justify-content-center mb-5">
              {" "}
              <BriefcaseFill color="#333283" size={50} />{" "}
            </div>
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
          <div className="col-sm-11  dashboard_container_main">
            <div className="content-container ml-0">

            <div className="jobs container-fluid p-4">
                    <div className="jobs_head container-fluid row" >
                      <div className="head col">
                          <h2 className="color jobs_head_text"> {" "} Jobs{" "} </h2>
                      </div>
                      
                      <div className="create_task_btn col" style={{marginTop:"3em", marginLeft:"50em"}}>
                          <Link to="./addToJobs">
                              <button className="btn btn-primary "> Create Job+ </button>
                          </Link>
                      </div>
                    
                    </div>
                <div className="jobs_body scroll container-fluid">
                    <form action="">
                <div className="searchbox pt-2">
                  <div class="input-group">
                    <input
                        onChange={(e) => this.filter(e)}
                      type="text"
                      id="search"
                      className="form-control"
                      name="jobs"
                      placeholder="Find Jobs or Client by Name"
                    />
                    <span class="input-group-addon pl-2 pt-2">
                      <Search color="#cdcdcd" size={20} />
                    </span>
                  </div>
                </div>
              </form>
              <JobPagination
                totalPost={Data_Jobs.length}
                paginate={paginate}
                dataPerPage={this.state.dataPerPage}
                data={currentPage}
                filter={this.state.filter}
              />
              <div>
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

export default jobs;

