import {
  Typography,
  Container,
  Stack,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import {useState} from "react"
import MenuIcon from "@mui/icons-material/Menu";
import { MenuBook } from "@mui/icons-material";
const Navbar = () => {

  const linearGradientStyle = {
    background: "linear-gradient(#4670c2 30%,  #00afd4 90%)",
    WebkitBackgroundClip: "text", // For Safari
    backgroundClip: "text",
    color: "transparent",
    fontWeight:"600",
  };

  const [car,setCar] = useState(false);

  function handleClick(){
    setCar(!car);
  }

  return (
    <>
      <Container sx={{ marginTop: "3%" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Typography variant="h3" color="white" sx={{ fontWeight: "400" }}>
              The Allan Chassnoff
            </Typography>
            <Typography variant="h4" style={linearGradientStyle} sx={{color:"skyblue"}}>
              Read and Note Archive
            </Typography>
          </Stack>
          <MenuIcon fontSize="large" style={{ color: "#409aba",cursor:"pointer"}} onClick={handleClick}  />
        </Stack>
      </Container>
    </>
  );
};

export default Navbar;
