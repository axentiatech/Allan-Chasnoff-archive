import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Collections } from "@mui/icons-material";
export default function Home() {
  useEffect(() => {
    axios
      .get("https://allanarchive-backend.onrender.com/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://allan-backend.onrender.com/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {
        <Stack
          direction="column"
          spacing={3}
          alignItems="center"
          justify="space-around"
        >
          <img
            src="/firstImage.jpeg"
            style={{ maxWidth: "80%", margin: "auto", marginTop: "1rem" }}
          />
          <Typography variant="h5" color="white">
            A gateway of endless knowledge
          </Typography>
          <Typography variant="h6" color="white" align="center">
            A site dedicated to the work done as a{" "}
            <span style={{ color: "red" }}>user</span> by Allan Chasanoff in the{" "}
            <span style={{ color: "skyblue" }}>Read and Note</span> Platform
          </Typography>
          {/* <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
          >
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
          </Typography> */}{" "}
          <i style={{ color: "white" }}>Featured Collections</i>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <ArticleIcon style={{ color: "white" }} />
            <i style={{ color: "white" }}>
              Digital Library of Books and collected by Allan Chasanoff
            </i>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Collections style={{ color: "white" }} />
            <i style={{ color: "white" }}>
              Digital Collection of Words and held meaning as Allan Chasanoff
            </i>
          </div>
          <video width="60%" height="100%" controls>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <i style={{ color: "white", marginBottom: "3rem" }}>
            © Chasanoff Archive - 2023
          </i>
        </Stack>
      }
    </>
  );
}
