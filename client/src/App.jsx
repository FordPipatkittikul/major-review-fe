// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homepage";
import AllMajors from "./pages/allmajor/allmajors";
import MajorReview from "./pages/majorReview/majorReview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/majors" element={<AllMajors />} />
        <Route path="/majors/:majorName" element={<MajorReview />} /> 
      </Routes>
    </Router>
  );
}

export default App;

