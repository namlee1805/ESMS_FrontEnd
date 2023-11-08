import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import axios from 'axios';
import './CreateDataEx_Desktop.css';

const CreateDataEx_Desktop = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  // States for Student
  const [studentFile, setStudentFile] = useState(null);
  const [studentFileName, setStudentFileName] = useState('');

  // States for Lecturer
  const [lecturerFile, setLecturerFile] = useState(null);
  const [lecturerFileName, setLecturerFileName] = useState('');

  const [courseFile, setCourseFile] = useState(null);
  const [courseFileName, setCourseFileName] = useState('');

  // States for Room
  const [roomFile, setRoomFile] = useState(null);
  const [roomFileName, setRoomFileName] = useState('');

  // Common function to handle file selection
  const handleFileChange = (setFile, setFileName) => (event) => {
    const file = event.target.files[0];
    const validExtensions = ['.xls', '.xlsx'];
    const fileExtension = file?.name.slice(((file?.name.lastIndexOf(".") - 1) >>> 0) + 2);

    if (file && validExtensions.includes('.' + fileExtension)) {
      setFile(file);
      setFileName(file.name);
    } else {
      alert('Please select an Excel file.');
      setFile(null);
      setFileName('');
    }
  };

  // Common function to handle file upload
  const handleUpload = (file, role) => async () => {
    if (!file) {
      alert(`Please select a file for ${role} first`);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Replace with your backend endpoint for the respective role
      const response = await axios.post(`your-backend-endpoint/${role}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(`File for ${role} uploaded successfully: ` + response.data.message);
    } catch (error) {
      alert(`Error uploading file for ${role}: ` + error.message);
    }
  };

  // Common function to handle file download
  const handleDownload = (role) => async () => {
    try {
      // Replace with your backend endpoint for the respective role
      const response = await axios.get(`your-backend-endpoint-for-download/${role}`, {
        responseType: 'blob',
      });

      const file = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const fileURL = URL.createObjectURL(file);
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', `${role}.xlsx`);
      document.body.appendChild(fileLink);
      fileLink.click();
      fileLink.remove();
      URL.revokeObjectURL(fileURL);
    } catch (error) {
      alert(`Error downloading file for ${role}: ` + error.message);
    }
  };

  // Function to trigger the file input
  const triggerFileInput = (inputId) => () => {
    document.getElementById(inputId).click();
  };

  const onReportClick = useCallback(() => {
    window.open('https://forms.gle/fCCNqjzx7UHx5X8Y6');
  }, []);

  return (
    <div className="qcreatedata">
      <div className="qnavbar">
        <div className="qfpt">
          <div className="qfpt-child" />
          <div className="qfpt-item" />
          <div className="qframe">
            <div className="qexam-schedule">Exam schedule management system</div>
            <div className="qfpt-university">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="qavatar">
          <img className="qavt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          <div className="qstudent-name">
            <p className="qstudent">{user?.displayName}</p>
          </div>
        </button>
      </div>
      <div className="qrow">
        <div className="qmenu">
          <button className="quser-profile">
            <img
              className="qprofile-image-icon"
              alt=""
              src={user?.photoURL} referrerPolicy="no-referrer"
            />
            <div className="qname-parent">
              <b className="qname1">{user?.displayName}</b>
              <div className="qtittle">{user?.email}</div>
            </div>
          </button>
          <div className="qmenu1">
            <Link className="qexams" to={"/exscheduleExami"}>
              <div className="qframe-parent">
                <div className="qtemplate-parent">
                  <img className="qtemplate-icon" alt="" src="/template.svg" />
                  <div className="qexams1">Exams</div>
                </div>
              </div>
            </Link>
            <Link className="qcreate-exams" to={"/createExamEx"}>
              <div className="qupward-trend-parent">
                <img
                  className="qupward-trend-icon"
                  alt=""
                  src="/upward-trend.svg"
                />
                <div className="qcreate-exams1">Create Exams</div>
              </div>
            </Link>
            <Link className="qcreatedata1" to={"/createDataEx"}>
              <div className="qcreatedata-inner">
                <div className="qtemplate-group">
                  <img className="qtemplate-icon1" alt="" src="/template1 copy.svg" />
                  <div className="qcreate-data">Create Data</div>
                  <div className="qframe-item" />
                </div>
              </div>
            </Link>
            <Link className="qedit" to={"/editExamina"}>
              <div className="qupward-trend-parent">
                <img className="quedit-icon" alt="" src="/uedit.svg" />
                <div className="qcreate-exams1">Edit</div>
              </div>
            </Link>
          </div>
          {/* <button className="logout">
            <div className="logout-wrapper">
              <b className="logout1">
                <span className="logout-txt">
                  <p className="student">Logout</p>
                </span>
              </b>
            </div>
          </button> */}
          <button onClick={handleSignOut} className="qlogout">
            Logout
          </button>
        </div>
        <div className="qbody">
          <b className="qcreate-data1">Create Data</b>

          <div className="qlecturer">
            <div className="qstudent-wrapper">
              <div className="qstudent2">Student :</div>
            </div>
            <div className="qframe-group">
              <div className="qframe-wrapper">
                <input
                  type="file"
                  id="studentFileInput" // Unique ID for student
                  onChange={handleFileChange(setStudentFile, setStudentFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="qframe-div">
                  <div className="qframe-wrapper1" onClick={triggerFileInput('studentFileInput')}>
                    <button className="qbrowser-wrapper">
                      <div className="qbrowser">Browser</div>
                    </button>
                    <div className="qfile-name">{studentFileName}</div>
                  </div>
                </div>
              </div>
              <div className="quexport-parent" onClick={handleUpload(studentFile, 'student')}>
                <button className="quexport-parent">
                  <img className="quedit-icon" alt="" src="/uexport.svg" />
                  <div className="qbrowser">Upload</div>
                </button>
              </div>
              <div className="qfidownload-parent" onClick={handleDownload('student')}>
                <button className="qfidownload-parent">
                  <img className="quedit-icon" alt="" src="/fidownload.svg" />
                  <div className="qbrowser">Download</div>
                </button>
              </div>
            </div>
          </div>

          <div className="qlecturer">
            <div className="qstudent-wrapper">
              <div className="qstudent2">Lecturer :</div>
            </div>
            <div className="qframe-group">
              <div className="qframe-wrapper">
                <input
                  type="file"
                  id="lecturerFileInput"
                  onChange={handleFileChange(setLecturerFile, setLecturerFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="qframe-div">
                  <div className="qframe-wrapper1" onClick={triggerFileInput('lecturerFileInput')}>
                    <button className="qbrowser-wrapper">
                      <div className="qbrowser">Browser</div>
                    </button>
                  </div>
                  <div className="qfile-name">{lecturerFileName}</div>
                </div>

                <div className="qfile-name">{lecturerFileName}</div>
              </div>
              <div className="quexport-parent" onClick={handleUpload(lecturerFile, 'lecturer')}>
                <button className="quexport-parent">
                  <img className="quedit-icon" alt="" src="/uexport.svg" />
                  <div className="qbrowser">Upload</div>
                </button>
              </div>
              <div className="qfidownload-parent" onClick={handleDownload('lecturer')}>
                <button className="qfidownload-parent">
                  <img className="quedit-icon" alt="" src="/fidownload.svg" />
                  <div className="qbrowser">Download</div>
                </button>
              </div>
            </div>
          </div>
          <div className="qlecturer">
            <div className="qstudent-wrapper">
              <div className="qstudent2">Course :</div>
            </div>
            <div className="qframe-group">
              <div className="qframe-wrapper">
                <input
                  type="file"
                  id="courseFileInput"
                  onChange={handleFileChange(setCourseFile, setCourseFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="qframe-div">
                  <div className="qframe-wrapper1" onClick={triggerFileInput('courseFileInput')}>
                    <button className="qbrowser-wrapper">
                      <div className="qbrowser">Browser</div>
                    </button>
                  </div>
                  <div className="qfile-name">{courseFileName}</div>
                </div>
              </div>
              <div className="quexport-parent" onClick={handleUpload(courseFile, 'course')}>
                <button className="quexport-parent">
                  <img className="quedit-icon" alt="" src="/uexport.svg" />
                  <div className="qbrowser">Upload</div>
                </button>
              </div>
              <div className="qfidownload-parent" onClick={handleDownload('course')}>
                <button className="qfidownload-parent">
                  <img className="quedit-icon" alt="" src="/fidownload.svg" />
                  <div className="qbrowser">Download</div>
                </button>
              </div>
            </div>
          </div>
          <div className="qlecturer">
            <div className="qstudent-wrapper">
              <div className="qstudent2">Room :</div>
            </div>
            <div className="qframe-group">
              <div className="qframe-wrapper">
                <input
                  type="file"
                  id="roomFileInput"
                  onChange={handleFileChange(setRoomFile, setRoomFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="qframe-div">
                  <div className="qframe-wrapper1" onClick={triggerFileInput('roomFileInput')}>
                    <button className="qbrowser-wrapper">
                      <div className="qbrowser">Browser</div>
                    </button>
                  </div>
                  <div className="qfile-name">{roomFileName}</div>
                </div>
              </div>
              <div className="quexport-parent" onClick={handleUpload(roomFile, 'room')}>
                <button className="quexport-parent">
                  <img className="quedit-icon" alt="" src="/uexport.svg" />
                  <div className="qbrowser">Upload</div>
                </button>
              </div>
              <div className="qfidownload-parent" onClick={handleDownload('room')}>
                <button className="qfidownload-parent">
                  <img className="quedit-icon" alt="" src="/fidownload.svg" />
                  <div className="qbrowser">Download</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="qbot">
        <div className="qreport">
          <button className="qreport-child" onClick={onReportClick}/>
          <div className="qreport1">Report</div>
          <div className="qimage-1-wrapper">
            <img className="qimage-1-icon" alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <img className="qlogofpt-icon" alt="" src="/logofpt@2x.png" />
      </div>
    </div>
  );
};

export default CreateDataEx_Desktop;