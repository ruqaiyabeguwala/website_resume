import React, { useState } from "react";
import {
  Button,
  Card,
  Paper,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as emailjs from "emailjs-com";
import Snackbar from "./snackbar";
import { useForm } from "react-hook-form";
import LoadingOverlay from "react-loading-overlay";
import aos from "aos";
import "aos/dist/aos.css";
import MessageIcon from "@material-ui/icons/Message";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import mystyle from "./../assets/css/cardOverlay.scss";
import blur from "./../assets/img/blur.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 550,
    flexGrow: 1,
    padding: theme.spacing(6),
    margin: "30px 23px",
    maxWidth: 1400,
    // marginBottom: "400px",
    zIndex: 10,
    // position: "relative",
    // width: "100%",
    //margin: "30px 23px",
  },
  icon:{
    fontSize:"17px",
    marginRight:"5px"
  },

  card: {
    margin: "auto",
    marginTop:"100px",
    width: "300px",
    minHeight: 250,
    padding: "70px",
    boxShadow: "0 10px 20px 0 rgba(#202024, 0.12)",
    borderRadius: "4%",
    backgroundImage: `url("${blur}")`,
    backgroundSize: "cover",
  },

  [theme.breakpoints.down("sm")]: {
    card: {
       maxWidth: "200px",
       minHeight: "200px",
      padding: "30px",
      marginTop: "80px",
    },
    root: {
      //  marginBottom: "400px",
      padding: theme.spacing(3),
      fontSize: "12px",
      minHeight: "500px",
    },
    txt: {
      fontSize: "12px",
    },
    btn:{
      fontSize:"12px"
    },
    icon:{
      fontSize:"12px"
    }
  },
  [theme.breakpoints.down("xs")]: {
    card: {
      maxWidth: "180px",
      minHeight: "130px",
      margin: "auto",
      marginTop:"60px",
      padding: "10px",
      // marginTop: "40px",
    },
    icon:{
      fontSize:"10px"
    }
  },
}));

function Contact() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [sev, setSev] = useState("");
  const [clicked, setClicked] = useState(false);
  React.useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  const { handleSubmit, register, errors, reset } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (values, e) => {
    setLoading(true);
    let templateParams = {
      from_name: values.nme,
      from_email: values.email,
      to_name: "ruqaiya.beguwala@gmail.com",
      subject: "Job opportunity",
      message_html: values.msg,
    };
    emailjs
      .send(
        "gmail",
        process.env.REACT_APP_TEMPLATE,
        templateParams,
        process.env.REACT_APP_USER
      )
      .then(
        function (response) {
          setLoading(false);
          setMessage("Message delivered!");
          setSev("success");
          setClicked(true);
        },
        function (error) {
          setLoading(false);
          setMessage(`Error sending your message!`);
          console.log("error message", error);
          setSev("error");
          setClicked(true);
        }
      );

    reset({
      nme: "",
      email: "",
      msg: "",
    });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Sending your message!">
      <Paper className={classes.root} variant="outlined" id="contact">
        <h1>Let's Connect!</h1>

        <Card
          className={classes.card}
          id="btn "
          style={mystyle}
          data-aos="zoom-in"
          data-aos-duration="1000"
          variant="outlined"
        >
          <FormGroup>
            <FormControl>
              <InputLabel>
                <PersonIcon className={classes.icon}/>
                <b className={classes.txt}>Name</b>
              </InputLabel>
              <Input
                name="nme"
                error={!!errors.nme}
                inputRef={register({
                  required: "Required",
                  validate: (value) =>
                    value.length > 5 || "Enter a name with minimum length 5",
                })}
                type="text"
              />
              <FormHelperText style={{ color: "red" }}>
                {" "}
                {errors.nme && errors.nme.message}
              </FormHelperText>
            </FormControl>
          </FormGroup>
          <br />
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="email">
                <MailIcon className={classes.icon} />
                <b className={classes.txt}>Email</b>
              </InputLabel>
              <Input
                name="email"
                inputRef={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                type="email"
              />
              <FormHelperText style={{ color: "red" }}>
                {" "}
                {errors.email && errors.email.message}
              </FormHelperText>
            </FormControl>
          </FormGroup>
          <br />
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="msg">
                <MessageIcon className={classes.icon}/>
                <b className={classes.txt}>Message</b>
              </InputLabel>
              <Input
                multiline={true}
                id="msg"
                type="text"
                name="msg"
                error={!!errors.msg}
                inputRef={register({
                  required: "Required",
                  validate: (value) =>
                    value.length > 10 || "Write atleast 10 words",
                })}
              />
              <FormHelperText style={{ color: "red" }}>
                {" "}
                {errors.msg && errors.msg.message}
              </FormHelperText>
            </FormControl>
          </FormGroup>
          <br />
          <br />
          <FormGroup>
            <Button
              className={classes.btn}
              //  style={mystyle}
              id="btn"
              onClick={handleSubmit(onSubmit)}
              type="submit"
              variant="contained"
              style={{ background: "#616aae", color: "white" }}
            >
              {" "}
              <b className={classes.txt}>Send</b>{" "}
              <SendIcon className={classes.icon} />
            </Button>
          </FormGroup>
          {clicked && <Snackbar message={message} sev={sev} />}
        </Card>
      </Paper>
    </LoadingOverlay>
  );
}

export default Contact;
