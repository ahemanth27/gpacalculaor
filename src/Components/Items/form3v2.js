import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";

import Textbox3 from "./textbox3";
import "./form3.css";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 30,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 15,
    fontWeight: 800,
    padding: "10px 13px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  textbox: { display: "none" },
  dropDown: { marginBottom: "20px", color: "#2D85FE" },
  button: {
    marginTop: "1.5rem",
  },
}));

const Form3 = (props) => {
  const classes = useStyles();

  const [semNumber, setSemNumber] = useState(1);

  const [sentArray, setSentArray] = useState([]);

  const [denominator, setDenominator] = useState(1);

  const handleSelect = (event) => {
    setSemNumber(event.target.value);
  };

  const showEntries = () => {
    let ids = [
      "sem1",
      "sem2",
      "sem3",
      "sem4",
      "sem5",
      "sem6",
      "sem7",
      "sem8",
      "sem9",
      "sem10",
    ];

    let index = semNumber;
    let selectedIds = ids.slice(0, index);

    for (let i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).style.display = "none";
    }

    for (let i = 0; i < selectedIds.length; i++) {
      document.getElementById(selectedIds[i]).style.display = "block";
    }
  };

  const handleSendValues = (values) => {
    let sentCredits = parseInt(values.credits);
    let sentGPA = parseInt(values.GPA);
    let sentIndx = parseInt(values.indx) - 1;
    let score = sentCredits * sentGPA;

    let newArray = [...sentArray];
    newArray[sentIndx] = score;

    setSentArray(newArray);
  };

  const calcMarks = () => {
    let score = 0;
    for (let i = 0; i < sentArray.length; i++) {
      console.log(sentArray[i]);
      score = score + sentArray[i];
    }

    score = score / sentArray.length;

    props.getMarks(score);
  };

  useEffect(() => {
    showEntries();
  }, [semNumber]);
  return (
    <div>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="semestersDone"
          onChange={handleSelect}
          input={<BootstrapInput />}
          className={classes.dropDown}
        >
          <option value={1}>1 Semester Done</option>
          <option value={2}>2 Semester Done</option>
          <option value={3}>3 Semester Done</option>
          <option value={4}>4 Semester Done</option>
          <option value={5}>5 Semester Done</option>
          <option value={6}>6 Semester Done</option>
          <option value={7}>7 Semester Done</option>
          <option value={8}>8 Semester Done</option>
          <option value={9}>9 Semester Done</option>
          <option value={10}>10 Semester Done</option>
        </NativeSelect>
      </FormControl>
      <div style={{ color: "#606060" }}>
        <div className={classes.textbox} id={"sem1"}>
          <Textbox3 title="Semester 1" indx="1" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem2"}>
          <Textbox3 title="Semester 2" indx="2" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem3"}>
          <Textbox3 title="Semester 3" indx="3" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem4"}>
          <Textbox3 title="Semester 4" indx="4" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem5"}>
          <Textbox3 title="Semester 5" indx="5" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem6"}>
          <Textbox3 title="Semester 6" indx="6" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem7"}>
          <Textbox3 title="Semester 7" indx="7" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem8"}>
          <Textbox3 title="Semester 8" indx="8" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem9"}>
          <Textbox3 title="Semester 9" indx="9" sendValues={handleSendValues} />
        </div>
        <div className={classes.textbox} id={"sem10"}>
          <Textbox3
            title="Semester 10"
            indx="10"
            sendValues={handleSendValues}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={calcMarks}
        >
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default Form3;
