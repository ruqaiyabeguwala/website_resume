import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Parallax from "./Parallax";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import style from "./../assets/jss/parallaxStyle";
import { Button } from "@material-ui/core";
import aos from "aos";
import "aos/dist/aos.css";
import LoadingOverlay from "react-loading-overlay";

const useStyles = makeStyles(style);
export default function FrontPage(props) {
  const [loading, setLoading] = React.useState(true);
  const { ...rest } = props;
  const classes = useStyles();
  useEffect(() => {
    setLoading(false);
    aos.init({ duration: 2000 });
  }, []);
  return (
    <LoadingOverlay
      spinner
      active={loading}
      text="Loading your content..."
      id="up"
    >
      <Header
        brand="RUQAIYA BEGUWALA"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
        {...rest}
      />

      <Parallax
        image={require("../assets/img/giphy3.gif")}
        //   style={mystyle}
        className="front"
      >
        <div className={classes.write} id="wrap">
          <h1
            
            className={classes.h}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="500"
          >
            Full Stack developer
          </h1>
          <h2 data-aos="zoom-in" data-aos-delay="1000">
            Can work with ReactJs , NodeJs and MongoDB!{" "}
          </h2>
          <Button
            className={classes.btn}
            target="_blank"
            size="large"
            variant="contained"
            color="primary"
            data-aos="zoom-in"
            data-aos-delay="1500"
            href="https://drive.google.com/file/d/12SUaCpEToXZ8Lmvl1Hof6K-rey9f14Bu/view?usp=sharing"
          >
            <CloudDownloadIcon /> Download resume
          </Button>
        </div>
      </Parallax>
    </LoadingOverlay>
  );
}
