import { IconButton, Stack, TextField } from '@mui/material'
import React from 'react'
import Chat from './Chat'
import SendIcon from '@mui/icons-material/Send';

const Input = (props) => {
  const name_space = props.name;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [chats, setChats] = useState([]);
  return (
    <>
    <Stack direction={row} alignItems={"center"}>
    <TextField type="text" onChange={(e)=>{setQuestion(e.target.value)}} label="Ask question.." variant='filled' />
    <IconButton onClick={handleSubmit}><SendIcon/></IconButton>
    </Stack>
    <Box>
      {chats.map()}
    </Box>
    </>
  )
}

export default Input