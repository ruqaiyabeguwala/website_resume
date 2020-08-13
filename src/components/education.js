import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Stepper, Step, StepConnector, StepLabel } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import aos from "aos";
import "aos/dist/aos.css";

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
    // zIndex: 1,
    marginTop: "15px",
    color: "#fff",
    width: 20,
    height: 20,
    // display: 'flex',
    borderRadius: "50%",
  },
});
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 25,

    "& $line": {
      backgroundImage: "linear-gradient(15deg, #cccccc 0%, #414141 74%)",
    },
  },
  line: {
    height: 2,
    border: 0,

    margin: "0px 5px",
    //  backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();

  const icons = {};

  return <div className={clsx(classes.root)}>{icons[String(props.icon)]}</div>;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    minHeight: 550,
  },
  content: {
    width: 300,
    align: "center",
    padding: "20px",
    transition: "backgroundColor 2s linear 1s ease-in",
    "&:hover": {
      backgroundColor: "#cccccc",
      //  color:"#fff",
      borderRadius: 10,
      //  opacity:0.5
    },
  },
  [theme.breakpoints.down("lg")]: {
    content: {
      width: "100",
    },
  },
}));

function getSteps() {
  return [
    {
      name: " Secondary School Certificate",
      year: "2011-2012",
      desc:
        " Got 90% ! This was the moment I had to choose a optional subject and I took Computer Science,without much thought;preferably my best decision till now. ",
      institute: "Dashpur Vidyalaya, Mandsaur (M.P.)",
    },
    {
      name: "Higher Secondary school Certificate",
      year: "2013-2014",
      desc:
        " Achieved 91.6% !  Being the Head Girl ,I learned to lead all the students and to help them for a better environment at school. I had Computer Science as my optional subject and it was the time I realised that coding is what will take me to the skies.",
      institute: "Dashpur Vidyalaya, Mandsaur (M.P.)",
    },
    {
      name: "Bachelor Of Engineering",
      year: " 2014-2018(Information Technology)",
      desc:
        " Merit holder, got 8.4 pointers! Learned to live without family and surviving with Maggi!  Created my first project 'Blood Donation Camp' with the help of Institute. It was worth all the hard work. ",
      institute: "UIT, Barkatullah University, Bhopal(M.P.)",
    },
  ];
}

export default function CustomizedSteppers() {
  // const [orientation, setorientation] = React.useState("horizontal");
  const classes = useStyles();
  let delay = 0;
  const steps = getSteps();
  React.useEffect(() => {
    aos.init();
  }, []);
  // if (window.innerWidth < 900) return setorientation("vertical");
  return (
    <Paper className={classes.paper} variant="outlined" id="education">
      {console.log("window size", window.innerWidth)}
      <h1>Education</h1>
      <Stepper
        alternativeLabel
        // orientation="vertical"
        style={{ width: "100px" }}
        connector={<ColorlibConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              // orientation="vertical"
            ></StepLabel>
            {(delay = index * 500)}
            <div
              className={classes.content}
              data-aos="zoom-in"
              data-aos-delay={delay}
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <Typography variant="h6">
                <b>{step.name}</b>
              </Typography>
              <Typography color="primary">
                <b>{step.institute}</b>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {step.year}
              </Typography>
              <Typography variant="body2" component="p">
                {step.desc}
              </Typography>
            </div>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
