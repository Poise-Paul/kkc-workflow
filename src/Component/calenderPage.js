
import React, { Component } from "react";
// import Data_Jobs from "./DATA/Data_Jobs";
// import JobPagination from "./pagination/Job_Pagination";
import { Speedometer } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import DataTime from "./MainPages/DATA/DataTime";
import { PersonFill } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { GearWideConnected } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
// import { Search } from "react-bootstrap-icons";
// import { Check2Square } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export class jobs extends Component {
  state = {
    months:[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    days: []
  }


  componentDidMount (){
      const date = new Date();

      date.setDate(1);
  
      const monthDays = document.querySelector(".days");
  
      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
  
      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
  
      const firstDayIndex = date.getDay();
  
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
  
      const nextDays = lastDayIndex;
      // const nextDays = 7 - lastDayIndex - 1;
  
      document.querySelector(".h1").innerHTML = this.state.months[date.getMonth()];
  
      document.querySelector(".p").innerHTML = `${date.getMonth() + 1} / ${date.getFullYear()}`;
  
      let days = "";
      let int = 0
  
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div id="prev-date">${prevLastDay - x + 1}</div>`;
      }
  
      for (let i = 1; i <= lastDay; i++) {
        // const test = i < DataTime.length ? DataTime[i] : 2
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
          days += `<div id="today">${i}</div>`;
        } else {
          days += `<div id="hi">${i}</div>`;
        }
        // console.log(int)
      }
  
      for (let j = 1; j <= nextDays; j++) {
        days += `<div id="next-date">${j}</div>`;
        monthDays.innerHTML = days;
      }

      const daysData = document.querySelectorAll("#hi")
      const h1 = document.querySelector(".h1")
      const p = document.querySelector(".p")
      
      
      daysData.forEach(element => {
        for (let i of DataTime){
          for (let x of i.days){
        if (h1.innerHTML === i.month && p.innerHTML === i.year && element.innerHTML === `${x}`){
          element.classList.add("hi")
          // console.log(x)
        }
      }
      // console.log(i.month)
    }
      });

    const renderCalendar = ()=> {
      date.setDate(1);
  
      const monthDays = document.querySelector(".days");
  
      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
  
      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
  
      const firstDayIndex = date.getDay();
  
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
  
      const nextDays = lastDayIndex;
      // const nextDays = 7 - lastDayIndex - 1;
  
      document.querySelector(".h1").innerHTML = this.state.months[date.getMonth()];
  
      document.querySelector(".p").innerHTML = `${date.getMonth() +1} / ${date.getFullYear()}`;
  
      let days = "";
      let int = 0
  
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div id="prev-date">${prevLastDay - x + 1}</div>`;
      }
  
      for (let i = 1; i <= lastDay; i++) {
        // const test = i < DataTime.length ? DataTime[i] : 2
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
          days += `<div id="today">${i}</div>`;
        } else {
          days += `<div id="hi">${i}</div>`;
        }
        // console.log(int)
      }
  
      for (let j = 1; j <= nextDays; j++) {
        days += `<div id="next-date">${j}</div>`;
        monthDays.innerHTML = days;
      }

      const daysData = document.querySelectorAll("#hi")
      const h1 = document.querySelector(".h1")
      const p = document.querySelector(".p")
      
      
      daysData.forEach(element => {
        for (let i of DataTime){
          for (let x of i.days){
        if (h1.innerHTML === i.month && p.innerHTML === i.year && element.innerHTML === `${x}`){
          element.classList.add("hi")
          // console.log(x)
        }
      }
      // console.log(i.month)
    }
      });
    }
  
    document.querySelector(".prev").addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
  }
  render() {
    const priv = "<"
    const next = ">"
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
            <div className="content-container p-5 ml-0">
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
                  <div  className="calender_box">
                    {/* <div className="container"> */}
                      <div style={{display:"flex"}}>
                      <div className="calendar">
                        <div>
                        <div class="weekdays">
                          <div>Sun</div>
                          <div>Mon</div>
                          <div>Tue</div>
                          <div>Wed</div>
                          <div>Thu</div>
                          <div>Fri</div>
                          <div>Sat</div>
                        </div>
                        <div class="days"></div>
                        </div>
                      </div>
                        <div style={{width: "100%", backgroundColor: "#007bff",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", borderLeft:"2px solid white"}}>
                        <div style={{position:"absolute",top:"0"}} className="month">
                          <i className="fas fa-angle-left prev">{priv}</i>
                          <div className="date">
                            <h1 className="h1"></h1>
                            <p className="p"></p>
                          </div>
                          <i class="fas fa-angle-right next">{next}</i>
                        </div>
                          <div style={{width:"90%",backgroundColor:"whitesmoke",padding:"20px", }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Tempora a placeat eum, veritatis facere sint nobis adipisci, eaque mollitia officia at? Commodi atque quisquam ratione fugiat unde earum provident, esse sunt aliquam consectetur dolorem eum dolor eius consequuntur, sequi eveniet ullam. Alias ad a in dolorum, delectus iste fugit, porro nostrum ipsa soluta qui enim distinctio dolores? Animi officia unde repellat illo eius vitae! Ratione, quo. Temporibus, impedit?
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

export default jobs;
