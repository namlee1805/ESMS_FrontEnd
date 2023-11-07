import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ExamExamina.css";

const ExamExamina = () => {

  const { logOut, user } = UserAuth();


  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="examexamina">
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
          <img className="avt-icon" alt=""  src="avt@2x.png" />
          <div className="student-name">
            <p className="student">Admin</p>
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
              <b className="name2">Admin</b>
              <div className="tittle1">admin@fpt.edu.vn</div>
            </div>
          </button>
          <div className="menu1">
            <button className="createdata">
              <div className="createdata-inner">
                <div className="template-group">
                  <img className="template-icon1" alt="" src="/template1.svg" />
                  <div className="exams2">Exams</div>
                  <div className="frame-item" />
                </div>
              </div>
            </button>
            <button className="create-exams">
              <div className="upward-trend-parent">
                <img
                  className="upward-trend-icon"
                  alt=""
                  src="/createexams.svg"
                />
                <div className="create-exams1">Create Exams</div>
              </div>
            </button>
            <button className="create-data">
              <div className="upward-trend-parent">
                <img
                  className="upward-trend-icon1"
                  alt=""
                  src="/template2.svg"
                />
                <div className="create-data1">Create Data</div>
              </div>
            </button>
            <button className="create-data">
              <div className="upward-trend-parent">
                <img className="uedit-icon" alt="" src="/uedit.svg" />
                <div className="create-exams1">Edit</div>
              </div>
            </button>
          </div>
          {/* <button className="logout3">
            <div className="logout-container">
              <b className="logout4">
                <p className="student">Logout</p>
              </b>
            </div>
          </button> */}
          <button className="logout3" onClick={handleSignOut}>
              <p className="student">Logout</p>
          </button>
        </div>
        <div className="body">
          <b className="exam-schedule2">Exam Schedule</b>
          <div className="name3">
            <div className="courses">Courses</div>
            <div className="room">Room</div>
            <div className="date">Date</div>
            <div className="slot">Slot</div>
            <div className="lecturer">Lecturer</div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <div className="truonglv">TruongLV</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="report2">
          <button className="report-item" />
          <div className="report3">Report</div>
          <div className="image-1-container">
            <img className="image-1-icon1" alt="" src="/image-1111@2x.png" />
          </div>
        </div>
        <img className="logofpt-icon" alt="" src="/logofpt1@2x.png" />
      </div>
    </div>
  );
};

export default ExamExamina;