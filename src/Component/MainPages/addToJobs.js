// import React from "react";
// import { ArrowUpCircleFill, Speedometer, XCircleFill } from "react-bootstrap-icons";
// import { BriefcaseFill } from "react-bootstrap-icons";
// import { PersonFill } from "react-bootstrap-icons";
// import { GraphUp } from "react-bootstrap-icons";
// import { PeopleFill } from "react-bootstrap-icons";
// import { CalendarCheckFill } from "react-bootstrap-icons";
// import { GearWideConnected } from "react-bootstrap-icons";
// import { EyeFill } from "react-bootstrap-icons";
// // import { Dropdown } from 'bootstrap';
// // import { Check2Square } from 'react-bootstrap-icons';
// // import { Search } from 'react-bootstrap-icons';
// import { Link } from "react-router-dom";

// function addToJobs() {
//   return (
//     <div className="main-container container-fluid">
//       <div className="row">
//         <div className="icons-container col-sm-1">
//           <Link to="./Dashboard">
//             <div className="icons-container_icon-1  d-flex justify-content-center mb-5">
//               {" "}
//               <Speedometer color="#cdcdcd" size={50} />{" "}
//             </div>
//           </Link>

//           <div className="icons-container_icon-2 jobs_icon d-flex justify-content-center mb-5">
//             {" "}
//             <BriefcaseFill color="#333283" size={50} />{" "}
//           </div>
//           <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
//             {" "}
//             <CalendarCheckFill color="#CDCDCD" size={50} />{" "}
//           </div>
//           <Link to="./clients">
//             <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
//               {" "}
//               <PersonFill color="#CDCDCD" size={50} />{" "}
//             </div>
//           </Link>

//           <Link to="./reports">
//             <div className="icons-container_icon-4 d-flex justify-content-center mb-5">
//               {" "}
//               <GraphUp color="#CDCDCD" size={50} />{" "}
//             </div>
//           </Link>

//           <Link to="./addStaff">
//             <div className="icons-container_icon-5 d-flex justify-content-center mb-5">
//               {" "}
//               <PeopleFill color="#CDCDCD" size={50} />{" "}
//             </div>
//           </Link>
//         </div>
//         <div className="col-sm-11  dashboard_container_main job_creation p-0">
//           <div className="content-container row p-5 ml-0">
//             <div className="content-container_main_dashboard-head mb-3">
//               <h2 className="content-container_main_dashboard-head_text">
//                 {" "}
//                 Jobs{" "}
//               </h2>
//             </div>
//             <div className="col-sm-7 div">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   required
//                   placeholder="Enter Job Name"
//                 />
//               </div>
//               <div className="form-group">
//                 <textarea
//                   name=""
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   cols="30"
//                   rows="3"
//                   placeholder="Enter Job Description"
//                 ></textarea>
//               </div>
//               {/* Dropdown Here */}
//               <div className="dropdown">
//                 <div className="dropdown-menu">
//                   <a className="dropdown-item" href="/">
//                     Link 1
//                   </a>
//                   <a className="dropdown-item" href="/">
//                     Link 2
//                   </a>
//                   <a className="dropdown-item" href="/">
//                     Link 3
//                   </a>
//                 </div>
//               </div>

//               {/* Select Form Goes Here */}
//               <div className="main_select_container">
                
//               </div>

//               {/* End new listing Here */}

//               <div className="select_client">
//                 <label htmlFor="" className="color"><strong>Select Client</strong></label>
//                 <select className="form-select" aria-label="Default select example" name="" id="">
//                   <option value="first" selected >Fidelity Bank</option>
//                   <option value="first">GTB Bank</option>
//                   <option value="first">Union Bank</option>
//                   <option value="first">Keystone Bank</option>
//                   <option value="first">Clients</option>
//                 </select>
//               </div>

//               {/*  */}
                
