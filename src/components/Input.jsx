import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { Resizable } from "re-resizable";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import DownloadIcon from "@mui/icons-material/Download";

const Input = (props) => {
  const name_space = props.namespace;
  const { chats, setChats } = props;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const MAX_WIDTH = 600; // You can adjust these values to your requirements
  const MAX_HEIGHT = 500;
  const [dimensions, setDimensions] = useState({
    height: Math.min(window.innerHeight * 0.5, MAX_HEIGHT),
    width: Math.min(window.innerWidth * 0.6, MAX_WIDTH),
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: Math.min(window.innerHeight * 0.5, MAX_HEIGHT),
        width: Math.min(window.innerWidth * 0.7, MAX_WIDTH),
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // useEffect(()=>{
  //   axios.get("https://gpt6-backend.onrender.com/chat-history?name_space=dev_resume&is_download=true",{
  //     params:{
  //       name_space: name_space,
  //       is_download: true
  //     }
  //   }).then((res)=>{
  //     console.log(res.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[])

  function handleKey(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  const ResizeHandle = (
    <div
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        bottom: -18,
        right: -3,
        padding: "2px",
        cursor: "nwse-resize",
        zIndex: 2,
        transform: "rotate(40deg)",
      }}
    >
      <IconButton>
        <DragHandleIcon />
      </IconButton>
    </div>
  );

  function handleSubmit() {
    if (question === "") {
      setError(true);
      return;
    }
    setLoading(true);
    axios
      .post("https://gpt6-backend.onrender.com/respond", {
        input_text: question,
        name_space: name_space,
      })
      .then((res) => {
        const fetchedanswer = res.data.message.answer;
        setAnswer(res.data.message.answer);
        setChats([{ question: question, answer: fetchedanswer }, ...chats]);
        setLoading(false);
        setQuestion("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setQuestion("");
      });
  }
  return (
    <>
      <Resizable
        defaultSize={dimensions}
        style={{ margin: "auto" }}
        handleComponent={{
          bottomRight: ResizeHandle,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            marginTop: {
              xs: "5%",
              lg: "2%",
            },
            overflow: "hidden",
          }}
        >
          <TextField
            value={question}
            fullWidth
            type="text"
            onKeyDownCapture={(e) => {
              handleKey(e);
            }}
            onChange={(e) => {
              setQuestion(e.target.value);
              setError(false);
            }}
            label={error ? "Enter valid questions" : "Ask question.."}
            variant="filled"
            error={error}
            autoComplete="off"
            disabled={loading ? true : false}
          />
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            <IconButton onClick={handleSubmit}>
              <SendIcon />
            </IconButton>
          )}
        </Stack>
        <Box
          sx={{
            maxHeight: "50vh",
            minHeight: "20vh",
            maxWidth: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            margin: "auto",
          }}
        >
          {chats.map((chat, idx) => {
            return (
              <Stack key={idx} sx={{ marginRight: "2%" }}>
                <Typography
                  sx={{
                    marginBottom: {
                      xs: "3%",
                      lg: "1%",
                    },
                    wordWrap: "break-word", // breaks lengthy words to prevent overflow
                    overflowWrap: "break-word", // for better browser support
                    width: "90%", // reduces the width to provide space for other elements
                  }}
                >
                  <strong>Question</strong>.<br />
                  {chat.question}?
                </Typography>
                <Typography
                  sx={{
                    marginBottom: {
                      xs: "3%",
                      lg: "1%",
                    },
                    wordWrap: "break-word", // breaks lengthy words to prevent overflow
                    overflowWrap: "break-word", // for better browser support
                    width: "90%", // reduces the width to provide space for other elements
                  }}
                >
                  <strong>Answer</strong>.{chat.answer.split("\n\nsource :")[0]}
                  <br />
                  <em style={{ fontWeight: "300" }}>
                    Source: {chat.answer.split("\n\nsource :")[1]}
                  </em>
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Resizable>
    </>
  );
};

export default Input;
