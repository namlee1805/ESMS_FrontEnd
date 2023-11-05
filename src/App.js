import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Desktop_login from "./pages/LoginPage/Desktop_login";
import Moobile_login from "./pages/LoginPage/Mobile_login";
import ProStudent_Desktop from "./pages/ProStudent/ProStudent_Desktop";
import ProStudent_tablet from "./pages/ProStudent/ProStudent_tablet";
import ProStudent_mobile from "./pages/ProStudent/ProStudent_mobile";
import ProLec_Desktop from "./pages/ProLec/ProLec_Desktop";
import ProLec_tablet from "./pages/ProLec/ProLec_tablet";
import ProLec_mobile from "./pages/ProLec/ProLec_mobile";
import Proctected from "./components/Protected";
import SalaryLec_Desktop from "./pages/SalaryLec/SalaryLec_Desktop";
import CreateDataEx_Desktop from "./pages/CreateDataEx/CreateDataEx_Desktop";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      // Add more cases for other routes if needed
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  //Conditionally render the appropriate component based on screen width
  let ProfileComponent;
  if (window.innerWidth >= 1200) {
    ProfileComponent = ProStudent_Desktop;
  } else if (window.innerWidth >= 840) {
    ProfileComponent = ProStudent_tablet;
  } else {
    ProfileComponent = ProStudent_mobile;
  }

  let ProfileComponent_2;
  if (window.innerWidth >= 1200) {
    ProfileComponent_2 = ProLec_Desktop;
  } else if (window.innerWidth >= 840) {
    ProfileComponent_2 = ProLec_tablet;
  } else {
    ProfileComponent_2 = ProLec_mobile;
  }

  // let ProfileComponent_3;
  // if (window.innerWidth >= 960) {
  //   ProfileComponent_3 = SalaryLec_Desktop;
  // } else if (window.innerWidth >= 840) {
  //   ProfileComponent_3 = SalaryLec_Tablet;
  // } else {
  //   ProfileComponent_3 = SalaryLec_Mobile;
  // }

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={isMobile ? <Moobile_login /> : <Desktop_login />} />
          < Route path="/salary" element={
            <Proctected>
              <SalaryLec_Desktop />
            </Proctected>
          }
          />

          < Route path="/createDataEx" element={
            <Proctected>
              <CreateDataEx_Desktop />
            </Proctected>
          }
          />

          < Route path="/profileSt" element={
            <Proctected>
              <ProfileComponent />
            </Proctected>
          }
          />

          < Route path="/profileLe" element={
            <Proctected>
              <ProfileComponent_2 />
            </Proctected>
          }
          />
          {/* <Route path="/profile" element={isMobile ? <ProStudentMobile /> : (window.innerWidth >= 840 ? <ProStudentTablet /> : <ProStudentDesktop />)} /> */}
        </Routes>
      </AuthContextProvider>
    </div >
  );

}
export default App;