import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react"; 
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import axios from 'axios';
import './CreateDataEx_Desktop.css';

const CreateDataEx_Desktop = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async() => {
        try{
            await logOut();
        }catch(error){
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

  return (
    <div className="createdata">
      <div className="navbar">
        <div className="fpt">
          <div className="fpt-child" />
          <div className="fpt-item" />
          <div className="frame">
            <div className="exam-schedule">Exam schedule management system</div>
            <div className="fpt-university">FPT UNIVERSITY</div>
          </div>
        </div>
        <button className="avatar">
          <img className="avt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer" />
          <div className="student-name">
            <p className="student">{user?.displayName}</p>
          </div>
        </button>
      </div>
      <div className="row">
        <div className="menu">
          <button className="user-profile">
            <img
              className="profile-image-icon"
              alt=""
              src={user?.photoURL} referrerPolicy="no-referrer" 
            />
            <div className="name-parent">
              <b className="name1">{user?.displayName}</b>
              <div className="tittle">{user?.email}</div>
            </div>
          </button>
          <div className="menu1">
            <button className="exams">
              <div className="frame-parent">
                <div className="template-parent">
                  <img className="template-icon" alt="" src="/template.svg" />
                  <div className="exams1">Exams</div>
                </div>
                <div className="frame-child" />
              </div>
            </button>
            <button className="create-exams">
              <div className="upward-trend-parent">
                <img
                  className="upward-trend-icon"
                  alt=""
                  src="/upward-trend.svg"
                />
                <div className="create-exams1">Create Exams</div>
              </div>
            </button>
            <button className="createdata1">
              <div className="createdata-inner">
                <div className="template-group">
                  <img className="template-icon1" alt="" src="/template1.svg" />
                  <div className="create-data">Create Data</div>
                  <div className="frame-item" />
                </div>
              </div>
            </button>
            <button className="edit">
              <div className="upward-trend-parent">
                <img className="uedit-icon" alt="" src="/uedit.svg" />
                <div className="create-exams1">Edit</div>
              </div>
            </button>
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
          <button onClick={handleSignOut} className="logout">
              Logout
          </button>
        </div>
        <div className="body">
          <b className="create-data1">Create Data</b>
          
          <div className="lecturer">
      <div className="student-wrapper">
        <div className="student2">Student :</div>
      </div>
      <div className="frame-group">
        <div className="frame-wrapper">
          <input
            type="file"
            id="studentFileInput" // Unique ID for student
            onChange={handleFileChange(setStudentFile, setStudentFileName)}
            style={{ display: 'none' }}
            accept=".xls,.xlsx"
          />
          <div className="frame-div">
            <div className="frame-wrapper1" onClick={triggerFileInput('studentFileInput')}>
              <button className="browser-wrapper">
                <div className="browser">Browser</div>
              </button>
              <div className="file-name">{studentFileName}</div>
            </div>
          </div>
        </div>
        <div className="uexport-parent" onClick={handleUpload(studentFile, 'student')}>
          <button className="uexport-parent">
            <img className="uedit-icon" alt="" src="/uexport.svg" />
            <div className="browser">Upload</div>
          </button>
        </div>
        <div className="fidownload-parent" onClick={handleDownload('student')}>
          <button className="fidownload-parent">
            <img className="uedit-icon" alt="" src="/fidownload.svg" />
            <div className="browser">Download</div>
          </button>
        </div>
      </div>
    </div>

          <div className="lecturer">
            <div className="student-wrapper">
              <div className="student2">Lecturer :</div>
            </div>
            <div className="frame-group">
              <div className="frame-wrapper">
                <input
                  type="file"
                  id="lecturerFileInput"
                  onChange={handleFileChange(setLecturerFile, setLecturerFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="frame-div">
                  <div className="frame-wrapper1" onClick={triggerFileInput('lecturerFileInput')}>
                    <button className="browser-wrapper">
                      <div className="browser">Browser</div>
                    </button>
                  </div>
                  <div className="file-name">{lecturerFileName}</div>
                </div>

                <div className="file-name">{lecturerFileName}</div> 
              </div>
              <div className="uexport-parent" onClick={handleUpload(lecturerFile, 'lecturer')}>
                <button className="uexport-parent">
                  <img className="uedit-icon" alt="" src="/uexport.svg" />
                  <div className="browser">Upload</div>
                </button>
              </div>
              <div className="fidownload-parent" onClick={handleDownload('lecturer')}>
                <button className="fidownload-parent">
                  <img className="uedit-icon" alt="" src="/fidownload.svg" />
                  <div className="browser">Download</div>
                </button>
              </div>
            </div>
          </div>
          <div className="lecturer">
            <div className="student-wrapper">
              <div className="student2">Course :</div>
            </div>
            <div className="frame-group">
              <div className="frame-wrapper">
                <input
                  type="file"
                  id="courseFileInput"
                  onChange={handleFileChange(setCourseFile, setCourseFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="frame-div">
                  <div className="frame-wrapper1" onClick={triggerFileInput('courseFileInput')}>
                    <button className="browser-wrapper">
                      <div className="browser">Browser</div>
                    </button>
                  </div>
                  <div className="file-name">{courseFileName}</div>
                </div>
              </div>
              <div className="uexport-parent" onClick={handleUpload(courseFile, 'course')}>
                <button className="uexport-parent">
                  <img className="uedit-icon" alt="" src="/uexport.svg" />
                  <div className="browser">Upload</div>
                </button>
              </div>
              <div className="fidownload-parent" onClick={handleDownload('course')}>
                <button className="fidownload-parent">
                  <img className="uedit-icon" alt="" src="/fidownload.svg" />
                  <div className="browser">Download</div>
                </button>
              </div>
            </div>
          </div>
          <div className="lecturer">
            <div className="student-wrapper">
              <div className="student2">Room :</div>
            </div>
            <div className="frame-group">
              <div className="frame-wrapper">
                <input
                  type="file"
                  id="roomFileInput"
                  onChange={handleFileChange(setRoomFile, setRoomFileName)}
                  style={{ display: 'none' }}
                  accept=".xls,.xlsx"
                />
                <div className="frame-div">
                  <div className="frame-wrapper1" onClick={triggerFileInput('roomFileInput')}>
                    <button className="browser-wrapper">
                      <div className="browser">Browser</div>
                    </button>
                  </div>
                  <div className="file-name">{roomFileName}</div>
                </div>
              </div>
              <div className="uexport-parent" onClick={handleUpload(roomFile, 'room')}>
                <button className="uexport-parent">
                  <img className="uedit-icon" alt="" src="/uexport.svg" />
                  <div className="browser">Upload</div>
                </button>
              </div>
              <div className="fidownload-parent" onClick={handleDownload('room')}>
                <button className="fidownload-parent">
                  <img className="uedit-icon" alt="" src="/fidownload.svg" />
                  <div className="browser">Download</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="bot">
        <div className="report">
          <button className="report-child" />
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

export default CreateDataEx_Desktop;