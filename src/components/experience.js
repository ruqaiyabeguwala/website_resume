import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import aos from "aos";
import "aos/dist/aos.css";
import mystyle from "./../assets/css/experienceStyle.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: 50,
    minHeight: 250,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  paper: {
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    minHeight: 550,
  },
  logo: {
    width: 90,
    height: 40,
    alignContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      padding: theme.spacing(3),
      fontSize: "12px",
    },
  },
}));

export default function Experience() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <Paper
      className={classes.paper}
      variant="outlined"
      id="experience"
      style={mystyle}
    >
      <h1>Experience</h1>

      <Card
        variant="outlined"
        id="card"
        className="card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="content">
          <Typography color="primary" className="logo" >
            <WorkIcon fontSize="large"/>
          </Typography>
          <Typography
            justify="center"
            className="txt"
            //  variant="h5"
            //  component="h2"
          >
            DXC Technology
          </Typography>
          <Typography color="textSecondary" className="txt">
            Nov 2018 - Now
          </Typography>
          <Typography variant="body2" component="p" className="hover_content">
            <p>
              Working for <b>Lincoln Financial group</b> in the organization. It
              is a huge project but in laymen terms LFG deals with all types of
              insurance products; whether it is Life Insurance or Term
              Insurance or Annuities. I work with the Life team. My role in the
              project is towards enhancement; by changing UI using HTML, CSS, Bootstrap
              etc., managing and changing state using ReactJs and Redux and unit testing 
              using Jest and Enzyme. 
            </p>
          </Typography>
        </div>
      </Card>
    </Paper>
  );
}
