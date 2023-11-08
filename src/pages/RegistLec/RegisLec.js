
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
    <div className="jregislec">
      <div className="jnavbar1">
        <div className="jfpt1">
          <div className="jfpt-inner" />
          <div className="jrectangle-div" />
          <div className="jframe">
            <div className="jexam-schedule1">
              Exam schedule management system
            </div>
            <div className="jfpt-university1">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="javatar1">
          <img className="javt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          <div className="jstudent-name">
            <p className="jstudent">{user?.displayName}</p>
          </div>
        </button>
      </div>
      <div className="jrow">
        <div className="jmenu">
          <button className="juser-profile1">
            <img
              className="jprofile-image-icon1"
              alt=""
              src={user?.photoURL} referrerPolicy="no-referrer"
            />
            <div className="jname-group">
              <b className="jname2">{user?.displayName}</b>
              <div className="jtittle1">{user?.email}</div>
            </div>
          </button>
          <div className="joptions1">
            <div className="jexams-group">
              <button className="jexams2">
                <div className="jexams-child">
                  <div className="jicon-container">
                    <img
                      className="jhomeoutline-icon"
                      alt=""
                      src="/icon4.svg" 
                    />
                    <div className="jexams3">Exams</div>
                  </div>
                </div>
              </button>
              <button className="jprofile3">
                <div className="jhomeoutline-parent">
                  <img
                    className="jhomeoutline-icon"
                    alt=""
                    src="/homeoutline.svg"
                  />
                  <div className="jprofile4">Profile</div>
                </div>
              </button>
              <button className="jregister">
                <div className="jexams-child">
                  <div className="jupward-trend-parent">
                    <img
                      className="jupward-trend-icon"
                      alt=""
                      src="/upward-trend1.svg"
                    />
                    <div className="jregister1">Register</div>
                    <div className="jframe-item" />
                  </div>
                </div>
              </button>
              <button className="jsalary">
                <div className="jexams-child">
                  <div className="jicon-container">
                    <img
                      className="jhomeoutline-icon"
                      alt=""
                      src="/fidollarsign.svg" 
                    />
                    <div className="jprofile4">Salary</div>
                  </div>
                </div>
              </button>
              <button className="jexams2">
                <div className="jexams-child">
                  <div className="jicon-container">
                    <img className="jhomeoutline-icon" alt="" src="/icon5.svg"  />
                    <div className="jprofile4">Reports</div>
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
          <button className="jlogout3" onClick={handleSignOut}>
            <p className="jstudent">
                Logout
            </p>
          </button>
        </div>
        <div className="jbody">
          <b className="jregister2">Register</b>
          <div className="jname3">
            <div className="jdate">Date</div>
            <div className="jslot">Slot</div>
            <div className="jhour">Hour</div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <div className="jop1">
            <div className="jrectangle-parent">
              <div className="jframe-inner" />
              <div className="jframe-child1" />
              <div className="jdiv">27/07/2023</div>
              <div className="jdiv1">7:00 - 8:30</div>
              <div className="jh30">1h30</div>
              <button className="jellipse-parent">
                <div className="jgroup-child" />
                <div className="jgroup-item" />
                <b className="jchoose">Choose</b>
                <img className="jvector-icon" alt="" src="/choose.svg" />
              </button>
            </div>
          </div>
          <button className="jbtn-submit">
            <div className="jjoin-today">Submit</div>
          </button>
        </div>
      </div>
      <div className="jbot">
        <div className="jreport2">
          <button className="jreport-item" />
          <div className="jreport3">Report</div>
          <div className="jimage-1-container">
            <img className="jimage-1-icon1" alt=""src="/image-11@2x.png"/>
          </div>
        </div>
        <img className="jlogofpt-icon" alt="" src="/logolong-11@2x.png" />
      </div>
    </div>
  );
};

export default RegisLec;
