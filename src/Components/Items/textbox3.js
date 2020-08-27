import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#606060",
    minHeight: "5px",
    maxHeight: "12px",
    // fontSize: "5px",
    textAlign: "center",
  },
  grid: {
    marginBottom: "1rem",
  },

  text: {
    textAlign: "left",
    paddingTop: "0.35em",
    paddingLeft: "3em",
    fontFamily: "Nunito Sans",
  },
}));

const Textbox3 = (props) => {
  const [credits, setCredits] = useState(false);
  const [GPA, setGPA] = useState(false);
  const [sendDetails, setSendDetails] = useState(0);
  const [indx, setIndx] = useState(props.indx);

  const handleSendDetails = (values) => {
    props.sendValues(values);
  };

  useEffect(() => {
    if (credits & GPA) {
      handleSendDetails({ credits: credits, GPA: GPA, indx: indx });
    }
  }, [credits, GPA]);

  const handleCredits = (event) => {
    let value = event.target.value;
    setCredits(value);
  };

  const handleGPA = (event) => {
    let value = event.target.value;
    setGPA(value);
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.grid}>
        <Grid item xs={4} id={"semester1A"}>
          <Typography className={classes.text} style={{ color: "#606060" }}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={8} id={"semester1B"}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                InputProps={{ classes: { input: classes.input } }}
                type="number"
                id="credits"
                label="Credits"
                variant="outlined"
                size="small"
                onBlur={handleCredits}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                InputProps={{ classes: { input: classes.input } }}
                type="number"
                id="gpa"
                label="GPA"
                variant="outlined"
                size="small"
                onBlur={handleGPA}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Textbox3;
