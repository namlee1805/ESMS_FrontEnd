import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ProStudent_Desktop.css";

const ProStudent_Desktop = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(localStorage.getItem("email"));
  const disable = localStorage.getItem("email");
  useEffect(() => {

    if (disable) {
      fetch(`http://localhost:8888/profileStudent?email=${disable}`)
        .then(response => response.json())
        .then(data => {
          setStudentData(data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
        });
    }

  }, [disable]);


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
    <div className="prostudent">
      <div className="navbar">
        <div className="fpt">
          <div className="fpt-child" />
          <div className="fpt-item" />
          <div className="frame">
            <div className="exam-schedule">Exam schedule management system</div>
            <div className="fpt-university">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="avatar" onClick={onAvatarProClick}>
          <img className="avt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          <div className="student-name">
            <p className="student">{user?.displayName}</p>
          </div>
        </button>
      </div>
      <div className="row">
        <div className="menu">
          <button className="user-profile" onClick={onUserProClick}>
            <img
              className="profile-image-icon"
              alt=""
              src={user?.photoURL}
              referrerPolicy="no-referrer"
            />
            <div className="name-parent">
              <b className="name1">{user?.displayName}</b>
              <div className="tittle">{user?.email}</div>
            </div>
          </button>
          <div className="options">
            <div className="exams-parent">
              <Link className="exams" to={"/examscheduleStu"}>
                <div className="exams-inner">
                  <div className="icon-parent">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="exams1">Exams</div>
                  </div>
                </div>
              </button>
              <button className="profile" onClick={onProStuClick}>
                <div className="exams-inner">
                  <div className="template-parent">
                    <img className="template-icon" alt="" src="/template.svg" />
                    <div className="profile1">Profile</div>
                    <div className="frame-child" />
                  </div>
                </div>
              </button> */}


                <button className="register">
                  <div className="register-inner">
                    <div className="icon-container">
                      <img className="icon2" alt="" src="/icon2.svg" />
                      <div className="exams2">Profile</div>
                      <div className="frame-item" />
                    </div>
                  </div>
                </button>
                <button className="reports" onClick={onReportStuClick}>
                  <div className="exams-inner">
                    <div className="icon-group">
                      <img className="icon1" alt="" src="/icon1.svg" />
                      <div className="reports1">Reports</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            {/* <button className="logout" onClick={onLogoutBtnClick}>
            <div className="logout-wrapper">
              <b className="logout1">
                <span className="logout-txt">
                  <p className="student">Logout</p>
                </span>
              </b>
            </div>
          </button> */}
          <button onClick={handleSignOut} className="logout">
            Logout
          </button>
        </div>
        <div className="body">
          <b className="profile2">Profile</b>
          <div className="student-id">Student ID:</div>
          <div className="se173049-wrapper">
            <div className="se173049">{loading ? 'Loading...' : studentData?.studentID}</div>
          </div>
          <div className="full-name">Full Name:</div>
          <div className="se173049-wrapper">
            <div className="on-nh-tn">{loading ? 'Loading...' : studentData?.studentName}</div>
          </div>
          <div className="student-id">Email:</div>
          <div className="tinddse173049fpteduvn-wrapper">
            <div className="tinddse173049fpteduvn">
              {loading ? 'Loading...' : studentData?.studentEmail}
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="report">
          <button className="report-child" onClick={onReportStuClick}/>
          <div className="report1">Report</div>
          <div className="image-1-wrapper">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <img className="logofpt-icon" alt="" src="/logofpt@2x.png" />
      </div>
    </div>
  );
};

      export default ProStudent_Desktop;