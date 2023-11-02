import React, { useState, useEffect, useCallback } from "react";
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
    <div className="ipad-pro-11-1">
      <div className="ipad-pro-11-11">
        <div className="navbar2">
          <div className="fpt2">
            <div className="fpt-child1" />
            <div className="fpt-child2" />
            <div className="exam-schedule2">
              Exam schedule management system
            </div>
            <div className="fpt-university2">FPT UNIVERSITY</div>
          </div>
          <button className="avatar2" onClick={onAvatarProClick}>
            <img className="avatar-item" alt="" src={user?.photoURL} referrerPolicy="no-referrer"  />
            <div className="lecturer-name">
              <p className="lecturer">{user?.displayName}</p>
            </div>
          </button>
        </div>
        <div className="row1">
          <div className="left-side-menu1">
            <button className="user-profile2" onClick={onUserProClick}>
              <img
                className="profile-image-icon2"
                alt=""
                src={user?.photoURL} referrerPolicy="no-referrer" 
              />
              <div className="name-container">
                <b className="name4">{user?.displayName}</b>
                <div className="tittle2">{user?.email}</div>
              </div>
            </button>
            <div className="options2">
              <div className="exams-container">
                <button className="exams4" onClick={onExamStuClick}>
                  <div className="exams-inner1">
                    <div className="icon-parent1">
                      <img className="icon4" alt="" src="/icon.svg" />
                      <div className="exams5">Exams</div>
                    </div>
                  </div>
                </button>
                <button className="profile6" onClick={onProStuClick}>
                  <div className="exams-inner1">
                    <div className="template-container">
                      <img
                        className="template-icon2"
                        alt=""
                        src="/template.svg"
                      />
                      <div className="profile7">Profile</div>
                      <div className="frame-inner" />
                    </div>
                  </div>
                </button>
                <button className="reports4" onClick={onProStuClick}>
                  <div className="exams-inner1">
                    <div className="icon-parent1">
                      <img className="icon4" alt="" src="/icon1.svg" />
                      <div className="reports5">Reports</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            {/* <button className="logout6" onClick={onLogoutBtnClick}> 
              <div className="logout-frame">
                <b className="logout7">
                  <span className="logout-txt2">
                    <p className="lecturer">Logout</p>
                  </span>
                </b>
              </div>
            </button> */}
            <button onClick={handleSignOut} className="logout6">
              Logout
            </button>
          </div>
          <div className="profile-group">
            <b className="profile8">Profile</b>
            <div className="student-id2">Student ID:</div>
            <div className="se173049-frame">
              <div className="se1730492">{loading ? 'Loading...' : studentData?.studentID}</div>
            </div>
            <div className="full-name2">Full Name:</div>
            <div className="se173049-frame">
              <div className="on-nh-tn2">{loading ? 'Loading...' : studentData?.studentName}</div>
            </div>
            <div className="student-id2">Email:</div>
            <div className="tinddse173049fpteduvn-frame">
              <div className="tinddse173049fpteduvn2">
                {loading ? 'Loading...' : studentData?.studentEmail}
              </div>
            </div>
          </div>
        </div>
        <div className="report-group">
          <div className="report4">
            <button className="report-inner" onClick={onReportStuClick} />
            <div className="report5">Report</div>
            <div className="image-1-frame">
              <img className="image-1-icon2" alt="" src="/image-11@2x.png" />
            </div>
          </div>
          <div className="logo-long-1-container">
            <img
              className="logo-long-1-icon1"
              alt=""
              src="/logolong-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProLec_tablet;