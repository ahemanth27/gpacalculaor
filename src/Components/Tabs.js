import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Item1 from "./Items/item1";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  outerGrid: {
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    background: "white",
    color: "black",
    // padding: 10,
    paddingLeft: "50px",
    borderRadius: 10,
    width: "560px",
    marginBottom: "100px",
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.outerGrid}>
          <Paper className={classes.paper}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab
                value="one"
                label="Semester GPA"
                wrapped
                {...a11yProps("one")}
              />
              <Tab value="two" label="Subject Grade " {...a11yProps("two")} />
              <Tab
                value="three"
                label="CGPA Estimator"
                {...a11yProps("three")}
              />
            </Tabs>

            <TabPanel value={value} index="one">
              <Item1 />
            </TabPanel>
            <TabPanel value={value} index="two">
              <p style={{ color: "black" }}>
                This Feature is Under Construction &#129365;
              </p>
            </TabPanel>
            <TabPanel value={value} index="three">
              <p style={{ color: "black" }}>
                This Feature is also Under Construction &#129365;
              </p>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
