import { Collections } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  const videoWidth = windowWidth >= 1024 ? "40%" : "60%";

  return (
    <>
      {
        <Stack
          direction="column"
          spacing={3}
          alignItems="center"
          justify="space-around"
          marginBottom={"80px"}
        >
          <img
            src="/home-image.png"
            style={{
              maxWidth: "80%",
              margin: "auto",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />
          <Typography variant="h5" color="white" align="center">
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
              Digital Library of Books collected By Allan Chasanoff{" "}
            </i>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Collections style={{ color: "white" }} />
            <i style={{ color: "white" }}>
              Digital Library of words collected By Allan Chasanoff{" "}
            </i>
          </div>
          <video
            width={videoWidth}
            height="90%"
            controls
            poster="/thumnailhome.png"
          >
            <source
              src="https://readandnote.com/ac_archive/vid01.mp4"
              type="video/mp4"
            />
          </video>
          {/* <i style={{ color: "white", marginBottom: "3rem" }}>
            © Chasanoff Archive - 2023
          </i> */}
        </Stack>
      }
      {/* <Footer /> */}
      <div
        style={{
          color: "white",
          marginBottom: "2.5rem",
          // marginLeft: "45.6%",
          textAlign: "center",
        }}
      >
        © Chasanoff Archive - 2023
      </div>
    </>
  );
}
