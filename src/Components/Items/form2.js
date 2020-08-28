import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#606060",
  },

  text: {
    textAlign: "left",
    paddingTop: "0.6em",
    paddingLeft: "3em",
    fontFamily: "Nunito Sans",
  },

  button: {
    marginTop: "1.5rem",
  },

  checkbox: {
    color: "#606060",
  },
}));

const Form2 = (props) => {
  const classes = useStyles();
  const [lab, setLab] = useState(false);
  const [project, setProject] = useState(false);

  const calcMarks = () => {
    let cat1 = parseFloat(document.getElementById("cat1").value);
    let cat2 = parseFloat(document.getElementById("cat2").value);
    let da = parseFloat(document.getElementById("da").value);
    let fat = parseFloat(document.getElementById("fat").value);

    let projectMarks = parseFloat(document.getElementById("project").value);
    console.log(projectMarks)
    let labMarks = parseFloat(document.getElementById("lab").value);
    console.log(labMarks)

    let marks = cat1 * 0.3 + cat2 * 0.3 + fat * 0.4 + da;

    if (project && !lab) {
      
      marks = projectMarks * (1 / 3) + marks * (2 / 3);
    } else if (lab && !project) {

      
      marks = labMarks * (1 / 3) + marks * (2 / 3);
      
      console.log(marks)
    } else if (lab && project) {

      
      marks = projectMarks * (1 / 4) + marks * (2 / 4) + lab * (1 / 4);
    }

    props.getMarks(marks);
  };

  const addProject = () => {
    if (!project) {
      //   console.log(document.getElementById("projectTab1"));
      document.getElementById("projectTab1").style.display = "block";
      document.getElementById("projectTab2").style.display = "block";
    } else {
      document.getElementById("projectTab1").style.display = "none";
      document.getElementById("projectTab2").style.display = "none";
    }

    setProject(!project);
  };
  const addLab = () => {
    if (!lab) {
      //   console.log(document.getElementById("projectTab1"));
      document.getElementById("labTab1").style.display = "block";
      document.getElementById("labTab2").style.display = "block";
    } else {
      document.getElementById("labTab1").style.display = "none";
      document.getElementById("labTab2").style.display = "none";
    }

    setLab(!lab);
  };

  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox checked={lab} onChange={addLab} name="checkedF" />
              }
              label="Add Lab Component"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={project}
                  onChange={addProject}
                  name="checkedF"
                />
              }
              label="Add J - Component"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter CAT 1 Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="cat1"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter CAT 2 Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="cat2"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter DA 1 Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="da1"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter DA 2 Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="da2"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid> */}
          <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter DA Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              id="da"
              type="number"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter FAT Marks
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="fat"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>

          <Grid item xs={6} id="labTab1" style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter Lab Marks
            </Typography>
          </Grid>
          <Grid item xs={6} id="labTab2" style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="lab"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>

          <Grid item xs={6} id="projectTab1" style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Enter Project Marks
            </Typography>
          </Grid>
          <Grid item xs={6} id="projectTab2" style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="project"
              label="Marks"
              variant="outlined"
              size="small"
              className={classes.input}
              //   onChange={(e) => setCapitalGrade(e.target.value)}
              //   onInput={toInputUppercase}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={calcMarks}
            >
              Calculate
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Form2;
