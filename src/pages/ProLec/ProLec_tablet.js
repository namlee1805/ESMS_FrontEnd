import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ProLec_tablet.css";

const ProLec_tablet = () => {

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
    <div className="ipad-prolecturer">
      <div className="ipad-prolecturer1">
        <div className="navbar8">
          <div className="fpt8">
            <div className="fpt-child13" />
            <div className="fpt-child14" />
            <div className="exam-schedule8">
              Exam schedule management system
            </div>
            <div className="fpt-university8">FPT UNIVERSITY</div>
          </div>
          <button className="avatar8">
            <img className="avatar-child3" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
            <div className="lecturer-name2">
              <p className="lecturer7">{user?.displayName}</p>
            </div>
          </button>
        </div>
        <div className="row4">
          <div className="left-side-menu6">
            <button className="user-profile8">
              <img
                className="profile-image-icon8"
                alt=""
                src={user?.photoURL} referrerPolicy="no-referrer" 
              />
              <div className="name-parent6">
                <b className="name13">{user?.displayName}</b>
                <div className="tittle8">{user?.email}</div>
              </div>
            </button>
            <div className="exams-parent3">
              <button className="exams16">
                <div className="register-child">
                  <div className="fidollar-sign-group">
                    <img className="icon10" alt="" src="/icon4.svg" />
                    <div className="exams17">Exams</div>
                  </div>
                </div>
              </button>
              <button className="profile12">
                <div className="register-child">
                  <div className="template-parent9">
                    <img
                      className="template-icon11"
                      alt=""
                      src="/homeoutline.svg"
                    />
                    <div className="profile13">Profile</div>
                    <div className="frame-child23" />
                  </div>
                </div>
              </button>
              <button className="exams16">
                <div className="register-child">
                  <div className="fidollar-sign-group">
                    <img
                      className="upward-trend-icon7"
                      alt=""
                      src="/upward-trend1.svg"
                    />
                    <div className="exams17">Register</div>
                  </div>
                </div>
              </button>
              <button className="exams16">
                <div className="register-child">
                  <div className="fidollar-sign-group">
                    <img className="icon10" alt="" src="/fidollarsign.svg" />
                    <div className="salary14">Salary</div>
                  </div>
                </div>
              </button>
              <button className="exams16">
                <div className="register-child">
                  <div className="fidollar-sign-group">
                    <img className="icon10" alt="" src="/icon5.svg" />
                    <div className="salary14">Reports</div>
                  </div>
                </div>
              </button>
            </div>
            {/* <button className="logout24">
              <div className="logout-wrapper6">
                <b className="logout25">
                  <span className="logout-txt5">
                    <p className="lecturer7">Logout</p>
                  </span>
                </b>
              </div>
            </button> */}
            <button onClick={handleSignOut} className="logout24">
              Logout
            </button>
          </div>
          <div className="body5">
            <b className="profile14">Profile</b>
            <div className="lecturer-id">Lecturer ID:</div>
            <div className="se173049-frame">
              <div className="se1730492">{loading ? 'Loading...' : lecturerData?.lecturerID}</div>
            </div>
            <div className="full-name2">Full Name:</div>
            <div className="se173049-frame">
              <div className="on-nh-tn2">{loading ? 'Loading...' : lecturerData?.lecturerName}</div>
            </div>
            <div className="lecturer-id">Email:</div>
            <div className="tinddse173049fpteduvn-frame">
              <div className="tinddse173049fpteduvn2">
              {loading ? 'Loading...' : lecturerData?.lecturerEmail}
              </div>
            </div>
            <div className="lecturer-id">Phone:</div>
            <div className="tinddse173049fpteduvn-frame">
              <div className="tinddse173049fpteduvn2">{loading ? 'Loading...' : lecturerData?.lecturerPhone}</div>
            </div>
          </div>
        </div>
        <div className="bot7">
          <div className="report16">
            <button className="report-child5" />
            <div className="report17">Report</div>
            <div className="image-1-wrapper6">
              <img className="image-1-icon8" alt="" src="/image-11@2x.png" />
            </div>
          </div>
          <div className="logo-long-1-wrapper2">
            <img
              className="logo-long-1-icon6"
              alt=""
              src="/logolong-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProLec_tablet;