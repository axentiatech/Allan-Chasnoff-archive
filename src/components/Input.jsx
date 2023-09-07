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
import DownloadIcon from '@mui/icons-material/Download';


const Input = (props) => {

  const name_space = props.namespace;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

  const ResizeHandle = (
    <div
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        bottom: 12,
        right: -5,
        padding: "2px",
        cursor: "nwse-resize",
        zIndex: 2,
        transform:"rotate(40deg)"
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
        setChats([...chats, { question: question, answer: fetchedanswer }]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <>
      <Resizable
        defaultSize={{
          width: window.innerWidth * 0.8,
          height: window.innerHeight * 0.4,
        }}
        style={{ margin: "auto" }}
        handleComponent={{
          bottomRight: ResizeHandle,
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => {
              setQuestion(e.target.value);
              setError(false);
            }}
            label={error ? "Enter valid questions" : "Ask question.."}
            variant="filled"
            error={error}
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
            maxWidth: "90%",
            overflowY: "auto",
            overflowX: "hidden",
            margin: "auto",
            marginTop: "3%",
          }}
        >
          {chats.map((chat, idx) => {
            return (
              <Stack key={idx} sx={{ marginRight: "2%" }}>
                <Typography sx={{ marginBottom: "3%" }}>
                  <strong>Question</strong>.<br />
                  {chat.question}?
                </Typography>
                <Typography sx={{ marginBottom: "3%" }}>
                  <strong>Answer</strong>. {chat.answer}
                </Typography>
              </Stack>
            );
          })}
          
        </Box>
      <Chat namespace={name_space} />
      </Resizable>
    </>
  );
};

export default Input;
