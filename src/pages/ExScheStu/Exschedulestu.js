import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Exschedulestu.css";

const Exschedulestu = () => {


    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }


    const [studentData, setStudentData] = useState([]);
    // const [lecturerData, setLecturerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8088/students')
            .then(response => response.json())
            .then(data => {
                setStudentData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error to call API:', error);
                setLoading(false);
            });
    }, []);
    // const onProStuClick = useCallback(() => {
    //     navigate("/profileSt");
    //   }, []);


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
                            <b className="name1">{user?.displayName}</b>
                            <div className="tittle1">{user?.email}</div>
                        </div>
                    </button>
                    <div className="exam-parent">
                        <Link className="register" to={"/examscheduleStu"}>
                            <div className="register-inner">
                                <div className="icon-container">
                                    <img className="icon2" alt="" src="/icon2.svg" />
                                    <div className="exams2">Exams</div>
                                    <div className="frame-item" />
                                </div>
                            </div>
                        </Link>
                        {/* <button className="profile3" onClick={onProStuClick}>
                            <div className="homeoutline-parent">
                                <img
                                    className="homeoutline-icon"
                                    alt=""
                                    src="/homeoutline.svg"
                                />
                                <div className="profile4">Profile</div>
                            </div>
                        </button> */}

                        <Link className="profile3" to={"/profileSt"}>
                            <div className="homeoutline-parent">
                                <img
                                    className="homeoutline-icon"
                                    alt=""
                                    src="/homeoutline.svg"
                                />
                                <div className="profile4">Profile</div>
                            </div>
                        </Link>

                        <Link className="profile3" to={"/reportSt"}>
                            <div className="homeoutline-parent">
                                <img
                                    className="upward-trend-icon"
                                    alt=""
                                    src="/icon1.svg"
                                />
                                <div className="profile4">Reports</div>
                            </div>
                        </Link>
                    </div>
                    {/* <button className="logout3">
                        <div className="logout-container">
                            <b className="logout4">
                                <p className="logout5">Logout</p>
                            </b>
                        </div>
                    </button> */}
                    <button onClick={handleSignOut} className="logout3">
                        <p className="logout5">
                        Logout
                        </p>
                    </button>
                </div>
                <div className="body">
                    <b className="exam-schedule2">Exam Schedule</b>
                    <div className="courses-parent">
                        <div className="courses">Courses</div>
                        <div className="room">Room</div>
                        <div className="date">Date</div>
                        <div className="slot">Slot</div>
                        <div className="status">Status</div>
                    </div>
                    {/* <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="not-yet">Not Yet</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="csd201-parent">
                            <div className="csd201">CSD201</div>
                            <div className="div">302</div>
                            <div className="div1">20/07/2023</div>
                            <div className="div2">7:30 - 9:00</div>
                            <div className="done">Done</div>
                        </div> */}
                        <div>
            {/* Render danh sách khuôn mẫu */}
            {studentData && studentData.length > 0 ? (
              studentData.map((studentData, index) => (
                <div className="rectangle-parent" key={index}>
                  <div className="frame-inner" />
                  <div className="csd201-parent">
                    <div className="csd201">{loading ? 'Loading...' : studentData.stuexschCourse}</div>
                    <div className="div">{loading ? 'Loading...' : studentData.stuexschRoom}</div>
                    <div className="div1">{loading ? 'Loading...' : studentData.stuexschDate}</div>
                    <div className="div2">{loading ? 'Loading...' : studentData.stuexschTime}</div>
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
                        <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
                    </div>
                </div>
                <img className="logofpt-icon" alt="" src="/logolong-1@2x.png" />
            </div>
        </div>
    );
};

export default Exschedulestu;