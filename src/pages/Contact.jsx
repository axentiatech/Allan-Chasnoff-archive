import emailjs from "@emailjs/browser";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError(true);
      return;
    } else if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".com")
    ) {
      setEmailError(true);
      return;
    } else if (text === "") {
      setTextError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_opzo5yb",
        "template_frwdlah",
        form.current,
        "_LwbB9V3H567NLIGu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setSuccessMessage(result.text);
        },
        (error) => {
          setSuccess(true);
          console.log(error.text);
          setSuccessMessage(error.text);
        }
      );

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <>
      <Card
        sx={{
          backgroundImage: "url(/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: {
            xs: "80%",
            lg: "60%",
          },
          margin: "auto",
          marginTop: {
            xs: "5%",
            lg: "2%",
          },
        }}
      >
        <CardContent
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            color="white"
            align="center"
            sx={{
              fontWeight: "600",
              marginTop: {
                xs: "6%",
                lg: "3%",
              },
            }}
          >
            Tell Us How <br /> We Can Help
          </Typography>
          <Divider
            color="white"
            sx={{
              width: "100px",
              height: "4px",
              margin: "auto",
              marginTop: {
                xs: "10%",
                lg: "5%",
              },
            }}
            variant="middle"
          />
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              disabled={success}
              label={nameError ? "Enter valid Name" : "Name"}
              variant="filled"
              name="user_name"
              error={nameError}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,0.8)", // Set the background color to white
                "& .MuiInputBase-input": {
                  color: "black", // Set the text color to black
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Set the label color to black (optional)
                },
                marginTop: "3%",
              }}
            />

            <TextField
              disabled={success}
              label={emailError ? "Enter a valid email" : "Email"}
              variant="filled"
              name="user_email"
              error={emailError}
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              sx={{
                backgroundColor: "rgba(255,255,255,0.8)", // Set the background color to white
                "& .MuiInputBase-input": {
                  color: "black", // Set the text color to black
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Set the label color to black (optional)
                },
                marginTop: "3%",
              }}
            />
            <TextField
              disabled={success}
              label={textError ? "Enter valid message" : "Message"}
              variant="filled"
              fullWidth
              name="message"
              error={textError}
              multiline
              rows={4}
              onChange={(e) => {
                setText(e.target.value);
                setTextError(false);
              }}
              sx={{
                backgroundColor: "rgba(255,255,255,0.8)", // Set the background color to white
                "& .MuiInputBase-input": {
                  color: "black", // Set the text color to black
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Set the label color to black (optional)
                },
                marginTop: "3%",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                background: success ? "green" : "black",
                color: "white",
                marginTop: "3%",
                "&:hover": {
                  bgcolor: success ? "darkgreen" : "rgba(30,30,30,1)",
                  color: "white",
                },
              }}
            >
              {success ? "Message Sent Successfully" : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Footer />{" "}
    </>
  );
}
