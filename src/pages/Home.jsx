import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
export default function Home() {

  useEffect(()=>{
      axios.get("https://allanarchive-backend.onrender.com/").then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })

      axios.get("https://allan-backend.onrender.com/").then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  },[])

  return (
    <>
      {
        /* <Stack
        direction="column"
        spacing={3}
        alignItems="center"
        justify="space-around"
      >
        <img
          src="/firstImage.jpeg"
          style={{ maxWidth: "80%", margin: "auto", marginTop: "3%" }}
        />
        <Typography variant="h5" color="white">
          A gateway of endless knowledge
        </Typography>
        <Typography variant="h6" color="white" align="center">
          A site dedicated to the work done as a{" "}
          <span style={{ color: "red" }}>user</span> by Allan Chasanoff in the{" "}
          <span style={{ color: "skyblue" }}>Read and Note</span> Platform
        </Typography>
        <Stack direction="row" alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6" color="skyblue">
            Pick a Topic
          </Typography>
          <img
            src="/SecondImage.jpeg"
            style={{ maxWidth: "56%", margin: "auto" }}
          />
          <Typography variant="h6" color="skyblue">
            Any Topic
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          color="white"
          sx={{ fontSize: "0.6rem", width: "100%", textAlign: "center" }}
        >
          any questions regarding this site should be address to
          info@readandnote.com
        </Typography>
      </Stack> */}
    </>
  );
}
