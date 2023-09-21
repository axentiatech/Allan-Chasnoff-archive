import {
  Typography,
  Container,
  Stack,
  IconButton,
  Button,
  Box,
  Drawer,
  Divider,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkIcon from "@mui/icons-material/Work";
import { ContactMail, LaptopMac, Person } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Navbar = () => {
  const linearGradientStyle = {
    background: "linear-gradient(#4670c2 30%,  #00afd4 90%)",
    WebkitBackgroundClip: "text", // For Safari
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "600",
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 900;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <>
      <Container sx={{ marginTop: "1%" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Typography variant="h3" color="white" sx={{ fontWeight: "400" }}>
              The Allan Chasanoff
            </Typography>
            <Typography
              variant="h4"
              style={linearGradientStyle}
              sx={{ color: "skyblue" }}
            >
              Read and Note Archive
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
            style={{ display: isMobile ? "none" : "flex" }}
          >
            <MenuItem
            // sx={{
            //   display: {
            //     sm: "none",
            //     xs: "none",
            //     md: "flex",
            //   },
            // }}
            >
              <Avatar />{" "}
              <Typography
                variant="h6"
                color="white"
                style={{ marginLeft: "1rem" }}
              >
                Allan Chasanoff
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.5)",
                // display: {
                //   xs: "none",
                //   md: "flex",
                // },
              }}
              onClick={() => {
                handleClose();
                navigate("/");
              }}
            >
              <HomeIcon sx={{ color: "white" }} />{" "}
              <Typography sx={{ marginLeft: "10%" }} color={"white"}>
                Home
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/library");
              }}
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.5)",
                // display: {
                //   xs: "none",
                //   md: "flex",
                // },
              }}
            >
              <AutoStoriesIcon sx={{ color: "white" }} />{" "}
              <Typography sx={{ marginLeft: "10%" }} color={"white"}>
                Library
              </Typography>
            </MenuItem>
          </Stack>

          <MenuIcon
            id="drop-button"
            fontSize="large"
            sx={{
              color: "#409aba",
              cursor: "pointer",
              display: {
                sm: "block",
                md: "none",
              },
            }}
            onClick={handleClick}
            aria-controls={open ? "drop-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
          <Menu
            id="drop-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "drop-button",
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: "#409aba",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
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
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "#409aba",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar />{" "}
              <Typography variant="h6" color="white">
                Allan Chasanoff
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
              onClick={() => {
                handleClose();
                navigate("/");
              }}
            >
              <HomeIcon sx={{ color: "white" }} />{" "}
              <Typography sx={{ marginLeft: "10%" }} color={"white"}>
                Home
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/library");
              }}
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
            >
              <AutoStoriesIcon sx={{ color: "white" }} />{" "}
              <Typography sx={{ marginLeft: "10%" }} color={"white"}>
                Library
              </Typography>
            </MenuItem>

            {/*<MenuItem
              onClick={() => {
                handleClose();
                navigate("/words");
              }}
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
            >
              <WorkIcon sx={{ color: "white" }} />{" "}
              <Typography color={"white"} sx={{ marginLeft: "10%" }}>Words</Typography>
            </MenuItem>
             
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/about");
              }}
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
            >
              <LaptopMac sx={{ color: "white" }} />{" "}
              <Typography color={"white"} sx={{ marginLeft: "10%" }}>About</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/contact");
              }}
              sx={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
            >
              <Person sx={{ color: "white" }} />{" "}
              <Typography color={"white"} sx={{ marginLeft: "10%" }}>Contact</Typography>
            </MenuItem> */}
          </Menu>
        </Stack>
      </Container>
    </>
  );
};

export default Navbar;
