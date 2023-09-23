import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "80%",
            lg: "60%",
          },
          maxHeight: "70vh",
          bgcolor: "white",
          margin: "auto",
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
    </>
  );
}

export default About;
