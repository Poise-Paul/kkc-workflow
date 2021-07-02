import React from "react";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
// import { Dropdown } from 'bootstrap';
// import { Check2Square } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

function addToJobs() {
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
          <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
            {" "}
            <CalendarCheckFill color="#CDCDCD" size={50} />{" "}
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
        <div className="col-sm-11  dashboard_container_main job_creation p-0">
          <div className="content-container row p-5 ml-0">
            <div className="content-container_main_dashboard-head mb-3">
              <h2 className="content-container_main_dashboard-head_text">
                {" "}
                Jobs{" "}
              </h2>
            </div>
            <div className="col-sm-7 div">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  required
                  placeholder="Enter Job Name"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  cols="30"
                  rows="3"
                  placeholder="Enter Job Description"
                ></textarea>
              </div>
              {/* Dropdown Here */}
              <div className="dropdown">
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Link 1
                  </a>
                  <a className="dropdown-item" href="/">
                    Link 2
                  </a>
                  <a className="dropdown-item" href="/">
                    Link 3
                  </a>
                </div>
              </div>

              {/* Select Form Goes Here */}
              <div className="main_select_container">
                
              </div>

              {/* End new listing Here */}

              <div className="select_client">
                <label htmlFor="" className="color"><strong>Select Client</strong></label>
                <select className="form-select" aria-label="Default select example" name="" id="">
                  <option value="first" selected >Fidelity Bank</option>
                  <option value="first">GTB Bank</option>
                  <option value="first">Union Bank</option>
                  <option value="first">Keystone Bank</option>
                  <option value="first">Clients</option>
                </select>
              </div>

              {/*  */}
                
              {/*  */}
              {/* Modal Goes Here */}
              <div>
                <div class="container">
                  <div class="title"></div>
                  <div class="row mt-4">
                    <div>
                      <button
                        class="btn btn-block btn-primary"
                        id="btnLogin"
                        data-toggle="modal"
                        data-target="#loginModal"
                      >
                        <i class="material-icons">work</i>
                        <span className="pl-2 task_text">Create Task</span>
                        <div class="ripple-container"></div>
                      </button>
                    </div>
                  </div>

                  <div
                    class="modal fade show"
                    id="myModal"
                    tabindex="-1"
                    role="dialog"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Modal title</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <i class="material-icons">clear</i>
                          </button>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-link">
                            Nice Button
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="modal fade show"
                    id="loginModal"
                    tabindex="-1"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-login mt-5" role="document">
                      <div class="modal-content">
                        <div class="card card-signup card-plain">
                          <div class="modal-header">
                            <div class="card-header card-header-primary text-center">
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                <i class="material-icons">clear</i>
                              </button>
                              <h4 class="card-title">
                                Create a Task(s) for this job
                              </h4>
                            </div>
                          </div>
                          <div class="modal-body">
                            <form class="form" method="" action="">
                              <div class="card-body">
                                <div class="form-group bmd-form-group">
                                  <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text">
                                        <i class="material-icons">work</i>
                                      </span>
                                    </div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Task Title"
                                    />
                                  </div>
                                </div>
                                {/* List of Staff Here */}
                                <select
                                  class="form-select"
                                  aria-label="Default select example">
                                  <option selected>
                                    Select Staff
                                  </option>
                                  <option value="1">Staff 1</option>
                                  <option value="2">Staff 2</option>
                                  <option value="3">Staff 3</option>
                                  <option value="3">Staff 4</option>
                                  <option value="3">Staff 5</option>
                                  <option value="3">Staff 6</option>
                                </select>

                                {/* New Listing Goes Here */}

                                {/* List of staff Ends Here */}
                                <div className="row mt-4 ">
                                  <div className="time_1">
                                    <div className="col">
                                      <div className="form-group ml-0">
                                        <label
                                          htmlFor="usr"
                                          className="content_color"
                                        >
                                          <strong> Date In </strong>
                                        </label>
                                        <a href="">
                                          {" "}
                                          <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="usr"
                                            required
                                            placeholder="Add client"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="time_2 d-flex">
                                    <div className="col">
                                      <label
                                        htmlFor="usr"
                                        className="content_color d-block"
                                      >
                                        <strong> Budgeted Time </strong>
                                      </label>
                                      <div class="input-group mb-3">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Input time"
                                        />
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            Hours
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="time_3">
                                    <div className="col">
                                      <div className="form-group ml-0">
                                        <label
                                          htmlFor="usr"
                                          className="content_color"
                                        >
                                          <strong> Date out </strong>
                                        </label>
                                        <a href="">
                                          {" "}
                                          <input
                                            type="date"
                                            className="form-control"
                                            id="usr"
                                            required
                                            placeholder="Add client"
                                            readOnly
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer justify-content-center">
                            <a
                              href="#pablo"
                              class="btn btn-primary btn-link btn-wd btn-lg"
                            >
                              {" "}
                              <span className="text-white"> Create Task </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Ends Here */}
            </div>

            <div className="col-sm-5 div">
              {/* List of Tasks given would show will  */}
              <div className="jobs_fill_container mb-3">

              <div class="container">
                <h2 className="color pt-3 text-center">Job Name</h2>
                <p className="text-center">List of Tasks for this job shows Here</p>            
                <table class="table">
                    <thead>
                    <tr>
                        <th className="color">Task</th>
                        <th  className="color">Staff</th>
                        <th  className="color">Date In</th>
                        <th  className="color">Interval</th>
                        <th  className="color">Date Out</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    <tr>
                    <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    <tr>
                    <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    <tr>
                    <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    <tr>
                    <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    <tr>
                    <td>Audit</td>
                        <td>Kolawole</td>
                        <td>1/07/21</td>
                        <td>24 Hours</td>
                        <td>3/07/21</td>
                    </tr>
                    </tbody>
                </table>
                </div>
              </div>
              {/* End of Tasks Container */}

              <Link to="./jobs">
                    <button className="btn btn-danger mr-2">Cancel</button>
                </Link>

                <Link to="./jobs">
                    <button className="btn btn-success">Create Job</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default addToJobs;
