import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import TabPanel from "./Components/Tabs";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div id="title">
        <h1>GPA Calculator</h1>
        <p>
          Calculate your Semester GPA, Cumulative CGPA and Estimated Grade for a
          subject
        </p>

        <TabPanel />
      </div>
      <div
        className="footer"
        style={{
          textAlign: "center",
          marginTop: "2em",
          // position: "fixed",
          // left: "50%",
          // transform: "translate(-50%, 20%)",
        }}
      >
        <p> Made with love exclusively for VITians &#128154;</p>
      </div>
    </div>
  );
};

export default App;
