import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import imge from "./../assets/img/profile.jpeg";
import aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 23px",
    marginTop: "300px",
  },
  paper: {
    padding: theme.spacing(6),
    // margin: "50",
    //width: "100%",
    maxWidth: 1400,
    minHeight: 550,
    margin: "auto",
    marginTop: "300px",
    alignContent: "center",
  },
  img: {
    margin: "auto",
    borderRadius: "50%",
    width: 250,
    height: 250,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      marginTop: "100px",
    },
    img: {
      width: "150px",
      height: "150px",
      margin: "auto",
    },
    paper: {
      //  padding: theme.spacing(2),
      fontSize: "10px",
    },
    typo: {
      fontSize: "12px",
    },
  },
   [theme.breakpoints.down("sm")]: {
    root: {
      marginTop: "100px",
    },
    img: {
      width: "150px",
      height: "150px",
      margin: "auto",
    },
    paper: {
      //  padding: theme.spacing(2),
      fontSize: "10px",
    },
    typo: {
      fontSize: "12px",
    },
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  React.useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={classes.root} id="about">
      <Paper className={classes.paper}>
        <h1>About</h1>
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{ margin: "auto" }}
          >
            <img className={classes.img} alt="complex" src={imge} />
          </Grid>

          <Grid
            item
            md={7}
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            container
            direction="row"
            justify="center"
            alignItems="center"
            // spacing={2}
          >
            <Grid item md>
              <Typography className={classes.typo}>
                Hey There! This is <b>Ruqaiya Beguwala</b>, brought up in a small
                district but having bigger and bigger dreams for life. I love to
                travel; whether it is some City,Country or maybe in my own
                messy brain. I love to roam around in a different world as well;
                create adventures in mind through books. I cherish more and more adventures in my
                life, thats why could not stop myself to choose becoming a developer. 
                I fancy making my day complete with the
                happiness of clearing a bug or make a code work(If you are a
                developer too, I hope you understand the bliss). It has been
                great till now but I would appreciate some more adventures in my life.
                I am looking for a position as <b>MERN stack developer</b> where I can
                create some more happiness for you and afcourse for me too. If
                you have any opportunity or think someone else might have for
                me, please feel free to <b>connect</b>. I would love to work as a <b>freelancer
                </b> as well.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