//               {/*  */}
//               {/* Modal Goes Here */}
//               <div>
//                 <div class="container">
//                   <div class="title"></div>
//                   <div class="row mt-4">
//                     <div>
//                       <button
//                         class="btn btn-block btn-primary btn_create_task w-25"
//                         id="btnLogin"
//                         data-toggle="modal"
//                         data-target="#loginModal"
//                       >
//                         <BriefcaseFill color="white" size={20} />
//                         <span className="pl-2 task_text">Create Task</span>
//                         <div class="ripple-container"></div>
//                       </button>
//                     </div>
//                   </div>

//                   <div
//                     class="modal fade show"
//                     id="myModal"
//                     tabindex="-1"
//                     role="dialog"
//                   >
//                     <div class="modal-dialog" role="document">
//                       <div class="modal-content">
//                         <div class="modal-header">
//                           <h5 class="modal-title">Modal title</h5>
//                           <button
//                             type="button"
//                             class="close"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                           >
//                             <i class="material-icons">clear</i>
//                           </button>
//                         </div>
//                         <div class="modal-footer">
//                           <button type="button" class="btn btn-link">
//                             Nice Button
//                           </button>
//                           <button
//                             type="button"
//                             class="btn btn-danger btn-link"
//                             data-dismiss="modal"
//                           >
//                             Close
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     class="modal fade show"
//                     id="loginModal"
//                     tabindex="-1"
//                     role="dialog"
//                   >
//                     <div class="modal-dialog modal-login mt-5" role="document">
//                       <div class="modal-content">
//                         <div class="card card-signup card-plain">
//                           <div class="modal-header">
//                             <div class="card-header w-100 h-100 btn-outline-primary card-header-primary text-center">
//                               <button
//                                 type="button"
//                                 class="close"
//                                 data-dismiss="modal"
//                                 aria-hidden="true"
//                               >
                             
//                                <XCircleFill color="red" size={30} />
//                               </button>
//                               <h4 class="card-title">
//                                 Create a Task(s) for this job
//                               </h4>
//                             </div>
//                           </div>
//                           <div class="modal-body">
//                             <form class="form" method="" action="">
//                               <div class="card-body">
//                                 <div class="form-group bmd-form-group">
//                                   <div class="input-group">
//                                     <div class="input-group-prepend">
//                                       <span class="input-group-text">
//                                         <i class="material-icons">work</i>
//                                       </span>
//                                     </div>
//                                     <input
//                                       type="text"
//                                       class="form-control"
//                                       placeholder="Task Title"
//                                     />
//                                   </div>
//                                 </div>
                              
//                                 <select
//                                   class="form-select"
//                                   aria-label="Default select example">
//                                   <option selected>
//                                     Select Staff
//                                   </option>
//                                   <option value="1">Staff 1</option>
//                                   <option value="2">Staff 2</option>
//                                   <option value="3">Staff 3</option>
//                                   <option value="3">Staff 4</option>
//                                   <option value="3">Staff 5</option>
//                                   <option value="3">Staff 6</option>
//                                 </select>

//                             =
//                                 <div className="row mt-4 ">
//                                   <div className="time_1">
//                                     <div className="col">
//                                       <div className="form-group ml-0">
//                                         <label
//                                           htmlFor="usr"
//                                           className="content_color"
//                                         >
//                                           <strong> Date In </strong>
//                                         </label>
//                                         <a href="/">
//                                           {" "}
//                                           <input
//                                             type="datetime-local"
//                                             className="form-control"
//                                             id="usr"
//                                             required
//                                             placeholder="Add client"
//                                           />
//                                         </a>
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="time_2 d-flex">
//                                     <div className="col">
//                                       <label
//                                         htmlFor="usr"
//                                         className="content_color d-block"
//                                       >
//                                         <strong> Budgeted Time </strong>
//                                       </label>
//                                       <div class="input-group mb-3">
//                                         <input
//                                           type="text"
//                                           className="form-control"
//                                           placeholder="Input time"
//                                         />
//                                         <div class="input-group-prepend">
//                                           <span class="input-group-text">
//                                             Hours
//                                           </span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="time_3">
//                                     <div className="col">
//                                       <div className="form-group ml-0">
//                                         <label
//                                           htmlFor="usr"
//                                           className="content_color"
//                                         >
//                                           <strong> Date out </strong>
//                                         </label>
//                                         <a href="/">
//                                           {" "}
//                                           <input
//                                             type="date"
//                                             className="form-control"
//                                             id="usr"
//                                             required
//                                             placeholder="Add client"
//                                             readOnly
//                                           />
//                                         </a>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </form>
//                           </div>
//                           <div class="modal-footer justify-content-center">
//                             <a
//                               href="#pablo"
//                               class="btn btn-primary btn-link btn-wd btn-lg"
//                             >
//                               {" "}
//                               <span className="text-white"> Create Task </span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Modal Ends Here */}



