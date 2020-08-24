import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyCard from "../views/card";
//import tenth from "./../assets/img/10th.jpg"
//import twelth from "./../assets/img/12th.jpg"
//import degree from "./../assets/img/degree.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    flexGrow: 1,
    minHeight: 300,
    // border: "1px solid #005474",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },

  paper: {
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    minHeight: 550,
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      fontSize: "12px",
      padding: theme.spacing(3),
    },
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined" id="education">
      <h1>Education</h1>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid md={4}>
          <MyCard
            name="Bachelor Of Engineering"
            year=" 2014-2018(Information Technology)"
            desc=" Merit holder, got 8.4 pointers!
         Learned to live without family and surviving with Maggi!
         Created my first project 'Blood Donation Camp' with the 
         help of Institute. It was worth all the hard work. "
            institute="UIT, Barkatullah University, Bhopal(M.P.)"
            delay="0"
            // image={degree}
          />
        </Grid>
        <Grid md={4}>
          <MyCard
            name="Higher Secondary school Certificate"
            year="2013-2014"
            desc=" Achieved 91.6% !  
        Being the Head Girl ,I learned to lead all
        the students and to help them for a better environment at school. I had 
        Computer Science as my optional subject and it was the time I realised that
        coding is what will take me to the skies."
            institute="Dashpur Vidyalaya, Mandsaur (M.P.)"
            //  image={twelth}
            delay="500"
          />
        </Grid>
        <Grid md={4}>
          <MyCard
            name=" Secondary School Certificate"
            year="2011-2012"
            desc=" Got 90% ! This was the moment I had to choose a optional 
    subject and I took Computer Science without much thought; preferably 
    my best decision till now. "
            institute="Dashpur Vidyalaya, Mandsaur (M.P.)"
            delay="1000"
            // image={tenth}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
