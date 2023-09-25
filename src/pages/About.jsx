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
          width: "100%",
          maxHeight: "80vh",
          // marginBottom: "50px",
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
              backgroundColor: "#d1d5db",
              maxWidth: "95%",
              margin: "auto"
            }}
          >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              marginBottom: 25,
            }}
          >
            {/* <img
              src="/person.png"
              width="50%"
              style={{ margin: "auto", textAlign: "center" }}
            /> */}
            <img
              src="/person.png"
              style={{
                width:
                  windowWidth <= 820
                    ? windowWidth <= 767
                      ? "97%"
                      : "75%"
                    : "57%", // Set width based on screen width
                margin: "auto",
                padding: "16px 0 16px 0",
                textAlign: "center",
              }}
              alt="Person"
            />
          </div>
          <div
            style={{
              width: "98%",
              margin: "auto",
              textAlign: "center",
              // lineHeight: "1px",
            }}
          >
            <Typography
              sx={{
                // width: "100%",
                "@media (max-width: 768px)": {
                  lineHeight: "1.6", // Line height for mobile views (adjust the breakpoint as needed)
                },
                "@media (min-width: 769px)": {
                  lineHeight: "2.2", // Line height for non-mobile views (adjust the breakpoint as needed)
                },
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Welcome to the Allan Chasanoff Read and Note Archive. <br /> A
              site dedicated to the work done as a user by Allan Chassanoff in
              the
              <br /> Read and Note Platform. <br /> This is a delineated archive
              of Allan Chasanoff digital library <br /> of books and culled
              Words.
              <br /> You can explore his collection of Books and Words hand
              picked by Allan Chasanoff. <br /> Allan was passionate about
              preserving memories and history.
              <br /> This archive is a collection of some of Allan’s digital
              work, dedicated to capturing
              <br /> the essence of moments and the stories they can tell about
              him.
            </Typography>
          </div>
          <div style={{ margin: "auto", textAlign: "center", marginTop: 20 , padding: "16px 0 16px 0", }}>
            <video
              src="/video_girl.mp4"
              width={250}
              controls
              poster="/thumbnail.png"
            ></video>
          </div>
          </div>
        </CardContent>
      </Card>
      {/* <Footer /> */}
      <div
        style={{
          color: "white",
          marginTop: "20px",
          marginBottom: "2.5rem",
          // marginLeft: "45.6%",
          textAlign: "center",
        }}
      >
        © Chasanoff Archive - 2023
      </div>
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
