import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./EditExamina.css";

const EditExamina = () => {

    const { logOut, user } = UserAuth();


    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="aeditexamina">
            <div className="anavbar1">
                <div className="afpt1">
                    <div className="afpt-inner" />
                    <div className="arectangle-div" />
                    <div className="aframe">
                        <div className="aexam-schedule1">
                            Exam schedule management system
                        </div>
                        <div className="afpt-university1">FPT UNIVERSITY</div>
                    </div>
                </div>
                <button className="aavatar1">
                    <img className="aavt-icon" alt="" src="/ellipse-1@2x.png" />
                    <div className="astudent-name">
                        <p className="astudent">Admin</p>
                    </div>
                </button>
            </div>
            <div className="arow">
                <div className="amenu">
                    <button className="auser-profile1">
                        <img
                            className="aprofile-image-icon1"
                            alt=""
                            src="/ellipse-1@2x.png"
                        />
                        <div className="aname-group">
                            <b className="aname2">Admin</b>
                            <div className="atittle1">admin@fpt.edu.vn</div>
                        </div>
                    </button>
                    <div className="aexams-group">
                        <button className="aexams2">
                            <div className="aframe-parent">
                                <div className="atemplate-group">
                                    <img className="atemplate-icon1" alt="" src="/template1.svg" />
                                    <div className="aexams3">Exams</div>
                                </div>
                                <div className="aframe-item" />
                            </div>
                        </button>
                        {/* <button className="createexams">
              <div className="upward-trend-parent">
                <img
                  className="upward-trend-icon"
                  alt=""
                  src="/upward-trend1.svg"
                />
                <div className="create-exams">Create Exams</div>
              </div>
            </button> */}
                        <button className="aexams2">
                            <div className="aframe-parent">
                                <div className="atemplate-group">
                                    <img className="atemplate-icon1" alt="" src="/createexams.svg"
                                    />
                                    <div className="aexams3">Create Exams</div>
                                </div>
                                <div className="aframe-item" />
                            </div>
                        </button>
                        {/* <button className="create-data">
              <div className="upward-trend-parent">
                <img
                  className="upward-trend-icon1"
                  alt=""
                  src="/upward-trend11.svg"
                />
                <div className="create-data1">Create Data</div>
              </div>
            </button> */}

                        <button className="aexams2">
                            <div className="aframe-parent">
                                <div className="atemplate-group">

                                    <img className="atemplate-icon1" alt=""
                                        src="/template2.svg"
                                    />
                                    <div className="aexams3">Create Data</div>
                                </div>
                                <div className="aframe-item" />
                            </div>
                        </button>

                        <button className="aedit">
                            <div className="aedit-inner">
                                <div className="atemplate-container">
                                    <img className="atemplate-icon2" alt="" src="/template2.svg" />
                                    <div className="aedits">Edits</div>
                                    <div className="aframe-inner" />
                                </div>
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

                    <button className="alogout3" onClick={handleSignOut}>
                        <p className="student">
                            Logout
                        </p>
                    </button>
                </div>
                <div className="abody5">
                    <b className="aedit-schedule">Edit Schedule</b>
                    <div className="acourses-parent">
                        <div className="acourses">Courses</div>
                        <div className="aroom">Room</div>
                        <div className="adate">Date</div>
                        <div className="aslot">Slot</div>
                        <div className="alecturer">Lecturer</div>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="avector-container">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="aframe-button">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="avector-wrapper2">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="avector-container">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="avector-container">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <div className="arectangle-parent">
                        <div className="aframe-child1" />
                        <div className="acsd201">CSD201</div>
                        <div className="adiv">302</div>
                        <div className="adiv1">20/07/2023</div>
                        <div className="adiv2">7:30 - 9:00</div>
                        <div className="atruonglv">TruongLV</div>
                        <button className="avector-wrapper">
                            <img className="avector-icon" alt="" src="/vector.svg" />
                        </button>
                        <button className="aframe-button">
                            <img className="avector-icon1" alt="" src="/vector1.svg" />
                        </button>
                    </div>
                    <button className="abtn-save">
                        <div className="abtn-save-child" />
                        <b className="asave">Save</b>
                        <img className="ausave-icon" alt="" src="/usave.svg" />
                    </button>
                </div>
            </div>
            <div className="abot">
                <div className="areport2">
                    <button className="areport-item" />
                    <div className="areport3">Report</div>
                    <div className="aimage-1-container">
                        <img className="aimage-1-icon1" alt="" src="/image-11@2x.png" />
                    </div>
                </div>
                <img className="alogofpt-icon" alt="" src="/logofpt@2x.png" />
            </div>
        </div>
    );
};

export default EditExamina;