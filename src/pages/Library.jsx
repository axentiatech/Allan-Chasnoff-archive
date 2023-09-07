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
                  justifyContent={"space-between"}
                  spacing={6}
                >
                  <img
                    src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
                    style={{ width: "10%" }}
                  />
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                      fontSize: "0.9rem",
                      minWidth: "50%",
                      maxWidth: "50%",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                    color={"#45accf"}
                  >
                    {elem.name}
                  </Typography>
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
