import { async } from "@firebase/util";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./CreaExam.css";

const CreaExam = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [examData, setExamData] = useState({
    startDate: '',
    endDate: ''
  });

  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('success'); // 'success' or 'error'
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(examData),
      });

      if (response.ok) {
        setNotification('Exam data submitted successfully');
        setNotificationType('success');
        setShowNotification(true);
        // Reset form
        setExamData({
          startDate: '',
          endDate: ''
        });
      } else {
        // If the response is not ok, we assume it's an error
        setNotification('Failed to submit exam data');
        setNotificationType('error');
        setShowNotification(true);
      }
    } catch (error) {
      // If there is an exception during the fetch, it's also an error
      setNotification(error.message || 'An error occurred while submitting the data');
      setNotificationType('error');
      setShowNotification(true);
    }

    // Hide notification after a while
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };


  return (
    <div className="creacreaexam">
    {showNotification && (
      <div className={`creanotification ${notificationType}`}>
        {notification}
      </div>
    )}
    <div className="creanavbar">
      <div className="creafpt">
        <div className="creafpt-child" />
        <div className="creafpt-item" />
        <div className="creaframe">
          <div className="creaexam-schedule">Exam schedule management system</div>
          <div className="creafpt-university">FPT UNIVERSITY</div>
        </div>
      </div>
      <button className="creaavatar">
        <img className="creaavt-icon" alt="" src={user?.photoURL} referrerPolicy="no-referrer"/>
        <div className="creastudent-name">
          <p className="crealecturer">{user?.displayName}</p>
        </div>
      </button>
    </div>
    <div className="crearow">
      <div className="creamenu">
        <button className="creauser-profile">
          <img
            className="creaprofile-image-icon"
            alt=""
            src={user?.photoURL} referrerPolicy="no-referrer"
          />
          <div className="creaname-parent">
            <b className="creaname1">{user?.displayName}</b>
            <div className="creatittle">{user?.email}</div>
          </div>
        </button>
        <div className="creamenu1">
          <Link className="creaexams" to={"/examscheduleEx"}>
            <div className="creaframe-parent">
              <div className="createmplate-parent">
                <img className="createmplate-icon" alt="" src="/template.svg" />
                <div className="creaexams1">Exams</div>
              </div>
            </div>
          </Link>
          <Link className="creacreateexams" to={"/createExamEx"}>
            <div className="creacreateexams-inner">
              <div className="createmplate-group">
                <img className="createmplate-icon1" alt="" src="/template1 copy.svg" />
                <div className="creacreate-exams">Create Exams</div>
                <div className="creaframe-item" />
              </div>
            </div>
          </Link>
          <Link className="creacreate-data" to={"/createDataEx"}>
            <div className="creaupward-trend-parent">
              <img
                className="creaupward-trend-icon"
                alt=""
                src="/upward-trend.svg"
              />
              <div className="creacreate-data1">Create Data</div>
            </div> 
          </Link>
          <Link className="creacreate-data" to={"/editEx"}>
            <div className="creaupward-trend-parent">
              <img className="creauedit-icon" alt="" src="/uedit copy.svg" />
              <div className="creaedit1">Edit</div>
            </div>
          </Link>
        </div>
        <button onClick={handleSignOut} className="crealogout">
          <div className="crealogout-wrapper">
            <b className="crealogout1">
              <p className="crealecturer">Logout</p>
            </b>
          </div>
        </button>
      </div>
      <div className="creabody">
        <b className="creacreate-exam">Create Exam</b>
        <form onSubmit={handleSubmit} className="creaexam-form">
          <div className="creaform-group">
            <label htmlFor="startDate">Start Date:</label>
            <input 
              type="date" 
              id="startDate"
              name="startDate"
              value={examData.startDate}
              onChange={handleInputChange}
              className="creainput-style"
              required
            />
          </div>
          <div className="creaform-group">
            <label htmlFor="endDate">End Date:</label>
            <input 
              type="date" 
              id="endDate"
              name="endDate"
              value={examData.endDate}
              onChange={handleInputChange}
              className="creainput-style"
              required
            />
          </div>
          <button type="submit" className="creabtn-save">
            <img className="creauedit-icon" alt="" src="/usave.svg" />
            <b className="creasave">Save</b>
          </button>
        </form>
      </div>
    </div>
    <div className="creabot">
      <div className="creareport">
        <button className="creareport-child" />
        <div className="creareport1">Report</div>
        <div className="creaimage-1-wrapper">
          <img className="creaimage-1-icon" alt="" src="/image-1@2x.png" />
        </div>
      </div>
      <img className="crealogofpt-icon" alt="" src="/logofpt@2x.png" />
    </div>
  </div>
);
};

export default CreaExam;
