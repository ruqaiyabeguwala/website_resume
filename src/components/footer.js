/*eslint-disable*/
import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import aos from "aos";
import "aos/dist/aos.css";
import myStyle from "./../assets/css/footerStyle.css";

const useStyles = makeStyles((theme) => ({
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
  },
  list: {
    textAlign: "left",
    marginLeft: "20px",
  },

  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    //borderRadius: "3px",
    lineHeight: "20px",

    margin: "0px",
    //display: "inline-block",
  },
  [theme.breakpoints.down("sm")]: {
    list: {
      fontSize: "12px",
    },
  },
}));

export default function HeaderLinks() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  const classes = useStyles();
  return (
    <footer class="footer-distributed" style={myStyle}>
      <div class="footer-right">
        <a href="mailto:ruqaiya.beguwala@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/ruqaiya-beguwala-859136121">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/ruquaiya/">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/its_ruqaiya__/">
          <InstagramIcon />
        </a>
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <Link to="about" class="link-1" smooth={true} duration={1500}>
            About
          </Link>

          <Link to="education" smooth={true} duration={1500}>
            Education
          </Link>

          <Link to="experience" smooth={true} duration={1500}>
            Experience
          </Link>

          <Link to="expertise" smooth={true} duration={1500}>
            Expertise
          </Link>

          <Link to="projects" smooth={true} duration={1500}>
            Projects
          </Link>
        </p>

        <p>Ruqaiya Beguwala &copy; 2020</p>
      </div>
    </footer>
  );
}
