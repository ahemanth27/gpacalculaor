import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import TabPanel from "./Components/Tabs";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div id="title">
        <h1>GPA Calculator</h1>
        <p>Calculate your sem GPA, overall CGPA, estimated GPA</p>

        <TabPanel />
      </div>
    </div>
  );
};

export default App;
