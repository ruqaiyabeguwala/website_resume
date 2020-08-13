import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button"
import styles from "./../assets/jss/headerLinksStyle.js";
import {Link} from "react-scroll"

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
    <ListItem className={classes.listItem}>
   
    <Button 
    color="transparent"
    className={classes.navLink}
    disableTouchRipple={true}
    >
   <Link to="about" smooth={true} duration={1500}>About</Link>
    </Button>
   
    </ListItem>
      <ListItem className={classes.listItem} >
      
          <Button
            color="transparent"
            className={classes.navLink}
            disableTouchRipple={true}
          >
         <Link to="education"  smooth={true} duration={1500}>Education</Link>
       </Button>
      
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            className={classes.navLink}
            disableTouchRipple={true}
          //  href="#experience"
           // onClick={() => {myRef.current.scrollIntoView({behavior: 'smooth'})}}
          >
          
           <Link to="experience" style={{display:'inline-block',position:"relative"}} smooth={true} duration={1300}>Experience</Link>
         </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
           className={classes.navLink}
           disableTouchRipple={true}
          >
           <Link to="expertise" smooth={true} duration={1500}>Expertise</Link>
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
           className={classes.navLink}
           disableTouchRipple={true}
          >
           <Link to="project" smooth={true} duration={1500}>Projects</Link>
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
           // color="transparent"
           className={classes.navLink}
           disableTouchRipple={true}
          >
           <Link to="achievement" smooth={true} duration={1500}>Achievements</Link>
          </Button>
      </ListItem>
      <Button
            color="transparent"
           className={classes.navLink}
           disableTouchRipple={true}
          >
           <Link to="contact" smooth={true} duration={1500}>Contact</Link>
          </Button>
    </List>
  );
}
