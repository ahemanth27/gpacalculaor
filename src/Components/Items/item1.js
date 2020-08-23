import React, { useState } from "react";

import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import Form1 from "./form1";
import SubAdded from "./SubAdded";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CountUp from "react-countup";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const Item1 = () => {
  const [credits, setCredits] = useState(0);
  const [indx, setindx] = useState("");
  const [grade, setGrade] = useState(0);
  const [points, setPoints] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [GPA, setGPA] = useState("");
  const [PrevGPA, setPrevGPA] = useState(0);
  const [update, setUpdate] = useState("");

  const handleNewSubject = (e) => {
    //This is for rendering after recivng the props.
    //As we set this as state, it renders
    setCredits(e.credits);
    let AlphaGrade = e.grade;
    let NumberGrade = 10;

    switch (AlphaGrade) {
      case "S":
        NumberGrade = 10;
        break;
      case "A":
        NumberGrade = 9;
        break;
      case "B":
        NumberGrade = 8;
        break;
      case "C":
        NumberGrade = 7;
        break;
      case "D":
        NumberGrade = 6;
        break;
      case "E":
        NumberGrade = 5;
        break;
      case "F":
        NumberGrade = 0;
        break;
      case "N":
        NumberGrade = 0;
        break;
    }

    setGrade(NumberGrade);

    const dict = {
      credits: e.credits,
      DisplayGrade: AlphaGrade,
      grade: NumberGrade,
    };
    setUpdate(subjects.length); //For re-rendering
    subjects.push(dict);

    handleCalculate(subjects);
  };

  const handleDel = (id) => {
    let updatedSubjects = [...subjects];
    updatedSubjects.splice(id, 1);

    setSubjects(updatedSubjects);
    handleCalculate(updatedSubjects);
  };

  const handleCalculate = (subjects) => {
    setPrevGPA(GPA);

    let totalCredits = 0;
    subjects.map((ele, index) => {
      totalCredits = totalCredits + Number(ele.credits);
    });

    let points = 0;
    subjects.map((ele, index) => {
      points = points + ele.credits * ele.grade;
    });

    let result = points / totalCredits;
    result = +result.toFixed(2);
    console.log("CALCULATED");
    console.log(result);
    setGPA(result);
  };

  const getCGPA = () => {
    if (isNaN(GPA)) {
      return "";
    } else {
      return GPA;
    }
  };

  const showCGPA = () => {
    let startValue = PrevGPA;
    let endValue = getCGPA();
    return (
      <CountUp
        start={startValue}
        end={endValue}
        duration={2.75}
        separator=" "
        decimals={2}
        decimal="."

        // suffix=" left"
      />
    );
  };

  return (
    <div>
      <Form1 newItem={handleNewSubject} />
      <h1 style={{ fontSize: "3em", color: "#2d85fe" }}>
        {showCGPA()}
        <span
          style={{ fontSize: "0.45em", color: "#A6A6A6", fontWeight: "400" }}
        >
          {" "}
          /10
        </span>
      </h1>

      <List>
        {subjects.map((ele, index) => (
          <ListItem key={index}>
            <Typography color="textSecondary">
              <SubAdded credits={ele.credits} grade={ele.DisplayGrade} />
            </Typography>

            <IconButton aria-label="delete" onClick={() => handleDel(index)}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Item1;
