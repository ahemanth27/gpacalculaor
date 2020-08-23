import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: theme.spacing(50),
    height: theme.spacing(8),
    backgroundColor: "#F0F5FF",
    color: "#10286b",
  },
  item: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const SubAdded = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item>
          <Paper className={classes.paper} elevation={3}>
            <Grid container>
              <Grid item className={classes.item}>
                Number of Credits: {props.credits}
              </Grid>
              <Grid item className={classes.item}>
                Estimated Grade: {props.grade}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SubAdded;
