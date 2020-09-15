const parallaxStyle = (theme) => ({
  parallax: {
    height: "110vh",
    // maxHeight: "1000px",
    overflow: "auto",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  btn: {
    transition: "all 0.2s ease-in-out",
    "&:hover,&:focus": {
      transform: "scale(1.02)",
    },
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  h:{
    fontSize:"40px"
  },
  small: {
    height: "380px",
  },
  front: {
    width: "100%",
    height: "500px",
    color: "white",
    // textAlign: "left",
  },
  write: {
    position: "absolute",
    margin: "0px 60px",
    color: "white",
    align: "center",
  },
  [theme.breakpoints.down("sm")]: {
    write: {
      margin: "0px 30px",
      fontSize: "12px",
    },btn:{
      width:"150px",
      fontSize:"12px"
    },
    h:{
      fontSize:"25px",
     // marginBottom:"50px"
    }
  },
});

export default parallaxStyle;
