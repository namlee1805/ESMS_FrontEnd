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
    <div className="uexamexamina">
      <div className="unavbar1">
        <div className="ufpt1">
          <div className="ufpt-inner" />
          <div className="urectangle-div" />
          <div className="uframe">
            <div className="uexam-schedule1">
              Exam schedule management system
            </div>
            <div className="ufpt-university1">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="uavatar1">
          <img className="uavt-icon" alt=""  src="avt@2x.png" />
          <div className="ustudent-name">
            <p className="ustudent">Admin</p>
          </div>
        </button>
      </div>
      <div className="urow">
        <div className="umenu">
          <button className="uuser-profile1">
            <img
              className="uprofile-image-icon1"
              alt=""
              src={user?.photoURL} referrerPolicy="no-referrer"
            />
            <div className="uname-group">
              <b className="uname2">Admin</b>
              <div className="utittle1">admin@fpt.edu.vn</div>
            </div>
          </button>
          <div className="umenu1">
            <button className="ucreatedata">
              <div className="ucreatedata-inner">
                <div className="utemplate-group">
                  <img className="utemplate-icon1" alt="" src="/template1.svg" />
                  <div className="uexams2">Exams</div>
                  <div className="uframe-item" />
                </div>
              </div>
            </button>
            <button className="ucreate-exams">
              <div className="uupward-trend-parent">
                <img
                  className="uupward-trend-icon"
                  alt=""
                  src="/createexams.svg"
                />
                <div className="ucreate-exams1">Create Exams</div>
              </div>
            </button>
            <button className="ucreate-data">
              <div className="uupward-trend-parent">
                <img
                  className="uupward-trend-icon1"
                  alt=""
                  src="/template2.svg"
                />
                <div className="ucreate-data1">Create Data</div>
              </div>
            </button>
            <button className="ucreate-data">
              <div className="uupward-trend-parent">
                <img className="uuedit-icon" alt="" src="/uedit.svg" />
                <div className="ucreate-exams1">Edit</div>
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
          <button className="ulogout3" onClick={handleSignOut}>
              <p className="ustudent">Logout</p>
          </button>
        </div>
        <div className="ubody">
          <b className="uexam-schedule2">Exam Schedule</b>
          <div className="uname3">
            <div className="ucourses">Courses</div>
            <div className="uroom">Room</div>
            <div className="udate">Date</div>
            <div className="uslot">Slot</div>
            <div className="ulecturer">Lecturer</div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
          <div className="urectangle-parent">
            <div className="uframe-inner" />
            <div className="ucsd201-parent">
              <div className="ucsd201">CSD201</div>
              <div className="udiv">302</div>
              <div className="udiv1">20/07/2023</div>
              <div className="udiv2">7:30 - 9:00</div>
              <div className="utruonglv">TruongLV</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ubot">
        <div className="ureport2">
          <button className="ureport-item" />
          <div className="ureport3">Report</div>
          <div className="uimage-1-container">
            <img className="uimage-1-icon1" alt="" src="/image-1111@2x.png" />
          </div>
        </div>
        <img className="ulogofpt-icon" alt="" src="/logofpt1@2x.png" />
      </div>
    </div>
  );
};

export default ExamExamina;