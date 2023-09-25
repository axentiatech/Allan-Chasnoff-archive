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
import MenuLib from "../components/MenuLib";

import Footer from "../components/Footer";
import { booksData } from "../utils/data";

export default function Library() {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const [books, setBooks] = useState(booksData);
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

  useEffect(() => {
    const iteratedData = [];
    booksData.forEach((item) => {
      if (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase())
      ) {
        iteratedData.push(item);
      } else {
        null;
      }
      setBooks(iteratedData);
    });
  }, [search]);

  // const filteredItems = list.filter((item) =>
  //   item.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <Card
        sx={{
          marginTop: windowWidth < 900 ? "10%" : "2%",
          maxHeight: "80vh",
          // marginBottom: "50px",
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
            {/* Search Feature */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{
                width: "60%",
                margin: "auto",
                marginTop: "2%",
              }}
            >
              <TextField
                value={search}
                variant="filled"
                label="Search"
                fullWidth
                size="small"
                // fontSize="small"
                // sx={{ padding: "5px", paddingBottom: 0 }}
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
              <IconButton
                onClick={() => {
                  setSearch("");
                  setBooks(booksData);
                }}
              >
                <CloseRounded />
              </IconButton>
            </Stack>
            {/* filteredItems.length === 0 ? (
              <Box sx={{ width: "90%", margin: "auto" }}>
                <Typography variant="h6">
                  Sorry, we couldn't find any results matching your search.
                </Typography>
              </Box>
            )  */}
            <CardContent>
              {books.map((data, id) => {
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
                          src={"/thumbnails/" + (id + 1) + ".png"}
                          style={{
                            width: windowWidth < 900 ? "8vw" : "4vw",
                          }}
                        />
                        <div>
                          <Typography
                            variant="h6"
                            sx={{
                              cursor: "pointer",
                              "&:hover": { textDecoration: "underline" },
                              fontSize: windowWidth < 900 ? "0.8rem" : "1rem",
                              wordWrap: "break-word",
                              whiteSpace: "normal",
                            }}
                            onClick={() =>
                              window.open(
                                window.location.origin +
                                  "/books/" +
                                  (id + 1) +
                                  ".pdf",
                                "_blank"
                              )
                            }
                            color={"#45accf"}
                          >
                            {data.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              fontSize:
                                windowWidth < 900
                                  ? "0.5rem !important"
                                  : "0.7rem !important",
                            }}
                          >
                            {data.author}
                          </Typography>
                        </div>
                      </Stack>
                      {/* <MenuLib pdf={id + 1} /> */}
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
              })}
            </CardContent>
          </>
        )}
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
    </>
  );
}
