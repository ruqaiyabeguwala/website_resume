import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import react from "./../assets/img/react.jpg";
import php from "./../assets/img/php.jpg";
import cert from "./../assets/img/cert.jpg";
import food from "./../assets/img/food.jpg";
import amcat from "./../assets/img/amcat.jpg";
import spot from "./../assets/img/spot.jpg";
import android from "./../assets/img/android.jpg";
import hack from "./../assets/img/hacktech.jpg";
import aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    minHeight: 550,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    margin: "auto",
    "&:hover $img": {
      transform: "scale(1.2)",
      opacity: 0.2,
      zIndex: 3,
    },
    "&:hover $overlay": {
      visibility: "visible",
      opacity: 1,
    },
  },
  img: {
    width: "270px",
    height: "200px",
    transition: "all 0.2s ease-in-out",
    backgroundColor: "#000000",
  },
  overlay: {
    visibility: "hidden",
    position: "absolute",
    margin: "60px 40px",
    transition: "0.5s ease-in-out",
    width: 200,
    height: 100,
    display: "flex",
  },
  text: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    opacity: 1,
  },

  [theme.breakpoints.down("sm")]: {
    grid: {
      // width: "200",
    },
    img: {
      width: "220px",
      height: "180px",
      margin: "auto",
    },
    paper: {
      padding: theme.spacing(3),
      fontSize: "12px",
    },
    text: {
      fontSize: "14px",
    },
    overlay: {
     margin: "45px 10px",
      //contentAlign:"center",
     // textAlign:"center"
    },
  },
}));

const tileData = [
  {
    img: react,
    title: "abc",
    text: "Completed 26 hours Full stack certification course from Udemy",
  },
  {
    img: spot,
    title: "abc",
    text: "Achieved Spot Award for excellent preformance in DXC",
  },
  {
    img: amcat,
    title: "abc",
    text:
      "Got topper certificate for AMCAT examination (quarter Nov'17- March'18)",
  },
  {
    img: android,
    title: "abc",
    cols: "1",
    text: "Completed Android certification from NIIT Bhopal with A- grade.",
  },

  {
    img: food,
    title: "abc",
    text:
      "Collected highest amount for voluntary contribution by organising a snack counter in food carnival",
  },
  {
    img: php,
    title: "abc",
    text: "Completed PHP certification from IDS Websoft, Bhopal",
  },
  {
    img: cert,
    title: "abc",
    text: "Acheived appreciation certificate for performing well in project by the client",
  },
  {
    img: hack,
    title: "abc",
    text: "Appeared in Hacktech bootcamp organised by MANIT, Bhopal",
  },
];
export default function Achievement() {
  const classes = useStyles();
  const [show, setshow] = useState(false);
  React.useEffect(() => {
    aos.init();
  }, []);

  return (
    <Paper className={classes.paper} id="achievement" variant="outlined">
      <h1 style={{ marginBottom: 50 }}>Certificates and Achievements</h1>
      <Grid
        container
        spacing={2}
        data-aos="fade-up"
        data-aos-duration="1000"
        className={classes.grid}
      >
        {tileData.map((tile) => (
          <Grid lg={3} className={classes.gridList}>
            {show && (
              <div className={classes.overlay}>
                <div className={classes.text}>{tile.text}</div>
              </div>
            )}
            <img
              src={tile.img}
              alt={tile.title}
              className={classes.img}
              onMouseOver={() => setshow(true)}
              onMouseOut={() => setshow(false)}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
