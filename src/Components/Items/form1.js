import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
  },
  input: {
    margin: 5,
  },
  button: {
    marginTop: -6,
    color: "#2d85fe",
  },
}));

const Form1 = (props) => {
  const [capitalGrade, setCapitalGrade] = useState("");
  const classes = useStyles();
  const handleAdd = () => {
    const credits = document.getElementById("credits").value;
    const grade = document.getElementById("grade").value;
    props.newItem({ credits, grade });
  };

  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          id="credits"
          label="Credits"
          type="number"
          variant="outlined"
          size="small"
          className={classes.input}
        />
        <TextField
          inputProps={{ style: { textAlign: "center" }, maxLength: 1 }}
          id="grade"
          label="Grade"
          variant="outlined"
          size="small"
          className={classes.input}
          onChange={(e) => setCapitalGrade(e.target.value)}
          onInput={toInputUppercase}
        />
        <IconButton
          // color="primary"
          aria-label="add an alarm"
          className={classes.button}
          onClick={handleAdd}
        >
          <AddCircleSharpIcon fontSize="large" />
        </IconButton>
      </form>
    </>
  );
};

export default Form1;
