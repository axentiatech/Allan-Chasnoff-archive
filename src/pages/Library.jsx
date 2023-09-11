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
  useEffect(() => {
    getData();
  }, []);

  function getName(name){
    console.log(name);
    const nameArr = name.split('-');
    const author = nameArr.pop();
    if(nameArr.length === 0){
      return name.split('Author')[0];
    }
    else{
      return nameArr;
    }
  }

  function getAuthor(name){
    console.log(name);
    const nameArr = name.split('-');
    const author = nameArr.pop();
    if(nameArr.length === 0){
      const authorName = name.split('Author')[1];
      return "by" + authorName;
    }
    else{
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

  function handleChange(name){
    setSearch(name);
  }

  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
   

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
            { filteredItems.length === 0 ?<Box sx={{width:"90%",margin:"auto"}} ><Typography variant="h6">Sorry, we couldn't find any results matching your search.</Typography></Box> 
            :filteredItems.map((elem, id) => {
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
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems:"center", maxWidth: "80%" }}
                    >
                        <img
                          src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
                          style={{
                            maxWidth: "8vw",
                          }}
                        />
                        <div>
                      <Typography
                        variant="h6"
                        sx={{
                          cursor: "pointer",
                          "&:hover": { textDecoration: "underline" },
                          fontSize: "0.9rem",
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                        color={"#45accf"}
                      >
                        {getName(elem)}
                      </Typography>
                      <Typography
                      variant="h6"
                      sx={{color:"grey",fontSize:{
                        xs:"0.6rem",
                        lg:"0.8rem"
                      }}}
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
                      marginTop: "2%",
                    }}
                  />
                </div>
              );
            })}
          </CardContent>
        </>
      )}
    </Card>
  );
}
