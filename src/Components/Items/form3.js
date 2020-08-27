import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";

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
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      // borderColor: "#80bdff",
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#606060",
    minHeight: "12px",
    maxHeight: "12px",
    // fontSize: "0.2rem",
    textAlign: "center",
  },

  text: {
    textAlign: "left",
    paddingTop: "0.35em",
    paddingLeft: "3em",
    fontFamily: "Nunito Sans",
  },

  button: {
    marginTop: "1.5rem",
  },

  checkbox: {
    color: "#606060",
  },

  dropDown: {
    // padding: "1rem",
    color: "#2D85FE",
  },

  title: {
    margin: "10px",
    color: "#606060",
    // marginTop: "100px",
  },
}));

const Form3 = (props) => {
  const classes = useStyles();
  const [lab, setLab] = useState(false);
  const [project, setProject] = useState(false);
  const [semNumber, setSemNumber] = useState(1);

  const calcMarks = () => {
    let semArray = [
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
    let marks = 0;
    for (let i = 0; i < semNumber; i++) {
      let add = parseFloat(document.getElementById(semArray[i]).value);
      marks = marks + add;
    }
    marks = marks / semNumber;

    props.getMarks(marks);
  };

  const showEntries = () => {
    let semArray = [
      "semester1A",
      "semester1B",
      "semester2A",
      "semester2B",
      "semester3A",
      "semester3B",
      "semester4A",
      "semester4B",
      "semester5A",
      "semester5B",
      "semester6A",
      "semester6B",
      "semester7A",
      "semester7B",
      "semester8A",
      "semester8B",
      "semester9A",
      "semester9B",
      "semester10A",
      "semester10B",
    ];

    let index = 2 * semNumber;
    let selectedSemArray = semArray.slice(0, index);

    for (let i = 0; i < semArray.length; i++) {
      document.getElementById(semArray[i]).style.display = "none";
    }

    for (let i = 0; i < selectedSemArray.length; i++) {
      document.getElementById(selectedSemArray[i]).style.display = "block";
    }
  };

  const handleSelect = (event) => {
    setSemNumber(event.target.value);
  };

  useEffect(() => {
    showEntries();
  }, [semNumber]);

  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl className={classes.margin}>
              <NativeSelect
                id="semestersDone"
                // value={age}
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
          </Grid>
          <Grid item xs={4} id={"semester1A"}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 1
            </Typography>
          </Grid>
          <Grid item xs={8} id={"semester1B"}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  // inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
                  InputProps={{ classes: { input: classes.input } }}
                  type="number"
                  id="cred1"
                  label="Credits"
                  variant="outlined"
                  size="small"
                  // className={classes.input}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  InputProps={{ classes: { input: classes.input } }}
                  type="number"
                  id="sem1"
                  label="GPA"
                  variant="outlined"
                  size="small"
                  className={classes.input}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4} id={"semester2A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 2
            </Typography>
          </Grid>
          <Grid item xs={8} id={"semester2B"}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  InputProps={{ classes: { input: classes.input } }}
                  type="number"
                  id="cred2"
                  label="Credits2"
                  variant="outlined"
                  size="small"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  InputProps={{ classes: { input: classes.input } }}
                  type="number"
                  id="sem2"
                  label="GPA"
                  variant="outlined"
                  size="small"
                  className={classes.input}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} id={"semester3A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 3
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester3B"} style={{ display: "none" }}>
            <TextField
              InputProps={{ classes: { input: classes.input } }}
              type="number"
              id="sem3"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={6} id={"semester4A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 4
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester4B"} style={{ display: "none" }}>
            <TextField
              InputProps={{ classes: { input: classes.input } }}
              type="number"
              id="sem4"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={6} id={"semester5A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 5
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester5B"} style={{ display: "none" }}>
            <TextField
              InputProps={{ classes: { input: classes.input } }}
              id="sem5"
              type="number"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={6} id={"semester6A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 6
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester6B"} style={{ display: "none" }}>
            <TextField
              InputProps={{ classes: { input: classes.input } }}
              type="number"
              id="sem6"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>

          <Grid item xs={6} id={"semester7A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 7
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester7B"} style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="sem7"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>

          <Grid item xs={6} id={"semester8A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 8
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester8B"} style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="sem8"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>

          <Grid item xs={6} id={"semester9A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 9
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester9B"} style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="sem9"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
            />
          </Grid>

          <Grid item xs={6} id={"semester10A"} style={{ display: "none" }}>
            <Typography className={classes.text} style={{ color: "#606060" }}>
              Semester 10
            </Typography>
          </Grid>
          <Grid item xs={6} id={"semester10B"} style={{ display: "none" }}>
            <TextField
              inputProps={{ style: { textAlign: "center" }, maxLength: 2 }}
              type="number"
              id="sem10"
              label="GPA"
              variant="outlined"
              size="small"
              className={classes.input}
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

export default Form3;
