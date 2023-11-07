
import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react"; 
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";import "./RegisLec.css";

const RegisLec = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async() => {
      try{
        await logOut();
      }catch(error){
        console.log(error);
      }
    }
  
  return (
    <div className="regislec">
      <div className="navbar1">
        <div className="fpt1">
          <div className="fpt-inner" />
          <div className="rectangle-div" />
          <div className="frame">
            <div className="exam-schedule1">
              Exam schedule management system
            </div>
            <div className="fpt-university1">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="avatar1">
          <img className="avt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          <div className="student-name">
            <p className="student">{user?.displayName}</p>
          </div>
        </button>
      </div>
      <div className="row">
        <div className="menu">
          <button className="user-profile1">
            <img
              className="profile-image-icon1"
              alt=""
              src={user?.photoURL} referrerPolicy="no-referrer"
            />
            <div className="name-group">
              <b className="name2">{user?.displayName}</b>
              <div className="tittle1">{user?.email}</div>
            </div>
          </button>
          <div className="options1">
            <div className="exams-group">
              <button className="exams2">
                <div className="exams-child">
                  <div className="icon-container">
                    <img
                      className="homeoutline-icon"
                      alt=""
                      src="/icon4.svg" 
                    />
                    <div className="exams3">Exams</div>
                  </div>
                </div>
              </button>
              <button className="profile3">
                <div className="homeoutline-parent">
                  <img
                    className="homeoutline-icon"
                    alt=""
                    src="/homeoutline.svg"
                  />
                  <div className="profile4">Profile</div>
                </div>
              </button>
              <button className="register">
                <div className="exams-child">
                  <div className="upward-trend-parent">
                    <img
                      className="upward-trend-icon"
                      alt=""
                      src="/upward-trend1.svg"
                    />
                    <div className="register1">Register</div>
                    <div className="frame-item" />
                  </div>
                </div>
              </button>
              <button className="salary">
                <div className="exams-child">
                  <div className="icon-container">
                    <img
                      className="homeoutline-icon"
                      alt=""
                      src="/fidollarsign.svg" 
                    />
                    <div className="profile4">Salary</div>
                  </div>
                </div>
              </button>
              <button className="exams2">
                <div className="exams-child">
                  <div className="icon-container">
                    <img className="homeoutline-icon" alt="" src="/icon5.svg"  />
                    <div className="profile4">Reports</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* <button className="logout3">
            <div className="logout-container">
              <b className="logout4">
                <p className="student">Logout</p>
              </b>
            </div>
          </button> */}
          <button className="logout3" onClick={handleSignOut}>
            <p className="student">
                Logout
            </p>
          </button>
        </div>
        <div className="body">
          <b className="register2">Register</b>
          <div className="name3">
            <div className="date">Date</div>
            <div className="slot">Slot</div>
            <div className="hour">Hour</div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="op1">
            <div className="rectangle-parent">
              <div className="frame-inner" />
              <div className="frame-child1" />
              <div className="div">27/07/2023</div>
              <div className="div1">7:00 - 8:30</div>
              <div className="h30">1h30</div>
              <button className="ellipse-parent">
                <div className="group-child" />
                <div className="group-item" />
                <b className="choose">Choose</b>
                <img className="vector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <button className="btn-submit">
            <div className="join-today">Submit</div>
          </button>
        </div>
      </div>
      <div className="bot">
        <div className="report2">
          <button className="report-item" />
          <div className="report3">Report</div>
          <div className="image-1-container">
            <img className="image-1-icon1" alt=""src="/image-11@2x.png"/>
          </div>
        </div>
        <img className="logofpt-icon" alt="" src="/logolong-11@2x.png" />
      </div>
    </div>
  );
};

export default RegisLec;
