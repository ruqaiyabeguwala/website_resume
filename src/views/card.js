import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    flexGrow: 1,
    minHeight: 410,
    padding: 10,
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  txt1: {
    fontSize: "20px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 500,
    width: 400,
  },
  cardContent: {
    fontSize: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      minHeight: 200,
    },
    txt1: {
      fontSize: "15px",
    },
    txt2: {
      fontSize: "12px",
    },
    pos: {
      fontSize: "12px",
    },
    txt3: {
      fontSize: "12px",
    },
  },
}));
export default function MyCard({ name, year, desc, institute, delay }) {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Card
        className={`${classes.root}`}
        variant="outlined"
        data-aos-delay={delay}
        data-aos="fade-up"
      >
        <CardContent className={classes.cardContent}>
          <Typography color="textSecondary">
            <SchoolIcon fontSize="large" color="primary" />
          </Typography>
          <Typography className={classes.txt1}>{name}</Typography>
          <Typography color="primary" className={classes.txt2}>
            <b>{institute}</b>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {year}
          </Typography>
          <Typography variant="body2" component="p" className={classes.txt3}>
            {desc}
          </Typography>
        </CardContent>
        {/* <Button color="primary" variant="contained" onClick={handleOpen}>
          See certificate
        </Button>*/}
      </Card>

      {/** <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
     <Fade in={open}>
          <div className={classes.paper}>
           <img src={image} alt="img"width="400" height="500" />
          </div>
        </Fade>
        
      </Modal>*/}
    </div>
  );
}
