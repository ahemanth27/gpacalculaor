import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form3 from "./form3";
import CountUp from "react-countup";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  input: {
    color: "black",
  },
}));

const Item3 = () => {
  const classes = useStyles();
  const [marks, setMarks] = useState(0);
  const handleMarks = (score) => {
    let value = score;
    setMarks(score);
  };

  const calcMarks = () => {
    console.log("INSIDE CALC MARKS");
  };

  const showMarks = () => {
    let startValue = 0;
    let endValue = marks;
    return (
      <CountUp
        start={startValue}
        end={endValue}
        duration={1.75}
        separator=" "
        decimals={2}
        decimal="."
      />
    );
  };

  return (
    <>
      <Form3 getMarks={handleMarks} />

      <h1 style={{ fontSize: "3em", color: "#2d85fe" }}>
        {showMarks()}

        <span
          style={{ fontSize: "0.45em", color: "#A6A6A6", fontWeight: "400" }}
        >
          /100
        </span>
      </h1>
    </>
  );
};

export default Item3;
