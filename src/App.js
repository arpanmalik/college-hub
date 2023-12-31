
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Scholarship from "./components/Scholarship";
import CommonApplication from "./components/CommonApplication";
import CollegeInfo from "./components/CollegeInfo";
import CollegePlacement from "./components/CollegePlacement";
import CourseAndFee from "./components/CourseAndFee";
import Admission from "./components/Admission";
import Loan from "./components/Loan";
import Gallery from "./components/Gallery";
import Scholarship2 from "./components/Scholarship2";
import ReadMore from "./components/ReadMore";
import CouncilConnect from "./components/CounsellorConnect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/screen2" element={<Screen2 />} />
         <Route path="/delhi" element={<Screen3 />} />
         <Route path="/management" element={<Screen4 />} />
         <Route path="/scholarships" element={<Scholarship />} />
         <Route path="/common-applications" element={<CommonApplication />} />
         <Route path="/college-info" element={<CollegeInfo />} />
         <Route path="/college-placement" element={<CollegePlacement />} />
         <Route path="/course-fee" element={<CourseAndFee />} />
         <Route path="/admission" element={<Admission />} />
         <Route path="/loan" element={<Loan />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/scholarship2" element={<Scholarship2 />} />
         <Route path="/read-more" element={<ReadMore />} />
         <Route path="/council-connect" element={<CouncilConnect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
