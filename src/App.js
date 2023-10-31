
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Desktop_login from "./pages/LoginPage/Desktop_login";
import Moobile_login from "./pages/LoginPage/Mobile_login";
import ProStudent_Desktop from "./pages/ProStudent/ProStudent_Desktop";
import ProStudent_tablet from "./pages/ProStudent/ProStudent_tablet";
import ProStudent_mobile from "./pages/ProStudent/ProStudent_mobile";

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

  return (
    <Routes>
      <Route path="/" element={isMobile ? <Moobile_login /> : <Desktop_login />} />
      <Route path="/profile" element={<ProfileComponent />} />
      {/* <Route path="/profile" element={isMobile ? <ProStudentMobile /> : (window.innerWidth >= 840 ? <ProStudentTablet /> : <ProStudentDesktop />)} /> */}
    </Routes>
  );

  }
export default App;