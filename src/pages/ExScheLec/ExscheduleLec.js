import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./ExscheduleLec.css";

const ExscheduleLec = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }


  const [lecturerData, setLecturerData] = useState([]);
  // const [lecturerData, setLecturerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8088/students')
      .then(response => response.json())
      .then(data => {
        setLecturerData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error to call API:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="exschedulelec">
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
          <div className="register-parent">
            <Link className="register" to={"/examscheduleLec"}>
              <div className="register-inner">
                <div className="icon-container">
                  <img className="icon2" alt="" src="/icon2.svg" />
                  <div className="exams2">Exams</div>
                  <div className="frame-item" />
                </div>
              </div>
            </Link>
            <Link className="profile3" to={"/profileLe"}>
              <div className="homeoutline-parent">
                <img
                  className="homeoutline-icon"
                  alt=""
                  src="/homeoutline.svg"
                />
                <div className="profile4">Profile</div>
              </div>
            </Link>
            <Link className="profile3" to={"/registerLec"}>
              <div className="homeoutline-parent">
                <img
                  className="upward-trend-icon"
                  alt=""
                  src="/upward-trend.svg"
                />
                <div className="profile4">Register</div>
              </div>
            </Link>
            <Link className="salary" to={"/salary"}>
              <div className="register-inner">
                <div className="fidollar-sign-parent">
                  <img
                    className="homeoutline-icon"
                    alt=""
                    src="/fidollarsign.svg"
                  />
                  <div className="profile4">Salary</div>
                </div>
              </div>
            </Link>
            <Link className="salary" to={"/reportLec"}>
              <div className="register-inner">
                <div className="fidollar-sign-parent">
                  <img className="homeoutline-icon" alt="" src="/icon3.svg" />
                  <div className="profile4">Reports</div>
                </div>
              </div>
            </Link>
          </div>
          {/* <button className="logout3">
            <div className="logout-container">
              <b className="logout4">
                <p className="student">Logout</p>
              </b>
            </div>
          </button> */}
          <button onClick={handleSignOut} className="logout3">
            <p className="student">Logout</p>
          </button>
        </div>
        <div className="body">
          <b className="exam-schedule2">Exam Schedule</b>
          <div className="courses-parent">
            <div className="courses">Courses</div>
            <div className="room">Room</div>
            <div className="date">Date</div>
            <div className="slot">Slot</div>
          </div>
          {/* <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <div className="csd201-parent">
              <div className="csd201">CSD201</div>
              <div className="div">302</div>
              <div className="div1">20/07/2023</div>
              <div className="div2">7:30 - 9:00</div>
              <button className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <button className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </button>
            </div>
          </div> */}

          <div>
            {/* Render danh sách khuôn mẫu */}
            {lecturerData && lecturerData.length > 0 ? (
              lecturerData.map((lecturerData, index) => (
                <div className="rectangle-parent" key={index}>
                  <div className="frame-inner" />
                  <div className="csd201-parent">
                    <div className="csd201">{loading ? 'Loading...' : lecturerData.lecexschCourse}</div>
                    <div className="div">{loading ? 'Loading...' : lecturerData.lecexschRoom}</div>
                    <div className="div1">{loading ? 'Loading...' : lecturerData.lecexschDate}</div>
                    <div className="div2">{loading ? 'Loading...' : lecturerData.lecexschTime}</div>
                    <button className="vector-wrapper">
                      <img className="vector-icon" alt="" src="/vector.svg" />
                    </button>
                    <button className="vector-container">
                      <img className="vector-icon1" alt="" src="/vector1.svg" />
                    </button>
                  </div>
                  </div>
                  )))
                  : (
                  <div>No data available</div>
              )}
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

      export default ExscheduleLec;