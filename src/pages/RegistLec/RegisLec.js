
import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext"; import "./RegisLec.css";

const RegisLec = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChooseClick = (index) => {
    // Xóa phần tử tại vị trí index khỏi mảng lecturerData
    const updatedData = [...lecturerData];
    updatedData.splice(index, 1);
    setLecturerData(updatedData);
  };




  const [lecturerData, setLecturerData] = useState([]);
  // const [lecturerData, setLecturerData] = useState(null);
  const [loading, setLoading] = useState(true);



  const handleButtonClick = async () => {
    setLoading(true);
    console.log(localStorage.getItem("email"));
    console.log(lecturerData.lecSlotID);

    try {
      const response = await fetch('http://localhost:8888/viewexamlecturer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: user?.displayName,
          lecSlotID: lecturerData?.lecSlotID,
        }),
      });

      if (response.ok) {
        console.log('Dữ liệu đã được gửi đến API thành công.');
        // Thực hiện các hành động khi gửi dữ liệu thành công (nếu cần)
      } else {
        console.error('Gửi dữ liệu đến API không thành công.');
        // Thực hiện các hành động khi gửi dữ liệu không thành công (nếu cần)
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu đến API:', error);
      // Thực hiện các hành động khi xảy ra lỗi (nếu cần)
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetch('http://localhost:8888/viewexamadmin')
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

  const onReportClick = useCallback(() => {
    window.open('https://forms.gle/fCCNqjzx7UHx5X8Y6');
  }, []);

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
              <Link className="jexams2" to={"/examscheduleLec"}>
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
              </Link>
              <Link className="jprofile3" to={"/profileLe"}>
                <div className="jhomeoutline-parent">
                  <img
                    className="jhomeoutline-icon"
                    alt=""
                    src="/homeoutline.svg"
                  />
                  <div className="jprofile4">Profile</div>
                </div>
              </Link>
              <Link className="jregister" to={"/registerLec"}>
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
              </Link>
              <Link className="jsalary" to={"/salary"}>
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
              </Link>
              <Link className="jexams2" to={"/reportLec"}>
                <div className="jexams-child">
                  <div className="jicon-container">
                    <img className="jhomeoutline-icon" alt="" src="/icon5.svg" />
                    <div className="jprofile4">Reports</div>
                  </div>
                </div>
              </Link>
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
          {/* <div className="jop1">
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
          </div> */}


          <div className="bodyregisLec">
            {lecturerData && lecturerData.length > 0 ? (
              lecturerData.map((lecturerData, index) => (
                <div className="jop1" key={index}>
                  <div className="jrectangle-parent">
                    <div className="jframe-inner" />
                    <div className="jframe-child1" />
                    <div className="jdiv">{loading ? 'Loading...' : lecturerData.Date}</div>
                    <div className="jdiv1">{loading ? 'Loading...' : lecturerData.Time}</div>
                    <div className="jh30">{loading ? 'Loading...' : lecturerData.Hour}</div>
                    <button className="jellipse-parent"
                      onClick={() => handleChooseClick(index)}>
                      <div className="jgroup-child" />
                      <div className="jgroup-item" />
                      <button className="jchoose" onClick={() => handleChooseClick(index)}>Choose</button>
                      <img className="jvector-icon" alt="" src="/choose.svg" />
                    </button>
                  </div>
                </div>
              )))
              : (
                <div>No data available</div>
              )}
          </div>

          <button className="jbtn-submit" onClick={handleButtonClick} disabled={loading}>
            <div className="jjoin-today">{loading ? 'Loading...' : 'Submit'}</div>
          </button>

        </div>
      </div>
      <div className="jbot">
        <div className="jreport2">
          <button className="jreport-item" onClick={onReportClick} />
          <div className="jreport3">Report</div>
          <div className="jimage-1-container">
            <img className="jimage-1-icon1" alt="" src="/image-11@2x.png" />
          </div>
        </div>
        <img className="jlogofpt-icon" alt="" src="/logolong-11@2x.png" />
      </div>
    </div>
  );
};

export default RegisLec;