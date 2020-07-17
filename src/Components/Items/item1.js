import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import Form1 from "./form1";
import SubAdded from "./SubAdded";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Item1 = () => {
  const [credits, setCredits] = useState(0);
  const [indx, setindx] = useState("");
  const [grade, setGrade] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [GPA, setGPA] = useState(-1);

  const handleNewSubject = (e) => {
    //This is for rendering after recivng the props.
    //As we set this as state, it renders
    setCredits(e.credits);
    setGrade(e.grade);
    const dict = { credits: e.credits, grade: e.grade };
    setGrade(subjects.length);
    subjects.push(dict);
    handleCalculate();
  };

  //   const handleCalculate = () => {
  //     let credits = 0;
  //     let totalGPA = 0;
  //     subjects.map((ele, index) => {
  //       credits = ele.credits + totalCredits;
  //       setTotalCredits(credits);
  //     });
  //     subjects.map((ele, index) => {
  //       let currentGPA = 0;
  //       currentGPA = (ele.credits * ele.grade) / totalCredits;
  //       totalGPA = totalGPA + currentGPA;
  //     });
  //     setGPA(totalGPA / subjects.length);
  //     console.log(totalGPA);
  //     console.log(totalCredits);
  //     console.log(`grade is ${grade}`);
  //   };

  const handleCalculate = () => {
    let totalCredits = 0;
    subjects.map((ele, index) => {
      totalCredits = totalCredits + Number(ele.credits);
    });

    let points = 0;
    subjects.map((ele, index) => {
      points = points + ele.credits * ele.grade;
    });

    console.log(points);
    console.log(totalCredits);
    setGPA(points / totalCredits);
  };

  return (
    <div>
      <Form1 newItem={handleNewSubject} />
      <h1>{GPA}</h1>
      <List>
        {subjects.map((ele, index) => (
          <ListItem key={index}>
            <Typography color="textSecondary">
              <SubAdded credits={ele.credits} grade={ele.grade} />
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Item1;