//               {/* Second Modal starts Here */}
//             </div>

//             <div className="col-sm-5 div h-100">
//               {/* List of Tasks given would show will  */}
//               <div className="jobs_fill_container mb-3">

//                                 <div className="card scroll mb-3 mt-1">
//                                   <div className="card-header">
//                                     Staff Name
//                                     <div className="d-flex float-right">
//                                     <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
//                                       <a href="/"><ArrowUpCircleFill color="green" size={20} className="ml-3"/></a>
//                                     </div>
//                                   </div>
//                                   <div className="card-body">
//                                     <h5 className="card-title">
//                                       Task Name here
//                                     </h5>
//                                     <p className="card-text">
//                                       Description of task goes here
//                                      </p>
//                                   </div>
//                                 </div>

//                                 <div className="card scroll mb-3 mt-1">
//                                   <div className="card-header">
//                                     Staff Name
//                                     <div className="d-flex float-right">
//                                     <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
//                                     <a href="/"><ArrowUpCircleFill color="green" size={20} className="ml-3"/></a>                                    </div>
//                                   </div>
//                                   <div className="card-body">
//                                     <h5 className="card-title">
//                                       Task Name here
//                                     </h5>
//                                     <p className="card-text">
//                                       Description of task goes here
//                                      </p>
//                                   </div>
//                                 </div>
//                                 <div className="card scroll mb-3 mt-1">
//                                   <div className="card-header">
//                                     Staff Name
//                                     <div className="d-flex float-right">
//                                     <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
//                                     <a href="/"><ArrowUpCircleFill color="green" size={20} className="ml-3"/></a>                                    </div>
//                                   </div>
//                                   <div className="card-body">
//                                     <h5 className="card-title">
//                                       Task Name here
//                                     </h5>
//                                     <p className="card-text">
//                                       Description of task goes here
//                                      </p>
//                                   </div>
//                                 </div>

//                                 <div className="card scroll mb-3 mt-1">
//                                   <div className="card-header">
//                                     Staff Name
//                                     <div className="d-flex float-right">
//                                     <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
//                                     <a href="/"><ArrowUpCircleFill color="green" size={20} className="ml-3"/></a>                                    </div>
//                                   </div>
//                                   <div className="card-body">
//                                     <h5 className="card-title">
//                                       Task Name here
//                                     </h5>
//                                     <p className="card-text">
//                                       Description of task goes here
//                                      </p>
//                                   </div>
//                                 </div>

//                                 <div className="card scroll mb-3 mt-1">
//                                   <div className="card-header">
//                                     Staff Name
//                                     <div className="d-flex float-right">
//                                     <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
//                                     <a href="/"><ArrowUpCircleFill color="green" size={20} className="ml-3"/></a>                                    </div>
//                                   </div>
//                                   <div className="card-body">
//                                     <h5 className="card-title">
//                                       Task Name here
//                                     </h5>
//                                     <p className="card-text">
//                                       Description of task goes here
//                                      </p>
//                                   </div>
//                                 </div>



//               </div>
//               {/* End of Tasks Container */}

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default addToJobs;

