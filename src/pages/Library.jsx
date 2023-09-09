import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Box,
  Stack,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuLib from "../components/MenuLib";
import axios from "axios";

export default function Library() {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

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

  async function getData() {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://allanarchive-backend.onrender.com/files"
      );
      const data = res.data;
      setBooksArray(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card
      sx={{
        marginTop: {
          xs: "10%",
          lg: "2%",
        },
        maxHeight: "80vh",
        overflowY: "auto",
        minHeight: "60vh",
        position: "relative",
      }}
    >
      {loading ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: "skyblue",
          }}
        />
      ) : (
        <CardContent>
          {booksArray.map((elem, id) => {
            return (
              <div key={id}>
                <Stack
                  direction="row"
                  sx={{
                    marginTop: {
                      xs: "5%",
                      lg: "2%",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"space-between"} // This will separate the inner stack and MenuLib
                  spacing={6}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "start", maxWidth: "80%" }}
                  >
                    <Box
                      sx={{
                        width: "10%", // Make sure this is the width you want
                        flexShrink: 0, // Prevent the image from shrinking
                      }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                        fontSize: "0.9rem",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                      color={"#45accf"}
                    >
                      {change(elem.name)}
                    </Typography>
                  </Stack>
                  <MenuLib pdf={elem} />
                </Stack>
                <Divider
                  variant="fullWidth"
                  sx={{ color: "#f4f4f4", borderWidth: "3px", marginTop: "2%" }}
                />
              </div>
            );
          })}
        </CardContent>
      )}
    </Card>
  );
}
