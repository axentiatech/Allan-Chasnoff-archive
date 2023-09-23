import { CloseFullscreen, CloseRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MenuLib from "../components/MenuLib";

import { booksData } from "../utils/data";
function About() {
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
  return (
    <>
      <Card
        sx={{
          marginTop: windowWidth < 900 ? "10%" : "2%",
          maxHeight: "80vh",
          marginBottom: "50px",
          overflowY: "auto",
          minHeight: "30vh",
          position: "relative",
        }}
      >
        {/* Search Feature */}

        <CardContent
          sx={{
            padding: 0,
            paddingTop: 1,
            // paddingLeft:1,
            // paddingRight:1
          }}
        >
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              color: "#53A3C1",
              bgcolor: "#f4f4f4",
              textAlign: "center",
              // marginTop: "2%",
              borderTop: "1px solid #53A3C1",
              position: "sticky",
              top: "0",
            }}
          >
            OverView
          </Typography>
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              marginTop: 25,
              marginBottom: 25,
            }}
          >
            <img
              src="/person.png"
              width={250}
              style={{ margin: "auto", textAlign: "center" }}
            />
          </div>
          <div
            style={{
              width: "45%",
              margin: "auto",
              textAlign: "center",
              // lineHeight: "1px",
            }}
          >
            <Typography
              sx={{ lineHeight: "2.5", fontSize: 18, fontWeight: "500" }}
            >
              Welcome to the Allan Chasanoff Read and Note Archive. A site
              dedicated to the work done as a user by Allan Chassanoff in the
              Read and Note Platform This is a delineated archive of Allan
              Chasanoff digital library of books and culled pensive Words .
              Here, you can explore his collection of books and Words curated by
              Allan Chasanoff. Allan was passionate about preserving memories
              and history. This archive is a collection of some of Allan’s
              digital work, dedicated to capturing the essence of moments and
              the stories they can tell about him.
            </Typography>
          </div>
          <div style={{ margin: "auto", textAlign: "center", marginTop: 20 }}>
            <video src="/video.mp4" width={250} controls></video>
          </div>
        </CardContent>
      </Card>
      <Footer />{" "}
      {/* <Box
        sx={{
          width: {
            xs: "80%",
            lg: "60%",
          },
          maxHeight: "70vh",
          bgcolor: "white",
          margin: "auto",
          marginBottom: "100px",
          marginTop: "23px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            color: "skyblue",
            bgcolor: "#f4f4f4",
            textAlign: "center",
            marginTop: "2%",
            borderTop: "1px solid skyblue",
            position: "sticky",
            top: "0",
          }}
        >
          OverView
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "10%",
            marginBottom: "10%",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            eleifend, libero at vestibulum gravida, ante libero feugiat tortor,
            nec mattis tortor odio eget lorem. Nulla facilisi. Nunc auctor
            laoreet elit, eget varius nunc aliquet a. Vestibulum at neque a
            justo facilisis vehicula. Nullam vel est vitae mi interdum mattis.
            Fusce vestibulum arcu eu lorem elementum, non hendrerit massa
            pharetra. Sed euismod ipsum ut ligula hendrerit, vel suscipit mi
            malesuada. Cras non vestibulum libero. Suspendisse potenti. Nullam
            suscipit nulla non velit ullamcorper, a venenatis ipsum bibendum.
            Suspendisse potenti. Nullam vitae libero auctor, efficitur quam ut,
            sodales nulla.
            <br />
            <br />
            In non tortor elit. Vivamus aliquam, quam quis facilisis venenatis,
            tortor libero fringilla ex, ut gravida est lorem a velit. Praesent
            efficitur augue non justo blandit, in semper elit rhoncus. Aliquam
            tincidunt mi ac nisi feugiat, eget tincidunt felis laoreet.
            Pellentesque fermentum justo id libero dictum, eu posuere elit
            facilisis. Suspendisse potenti. Sed varius tincidunt dui, a pharetra
            purus laoreet eu. Nulla facilisi. Nunc tristique ut odio sed
            venenatis. Suspendisse potenti. In quis suscipit ex, ut bibendum
            sapien. Integer eu urna eu libero efficitur tincidunt nec ac libero.
            Phasellus non bibendum nulla. Suspendisse potenti. Vivamus in
            bibendum ligula. Curabitur auctor, arcu sit amet feugiat bibendum,
            nunc dui varius purus, non facilisis purus odio eget ex. Donec vel
            eros vel erat suscipit interdum eget eget elit.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </> */}
    </>
  );
}

export default About;