import React, { Component } from 'react'
import DataTeams from './DATA/DataTeams'
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { XCircleFill } from "react-bootstrap-icons";
import { EyeFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { ArrowUpCircleFill } from 'react-bootstrap-icons';
// import { GearWideConnected } from "react-bootstrap-icons";
// import { Dropdown } from 'bootstrap';
// import { Check2Square } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import moment from 'moment';


export class addToJobs extends Component {
  state = {
    job_name: [],
    job_daa: [],
    job_bool: false,
    job_bool2: false,
    task_name: '',
    task_staf: '',
    task_dat_in: '',
    task_dueration: '',
    task_date_outt: '',
    task_time_option: '',
    true_time_out: '',
  }

  addTaskBTN = () => {
    const date_outtt = document.querySelector(".date_outtt")
    const task_Budgeted_timeeee = document.querySelector(".task_Budgeted_timeeee")
    const Task_Date_innn = document.querySelector(".Task_Date_in")
    const Task_Staffff = document.querySelector(".Task_Staff")
    const Task_Titleee = document.querySelector(".Task_Title")
    if (
      this.state.job_bool === true 
      && date_outtt.value.length > 0
      && task_Budgeted_timeeee.value.length > 0
      && Task_Staffff.value.length > 0
      && Task_Titleee.value.length > 0
      ){
      const data = {task: {          
          task_name: `${this.state.task_name}`,
          task_staff: `${this.state.task_staf}`,
          task_dat_in: `${this.state.task_dat_in}`,
          task_dat_interval: `${"this.state.task_dueration"}`,
          task_dat_out: `${date_outtt.value}`,
        },}

      this.setState({job_daa: this.state.job_daa.concat(data)})
      
      this.setState({job_bool2: true})
    }
    date_outtt.value = ''
    task_Budgeted_timeeee.value = ''
    // Task_Date_innn.value = ''
    // Task_Staffff.value = ''
    Task_Titleee.value = ''
  }


  task_date_out = (e) => {
    const data = e.target.value
    this.setState({task_date_outt: data})
  }
  task_Budgeted_time = (e) => {
    const data = e.target.value
    this.setState({task_dueration: data})
  }
  task_date_in = (e) => {
    const data = e.target.value
    this.setState({task_dat_in: data})
  }
  task_staff = (e) => {
    const data = e.target.value
    this.setState({task_staf: data})
  }
  task_Title = (e) => {
    const data = e.target.value
    this.setState({task_name: data})

    // console.log(this.state.task_name)
    // console.log(this.state.task_staf)
    // console.log(this.state.task_dat_in)
    // console.log(this.state.task_dueration)
    // console.log(this.state.task_time_option)
  }
  jobeName = (e) => {
    const data = e.target.value
    this.setState({job_name: data})
  }
  task_time_opt = (e) => {
    const data = e.target.value
    this.setState({task_time_option: data})
  }
  addToData = () => {
    const exampleFormControlTextarea1 = document.querySelector("#exampleFormControlTextarea1")
    if (this.state.job_bool === false & exampleFormControlTextarea1.value.length >0){
      // const data = {job_name: `${this.state.job_name}`}
      // this.setState({job_daa: this.state.job_daa.concat(data)})
      
      this.setState({job_bool: true})
    }
    exampleFormControlTextarea1.value = ''
  }
  hi = () => {
    // const hoo = moment("2021-07-03T09:13")
    // hoo.add(5, 'hour')
    // console.log(hoo.daysInMonth())
    // const date_outtt = document.querySelector(".date_outtt")
    // date_outtt.value = 'gfhjhkjl'
    console.log(this.state.job_daa)
  }
  delet = (index) => {
    const list = [...this.state.job_daa]
    list.splice(index, 1)
    this.setState({job_daa: list})
  }
  render() {
    const date = moment(this.state.task_dat_in)
    const date_outtt = document.querySelector(".date_outtt")
    const task_Budgeted_timeeee = document.querySelector(".task_Budgeted_timeeee")
    // min calc starts here
    const mHourFloor = Math.floor(this.state.task_dueration / 60)
    const mHour = mHourFloor - 9
    const mday = Math.floor(mHourFloor / 9)
    const mRemainder = this.state.task_dueration % 60
    // hour calc starts here
    const hHourFloor = Math.floor(this.state.task_dueration / 9)
    const hHour = this.state.task_dueration % 9
    // days calc starts here
    const dHourFloor = Math.floor(this.state.task_dueration * 18 / 9)
    const dHour = Math.floor(this.state.task_dueration * 18 / 9 * 7 - 7)
    // weeks calc starts here
    const wHourFloor = Math.floor(this.state.task_dueration * 18 / 9 * 7)
    const wHour = Math.floor(this.state.task_dueration * 18 / 9 * 49 - 49)
    // months calc starts here
    const monthHourFloor = Math.floor(this.state.task_dueration * 18 / 9 * date.daysInMonth())
    const mul = date.daysInMonth() * date.daysInMonth()
    const monthHour = Math.floor(this.state.task_dueration * 18 / 9 * mul - mul)

    if (mHour === 25 && task_Budgeted_timeeee.value === '2040' && this.state.task_time_option === 'Min'){
      date_outtt.value = '';
      task_Budgeted_timeeee.value = '';
      alert("sorry you cant go above 2040mn")
    }

    if (this.state.task_dat_in.length > 0 && this.state.task_dueration < 540 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Min'){
      date.add(this.state.task_dueration, 'minutes')
      date_outtt.value = date.format('LLL')
    }
    if (mHour < 25 && this.state.task_dat_in.length > 0 && this.state.task_dueration >= 540 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Min'){
      date.add(mRemainder, 'minutes')
      date.add(mHour, 'hour')
      date.add(mday, 'day')
      date_outtt.value = date.format('LLL')
      // console.log(`${mHourFloor}, ${mRemainder}, ${mHour}`)
    }
    if (this.state.task_dat_in.length > 0 && this.state.task_dueration < 9 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Hours'){
      date.add(this.state.task_dueration, 'hour')
      date_outtt.value = date.format('LLL')
    }
    if (this.state.task_dat_in.length > 0 && this.state.task_dueration >= 9 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Hours'){
      // date.add(mRemainder, 'minutes')
      date.add(hHour, 'hour')
      date.add(hHourFloor, 'day')
      date_outtt.value = date.format('LLL')
      // console.log(`${hHourFloor}, ${hHour}, ${hRemainder}`)
    }
    if (this.state.task_dat_in.length > 0 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Days'){
      date.add(dHourFloor, 'day')
      date.add(dHour, 'hour')   
      date_outtt.value = date.format('LLL')
    }
    if (this.state.task_dat_in.length > 0 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Weeks'){
      date.add(wHourFloor, 'day')
      date.add(wHour, 'hour')   
      date_outtt.value = date.format('LLL')
    }
    if (this.state.task_dat_in.length > 0 && this.state.task_dueration.length > 0 && this.state.task_time_option === 'Month'){
      date.add(monthHourFloor, 'day')
      date.add(monthHour, 'hour')   
      date_outtt.value = date.format('LLL')
    }
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
            <div className="icons-container_icon-3 d-flex justify-content-center mb-5">
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
          <div className="col-sm-11  dashboard_container_main job_creation p-0">
            <div className="content-container row p-5 ml-0">
              <div className="content-container_main_dashboard-head mb-3 d-flex">
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
                    onChange={(e) => this.jobeName(e)}
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
                {/* <button onClick={this.hi}>click</button> */}

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
                          onClick={this.addToData}
                        >
                          <BriefcaseFill color="white" size={20} />{" "}
                          <span className="pl-2 task_text">Create Task</span>
                          <div class="ripple-container"></div>
                        </button>
                
                      </div>

                      <div className="mt-3 back_2_jobs">
                      <Link to="./jobs">
                        <button className="btn btn-primary mx-auto">
                          <span>Back to Jobs</span>
                        </button>
                        </Link>
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
                        <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
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
                      <div class="modal-dialog modal-login mt-5 scroll" role="document">
                        <div class="modal-content">
                          <div class="card card-signup card-plain">
                            <div class="modal-header w-100 container-fluid">
                              <div class="card-header card-header-primary text-center container-fluid w-100">
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-hidden="true"
                                >
                              <a href="/"><XCircleFill color="red" size={20} className="ml-3"/></a>
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
                                        <BriefcaseFill color="#999" size={20} />{" "}
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        class="form-control Task_Title"
                                        placeholder="Task Title"
                                        onChange={(e)=>this.task_Title(e)}
                                      />
                                    </div>
                                  </div>
                                  {/* List of Staff Here */}
                                  <select
                                    class="form-select Task_Staff"
                                    aria-label="Default select example"
                                    onChange={(e)=>this.task_staff(e)}>
                                    <option selected>
                                      Select Staff
                                    </option>
                                    {DataTeams.map((value, index) => {
                                      return (
                                        <option key={index}>{value.Client_Name}</option>
                                      )
                                    })}
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
                                          {/* <a href=""> */}
                                            {" "}
                                            <input
                                              type="datetime-local"
                                              className="form-control Task_Date_in"
                                              id="usr"
                                              required
                                              placeholder="Add client"
                                              onChange={(e)=>this.task_date_in(e)}
                                            />
                                          {/* </a> */}
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
                                            type="numbers"
                                            className="form-control task_Budgeted_timeeee"
                                            placeholder="Input time"
                                            onChange={(e)=>this.task_Budgeted_time(e)}
                                          />
                                          <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            onChange={(e)=>this.task_time_opt(e)}>
                                            <option selected>
                                              Select A Time
                                            </option>
                                            <option>Min</option>
                                            <option>Hours</option>
                                            <option>Days</option>
                                            <option>Weeks</option>
                                            <option>Month</option>
                                            <option>Year</option>
                                          </select>
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
                                          {/* <a href=""> */}
                                            {" "}
                                            <input
                                              type="text"
                                              className="form-control date_outtt"
                                              id="usr"
                                              required
                                              placeholder="Add client"
                                              readOnly
                                              onChange={(e)=>this.task_date_out(e)}
                                            />
                                          {/* </a> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer justify-content-center">
                              <a
                                href="#"
                                class="btn btn-primary btn-link btn-wd btn-lg"
                                onClick={this.addTaskBTN}
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
              <div style={{textAlign:"center", padding:"15px"}}>
                <h4>{this.state.job_bool === true ?  this.state.job_name : "Jobe Name"}</h4>
                <p>{`you currently have ${this.state.job_daa.length} task`}</p>
              </div>
              {this.state.job_daa.length > 0 && this.state.job_daa.map((value, index) => {
                return (
                  <div key={index} className="card scroll mb-3 mt-1">
                    <div className="card-header">
                      {value.task.task_staff}
                      <div className="d-flex float-right">
                      <a href="#"><ArrowUpCircleFill color="green" size={25} className="/"/></a>
                        <a onClick={((index) => this.delet(index))} href="#"><XCircleFill color="red" size={20} className="ml-3"/></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {value.task.task_name}
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi modi illum iste eum quis harum amet vitae ipsum, temporibus nihil.
                       </p>
                       <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>date in</th>
                            <th>job duration</th>
                            <th>date out</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
                              <td> <h6 className="text-primary">{value.task.task_dat_in}</h6></td> 
                              <td><h6 className="text-primary">{value.task.task_dat_interval}</h6></td>
                              <td><h6 className="text-primary">{value.task.task_dat_out}</h6></td>
                          </tr>
                    </tbody>
                </table>
                    </div>
                  </div>
                )
              })}
              </div>
              {/* End of Tasks Container */}

            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addToJobs

