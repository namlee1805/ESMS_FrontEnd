import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Desktop_login.css";

const Desktop_login = () => {

  const { googleSignIn, user } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    }catch (error){
      console.log(error);
    }
  };

  const emailDomain = user?.email?.split("@")[1]; // Extracting domain from email


  //Authorization 
  useEffect(() => {
    if(emailDomain === "fpt.edu.vn") {
      navigate('/profileSt');
    }else if (emailDomain === "gmail.com"){
      navigate("/profileLe");
    }
  },[user]);

  const onMainButtonClick = useCallback(() => {
    window.open("localhost:8888/loginStudents");
  }, []);

  const onLoginGoogleClick = useCallback(() => {
    window.open("localhost:8888/loginStudents");
  }, []);

  return (
    <div className="desktop-try">
      <div className="main-container">
        <div className="left-side-8-column">
          <div className="login-form">
            <div className="intro">
              <div className="welcome-fpt-university">
                Welcome FPT University 👋
              </div>
              <div className="please-enter-log">
                Please enter log in details to sign in
              </div>
            </div>
            <div className="form">
              <div className="input4">
                <div className="welcome-fpt-university">Username</div>
                <input
                  className="username"
                  placeholder="Example@email.com"
                  type="text"
                />
              </div>
              <div className="input4">
                <div className="welcome-fpt-university">Password</div>
                <input
                  className="username"
                  placeholder="at least 8 characters"
                  type="password"
                />
              </div>
              <a
                className="forgot-password"
                href={`https://www.canva.com/design/DAFwFwf8Ksg/IaVVcwGakZNm2lFrMgOfQA/view?utm_content=DAFwFwf8Ksg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`}
                target="_blank"
              >
                Forgot Password?
              </a>
              <button className="main-button" onClick={onMainButtonClick}>
                <div className="sign-in2">Log in</div>
              </button>
            </div>
            <div className="social-sign-in">
              <div className="or">
                <div className="or-child" />
                <div className="welcome-fpt-university">{`Or sign in with `}</div>
                <div className="or-child" />
              </div>
              <div className="social-buttons-columns">
                {/* <button className="login-google" onClick={onLoginGoogleClick}>
                  <img className="google-icon2" alt="" src="/google2.svg" />
                  <img className="facebook-icon2" alt="" src="/facebook2.svg" />
                  <div className="sign-in-with1">Sign in with Google</div>
                </button> */}

                <GoogleButton onClick={handleGoogleSignIn}/>
              </div>
            </div>
            <img className="logo-long-2-icon" alt="" src="/logolong-2@2x.png" />
          </div>
        </div>
        <div className="art">
          <img className="login-art" alt="" src="/login-art@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Desktop_login;
