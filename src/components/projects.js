import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Grid from "@material-ui/core/Grid";
import aos from "aos";
import "aos/dist/aos.css";
import blood from "./../assets/img/bloodss.png";
import wb from "./../assets/img/wb.png";
import clg from "./../assets/img/clg.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import med from "./../assets/img/medical.jpg";
import style from "./../assets/css/imgOverlay.css";

const tutorialSteps = [
  {
    label: "Blood Bank",
    desc:
      "This project was designed to make blood donation and retrieval process online. The needy person need not go bank-to-bank in search of blood.",
    imgPath: blood,
    href: "https://github.com/ruqaiyabeguwala/bloodbank_website",
    hl1: "Created with HTML,CSS,Bootstrap,PHP and MYSQL | Android",
    hl2: "It can donate you blood by booking an appointment on nearby hospital",
    hl3:
      "It can retrieve information about blood avaiable in nearby hospitals and book an appointment to collect",
    hl4:
      "Upon successfull blood donation, you receive a appriciation certificate",
    hl5: "It also consists of an android application for easy access",
  },
  {
    label: "Medical Store",
    desc:
      "This has been created for my own Medical store in Pratapgarh ,Rajasthan to keep track for all medicines in the stock.",
    href: "https://github.com/ruqaiyabeguwala/shagunMedicalStore",
    imgPath: med,
    hl1: "Created with HTML,CSS,Bootstrap,PHP and MYSQL",
    hl2:
      "Manage in and out of medicines on a single click(let you know the total profit there only)",
    hl3: "Show expired medicines with alert",
    hl4: "Download full report of expenses on single click",
    hl5: "Search for any medicine and with its detail(and expiry date)",
  },
  {
    label: "College Insights",
    href: "https://github.com/ruqaiyabeguwala/college_insights",
    desc:
      "This website was designed to manage the college assets and to provide a easy access for teachers and students",
    imgPath: clg,
    hl1:
      "Created with ReactJs, ReactStrap, Redux, NodeJs, ExpressJs and MongoDB",
    hl2: "It keep track of all students with their attendances",
    hl3: "It also keep track of all teachers and their respective classes",
    hl4:
      "Manages overall attendance percentage, which when go less than 75%, alert their parents",
    hl5: "Provided 3rd party login with Google and Facebook",
  },
  {
    label: "Website Resume",
    href: "https://github.com/ruqaiyabeguwala/website_resume",
    desc:
      "As the name clears, this website deals with all the aspects of my life related to Coding.",
    imgPath: wb,
    hl1: "Created with ReactJS and Material UI ",
    hl2:
      "Consist of full specification of my education, experience, expertise, projects and achievements ",
    hl3: "Direct link to all of my social accounts (or email)",
    hl4: "Download my resume on a single click",
    hl5: "You can directly send me a message (Contact section). ",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 550,
    flexGrow: 1,
    padding: theme.spacing(6),

    width: "1400",
    margin: "30px 23px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(6),
    backgroundColor: "#3c5295",
    margin: "5px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  },
  img: {
    height: 300,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    // margin: "auto",
    // align: "center",
    // padding: "30px",
  },
  btn: {
    background: "#3c5295",
    color: "white",
    margin: "10px",
  },
  li: {
    textAlign: "left",
    fontStyle: "italic",
    //   fontWeight: "bold",
  },
  [theme.breakpoints.down("sm")]: {
    li: {
      fontSize: "13px",
    },
    root: {
      padding: theme.spacing(3),
      fontSize: "12px",
    },
    btn: {
      width: 100,
      height: 50,
      fontSize: "12px",
    },
  },
}));

function SwipeableTextMobileStepper() {
  useEffect(() => {
    aos.init({
      duration: 3000,
    });
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Paper
      className={classes.root}
      variant="outlined"
      id="project"
      style={style}
    >
      <h1>Projects</h1>
      <Paper
        square
        elevation={0}
        className={classes.header}
        data-aos="flip-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Typography style={{ textAlign: "center" }}>
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ background: "#eceeec" }}
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        {tutorialSteps.map((step, index) => (
          <Grid container className="row" style={{ minHeight: "350px" }}>
            <Grid
              sm={5}
              key={step.label}
              id="snip0015"
              style={{ alignContent: "center", margin: "auto" }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
              <div id="figcaption">
                <h2>Description</h2>
                <p>{step.desc}</p>
              </div>
            </Grid>
            <Grid sm={6}>
              <div style={{ margin: "10px", alignContent: "center" }}>
                <p
                  style={{
                    color: "#3c5295",
                    //  textAlign: "left",
                    marginTop: 30,
                    marginBottom: 0,
                    fontWeight: "bold",
                  }}
                >
                  <h3>Highlights</h3>
                </p>
                <ul className={classes.li}>
                  <li>{step.hl1}</li>
                  <li>{step.hl2}</li>
                  <li>{step.hl3}</li>
                  <li>{step.hl4}</li>
                  <li>{step.hl5}</li>
                </ul>
              </div>
              <Button
                variant="contained"
                className={classes.btn}
                href={step.href}
                target="_blank"
              >
                Open project <GitHubIcon />
              </Button>
            </Grid>
          </Grid>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Paper>
  );
}

export default SwipeableTextMobileStepper;
