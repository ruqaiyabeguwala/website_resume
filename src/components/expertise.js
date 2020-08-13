import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: 50,
    flexGrow: 1,
    minHeight: 300,

    padding: 40,
  },
  paper: {
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    minHeight: 550,
  },

  grid: {
    margin: "auto",
    alignContent: "center",
  },
  h3: {
    color: "#676767",
    fontWeight: "bold",
    marginBottom: "30px",
    fontSize: "20px",
  },
  name: {
    textDecoration: "none",
    color: "#676767",
    fontSize: "13px",
    fontWeight: "bold",
  },

  myProgress: {
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginBottom: "15px",
  },

  myBar: {
    height: "25px",
    textAlign: "center",
    lineHeight: "25px",
    color: "white",
    borderRadius: 5,
    fontSize: "13px",
    backgroundColor: `#3c5295`,
  },
  [theme.breakpoints.down("sm")]: {
    grid: {
      // padding: "60px",
    },
    myProgress: {
      width: "200px",
    },
    paper: {
      padding: theme.spacing(3),
      fontSize: "12px",
    },
  },
}));

const languages = [
  { tech: "React/Redux", per: 85 },
  { tech: "NodeJS/ExpressJs", per: 70 },
  { tech: "MongoDB", per: 60 },
  { tech: "HTML/CSS/Bootstrap", per: 90 },
  { tech: "JavaScript", per: 80 },
];

const tools = [
  { tech: "Postman", per: 70 },
  { tech: "Git", per: 80 },
  { tech: "Chai/Mocha", per: 50 },
  { tech: "Jira", per: 75 },
  { tech: "VScode", per: 80 },
];

export default function Expertise() {
  const classes = useStyles();
  React.useEffect(() => {
    aos.init();
  }, []);
  const renderResult = (languages, side) => {
    return languages.map((lang) => {
      return (
        <div key={lang.tech} data-aos={`fade-${side}`} data-aos-duration="1000">
          <div>
            <Typography align="left" className={classes.name}>
              {lang.tech}
            </Typography>
          </div>

          <div className={classes.myProgress}>
            <div className={classes.myBar} style={{ width: `${lang.per}%` }}>
              {lang.per}%
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Paper className={classes.paper} id="expertise" variant="outlined">
      <h1>Expertise</h1>
      <Grid container style={{ marginTop: "40px" }}>
        <Grid md={3} item className={classes.grid}>
          <h3 className={classes.h3}>Languages</h3>
          {renderResult(languages, "right")}
        </Grid>
        <Grid md={3} item className={classes.grid}>
          <h3 className={classes.h3}>Tools</h3>
          {renderResult(tools, "left")}
        </Grid>
      </Grid>
    </Paper>
  );
}
