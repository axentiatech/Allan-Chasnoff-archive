import {
  Typography,
  Menu,
  MenuItem,
  Stack,
  Button,
  LinearProgress,
  CircularProgress,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { Resizable } from "re-resizable";
import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
import CreateIcon from "@mui/icons-material/Create";
import styled from "@emotion/styled";
import Input from "./Input";
import Chat from "./Chat";
import CloseIcon from "@mui/icons-material/Close";

const MenuLib = (props) => {
  const [progress, setProgress] = useState(0);
  const [chats, setChats] = useState([]);

  function change(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "_") {
        newStr += " ";
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setBar(false);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { name, path, id } = props.pdf;
  const [bar, setBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleModalOpen() {
    setOpenModal(true);
  }
  function handleModalClose(event,reason) {
    if(reason!== 'backdropClick'){
      setOpenModal(false);
      setChats([]);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  function handlePdf() {
    const url = "https://allanarchive-backend.onrender.com/pdf/" + id; // replace with your PDF URL
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  function truncate(name, size) {
    if (name.length <= size) {
      return name;
    } else {
      return name.slice(0, size) + "...";
    }
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#f2f2f2",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    overflow:"hidden"
  };

  return (
    <>
      <MoreVertIcon
        id="lib-drop"
        sx={{ cursor: "pointer" }}
        onClick={handleClick}
        aria-controls={open ? "lib-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
      <Menu
        id="lib-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lib-drop",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: "white",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: -3,
            width: "fit-content",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 12,
              right: -4,
              width: 10,
              height: 10,
              bgcolor: "white",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Stack direction="column">
          <MenuItem
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                margin: "auto",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "100%",
              }}
            >
              {truncate(change(name), 20)}
            </Typography>
          </MenuItem>
          <Stack direction={"row"} spacing={-2} justifyContent={"center"}>
            <MenuItem sx={{ "&:hover": { backgroundColor: "transparent" } }}>
              <Button
                onClick={() => {
                  handlePdf();
                  handleClose();
                }}
                sx={{
                  backgroundColor: "#5c9cc8",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#5c9ff9",
                  },
                  fontSize: {
                    xs: "0.5rem",
                    lg: "0.7rem",
                  },
                }}
                variant="contained"
              >
                <ShareIcon sx={{ fontSize: "2em" }} /> Open
              </Button>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { backgroundColor: "transparent" } }}>
              <Button
                disabled={bar ? true : false}
                onClick={handleModalOpen}
                sx={{
                  backgroundColor: "#5c9cc8",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#5c9ff9",
                  },
                  fontSize: {
                    xs: "0.5rem",
                    lg: "0.7rem",
                  },
                }}
                variant="contained"
              >
                <CreateIcon sx={{ fontSize: "2em" }} /> Question
              </Button>
              <Modal
                open={openModal}
                onClose={handleModalClose}
                disableEscapeKeyDown
              >
                <Box sx={style}>
                  <IconButton
                    onClick={handleModalClose}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      color: "black",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Input namespace={name} setChats={setChats} chats={chats}/>
                  <Chat namespace={name} chats={chats}  />
                </Box>
              </Modal>
            </MenuItem>
          </Stack>
          {bar && (
            <LinearProgress
              variant="determinate"
              value={progress}
              color="primary"
              sx={{
                width: "90%",
                margin: "auto",
                height: "10px",
                marginTop: "2%",
              }}
            />
          )}
        </Stack>
      </Menu>
    </>
  );
};

export default MenuLib;
