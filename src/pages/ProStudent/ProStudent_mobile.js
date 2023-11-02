import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ProStudent_mobile.css";

const ProStudent_mobile = () => {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8088/students')
      .then(response => response.json())
      .then(data => {
        setStudentData(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  //All links

  const onAvatarProClick = useCallback(() => {
    window.location.href('http://localhost:3000/ProStudent');
  }, []);

  const onUserProClick = useCallback(() => {
    window.location.href('http://localhost:3000/ProStudent');
  }, []);

  const onExamStuClick = useCallback(() => {
    window.location.href('http://localhost:3000/ExStudent');
  }, []);

  const onProStuClick = useCallback(() => {
    window.location.href('http://localhost:3000/ProStudent');
  }, []);

  //use Google report => change link
  const onReportStuClick = useCallback(() => {
    window.open('http://localhost:3000/ProStudent');
  }, []);

  //logout => redirect login page
  const onLogoutBtnClick = useCallback(() => {
    window.location.href('http://localhost:3000/');
  }, []);

  return (
    <div className="iphone-14-15-pro-max-1">
      <div className="iphone-14-15-pro-max-11">
        <div className="navbar1">
          <div className="fpt1">
            <div className="fpt-inner" />
            <div className="rectangle-div" />
            <div className="exam-schedule1">
              Exam schedule management system
            </div>
            <div className="fpt-university1">FPT UNIVERSITY</div>
          </div>
          <button className="avatar1" onClick={onAvatarProClick}>
            <img className="avatar-child" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          </button>
        </div>
        <div className="left-side-menu">
          <button className="user-profile1" onClick={onUserProClick}>
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
              <button className="exams2" onClick={onExamStuClick}>
                <div className="exams-child">
                  <div className="icon-container">
                    <img className="icon2" alt="" src="/icon.svg" />
                    <div className="exams3">Exams</div>
                  </div>
                </div>
              </button>
              <button className="profile3" onClick={onProStuClick}>
                <div className="exams-child">
                  <div className="template-group">
                    <img
                      className="template-icon1"
                      alt=""
                      src="/template.svg"
                    />
                    <div className="profile4">Profile</div>
                    <div className="frame-item" />
                  </div>
                </div>
              </button>
              <button className="exams2" onClick={onReportStuClick}>
                <div className="exams-child">
                  <div className="icon-container">
                    <img className="icon2" alt="" src="/icon1.svg" />
                    <div className="reports3">Reports</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* <button className="logout3" onClick={onLogoutBtnClick}>
            <div className="logout-container">
              <b className="logout4">
                <span className="logout-txt1">
                  <p className="logout5">Logout</p>
                </span>
              </b>
            </div>
          </button> */}
          <button onClick={handleSignOut} className="logout3">
            Logout
          </button>
        </div>
        <div className="profile-parent">
          {/* pick data from backend and database */}
          <b className="profile5">Profile</b>
          <div className="student-id1">Student ID:</div>
          <div className="se173049-container">
            <div className="se1730491">{loading ? 'Loading...' : studentData?.studentID}</div>
          </div>
          <div className="full-name1">Full Name:</div>
          <div className="se173049-container">
            <div className="on-nh-tn1">{loading ? 'Loading...' : studentData?.studentName}</div>
          </div>
          <div className="student-id1">Email:</div>
          <div className="tinddse173049fpteduvn-container">
            <div className="tinddse173049fpteduvn1">
              {loading ? 'Loading...' : studentData?.studentEmail}
            </div>
          </div>
        </div>
        <div className="report-parent">
          <div className="report2">
            <div className="report-item" onClick={onReportStuClick} />
            <div className="report3">Report</div>
            <div className="image-1-container">
              <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
            </div>
          </div>
          <div className="logo-long-1-wrapper">
            <img className="logo-long-1-icon" alt="" src="/logolong-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProStudent_mobile;