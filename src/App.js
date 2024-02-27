import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Webstory from "./Webstory";
import ReactSlick from "./ReactSlick";

function App() {
  return (
    <>
      <Router>
        <div>
          <Webstory />

          <Routes>
            <Route path="/reactslick" element={<ReactSlick />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
