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
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuLib from "../components/MenuLib";
import axios from "axios";
import { CloseFullscreen, CloseRounded } from "@mui/icons-material";

export default function Library() {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function getName(name) {
    const nameArr = name.split("-");
    const author = nameArr.pop();
    let final = "";
    if (nameArr.length === 0) {
      final = name.split("Author")[0];
    } else {
      final = nameArr;
    }
    return final.toString().split("book")[1];
  }

  function getAuthor(name) {
    const nameArr = name.split("-");
    const author = nameArr.pop();
    if (nameArr.length === 0) {
      const authorName = name.split("Author")[1];
      return "by" + authorName;
    } else {
      return "by" + author;
    }
  }

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
      const List = data.map((elem) => {
        return change(elem.name);
      });
      setList(List);
      setBooksArray(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(name) {
    setSearch(name);
  }

  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card
      sx={{
        marginTop: windowWidth < 900 ? "10%" : "2%",
        maxHeight: "80vh",
        overflowY: "auto",
        minHeight: "30vh",
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
        <>
          {/* <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ width: "80%", margin: "auto", marginTop: "2%" }}
          >
            <TextField
              value={search}
              variant="filled"
              label="search"
              fullWidth
              autoComplete="off"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <IconButton
              onClick={() => {
                setSearch("");
              }}
            >
              <CloseRounded />
            </IconButton>
          </Stack> */}
          <CardContent>
            {filteredItems.length === 0 ? (
              <Box sx={{ width: "90%", margin: "auto" }}>
                <Typography variant="h6">
                  Sorry, we couldn't find any results matching your search.
                </Typography>
              </Box>
            ) : (
              filteredItems.map((elem, id) => {
                return (
                  <div key={id}>
                    <Stack
                      direction="row"
                      sx={{
                        marginTop: {
                          xs: "1%",
                          lg: "0.5%",
                        },
                      }}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      spacing={6}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", maxWidth: "80%" }}
                      >
                        <img
                          src={
                            "https://allanarchive-backend.onrender.com/images/" +
                            (id + 1) +
                            ".jpg"
                          }
                          style={{
                            width: windowWidth < 900 ? "8vw" : "4vw",
                          }}
                        />
                        <div>
                          <Typography
                            variant="h6"
                            // style={{
                            //   fontSize:"0.8rem"
                            // }}
                            sx={{
                              cursor: "pointer",
                              "&:hover": { textDecoration: "underline" },
                              fontSize: windowWidth < 900 ? "0.8rem" : "1rem",
                              wordWrap: "break-word",
                              whiteSpace: "normal",
                            }}
                            color={"#45accf"}
                          >
                            {getName(elem)}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              fontSize: windowWidth < 900 ? "0.5rem !important" : "0.7rem !important",
                            }}
                          >
                            {getAuthor(elem)}
                          </Typography>
                        </div>
                      </Stack>
                      <MenuLib pdf={booksArray[id]} />
                    </Stack>
                    <Divider
                      variant="fullWidth"
                      sx={{
                        color: "#f4f4f4",
                        borderWidth: "3px",
                        marginTop: "0.5%",
                      }}
                    />
                  </div>
                );
              })
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
}
