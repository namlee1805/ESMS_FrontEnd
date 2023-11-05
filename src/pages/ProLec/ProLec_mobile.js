import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ProLec_mobile.css";

const ProLec_mobile = () => {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [lecturerData, setLecturerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8088/students')
      .then(response => response.json())
      .then(data => {
        setLecturerData(data);
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
    <div className="phone-prolecturer">
      <div className="phone-prolecturer1">
        <div className="navbar7">
          <div className="fpt7">
            <div className="fpt-child11" />
            <div className="fpt-child12" />
            <div className="exam-schedule7">
              Exam schedule management system
            </div>
            <div className="fpt-university7">FPT UNIVERSITY</div>
          </div>
          <button className="avatar7">
            <img className="avatar-child2" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          </button>
        </div>
        <div className="left-side-menu5">
          <button className="user-profile7">
            <img
              className="profile-image-icon7"
              alt=""
              src={user?.photoURL} 
              referrerPolicy="no-referrer"
            />
            <div className="name-parent5">
              <b className="name11">{user?.displayName}</b>
              <div className="tittle7">{user?.email}</div>
            </div>
          </button>
          <div className="exams-parent2">
            <button className="inbox">
              <div className="profile-child">
                <div className="fidollar-sign-parent">
                  <img className="fidollar-sign-icon" alt="" src="/icon2.svg" />
                  <div className="exams15">Exams</div>
                </div>
              </div>
            </button>
            <button className="profile9">
              <div className="profile-child">
                <div className="template-parent8">
                  <img
                    className="template-icon10"
                    alt=""
                    src="/homeoutline.svg"
                  />
                  <div className="profile10">Profile</div>
                  <div className="frame-child22" />
                </div>
              </div>
            </button>
            <button className="inbox">
              <div className="profile-child">
                <div className="fidollar-sign-parent">
                  <img
                    className="upward-trend-icon6"
                    alt=""
                    className="upward-trend-icon8"
                  />
                  <div className="register7">Register</div>
                </div>
              </div>
            </button>
            <button className="inbox">
              <div className="profile-child">
                <div className="fidollar-sign-parent">
                  <img
                    className="fidollar-sign-icon"
                    alt=""
                    src="/fidollarsign.svg"
                  />
                  <div className="salary12">Salary</div>
                </div>
              </div>
            </button>
            <button className="inbox">
              <div className="profile-child">
                <div className="fidollar-sign-parent">
                  <img className="fidollar-sign-icon" alt="" src="/icon5.svg" />
                  <div className="reports8">Reports</div>
                </div>
              </div>
            </button>
          </div>
          {/* <button className="logout21">
            <div className="logout-wrapper5">
              <b className="logout22">
                <span className="logout-txt4">
                  <p className="logout23">Logout</p>
                </span>
              </b>
            </div>
          </button> */}
          <button onClick={handleSignOut} className="logout21">
            Logout
          </button>
        </div>
        <div className="body4">
          <b className="profile11">Profile</b>
          <div className="phone">Lecturer ID:</div>
          <div className="se173049-container">
            <div className="se1730491">{loading ? 'Loading...' : lecturerData?.lecturerID}</div>
          </div>
          <div className="full-name1">Full Name:</div>
          <div className="se173049-container">
            <div className="on-nh-tn1">{loading ? 'Loading...' : lecturerData?.lecturerName}</div>
          </div>
          <div className="phone">Email:</div>
          <div className="tinddse173049fpteduvn-container">
            <div className="tinddse173049fpteduvn1">
            {loading ? 'Loading...' : lecturerData?.lecturerEmail}
            </div>
          </div>
          <div className="phone">Phone:</div>
          <div className="tinddse173049fpteduvn-container">
            <div className="tinddse173049fpteduvn1">{loading ? 'Loading...' : lecturerData?.lecturerPhone}</div>
          </div>
        </div>
        <div className="bot6">
          <div className="report14">
            <div className="report-child4" />
            <div className="report15">Report</div>
            <div className="image-1-wrapper5">
              <img className="image-1-icon7" alt="" src="/image-11@2x.png" />
            </div>
          </div>
          <div className="logo1">
            <img
              className="logo-long-1-icon5"
              alt=""
              src="/logolong-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProLec_mobile;