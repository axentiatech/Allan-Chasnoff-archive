import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import Footer from "../components/Footer";
import { words } from "../constants/words";

export default function Words() {
  const words = [
    {
      word: "Geistigkeit",
      sentence: `was committed to "truth, order and justice," and, most importantly, 
      valorized Geistigkeit, spirituality or intellectuality, over Sinnlichkeit, 
      sensuality.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "Geistigkeit",
      sentence: `But Freud's hortatory celebration of Geistigkeit in IW"oses is itself flabby; it 
      does not live up to the critical iconoclasm that he saw as an essential 
      contribution of the monotheistic revolution.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "Geistigkeit",
      sentence: `One of the most problematic features of Freud's celebration of Geistigkeit is 
      his uncritical affirmation of its thoroughly androcentric and patriarchal 
      orientation.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "genitality",
      sentence: `Reich was proceeding to desexualize the libido in favor of a 
      biological genitality based on the blossoming of an orgiastic happiness from 
      which the death drive was excluded.`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "genitrix",
      sentence: `since her natural condition is to maintain three "inevitable" relationships with
      men: as genitrix, companion, and destroyer, three forms through which the 
      image of the mother passed during the course of a man's life-his`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "geonim",
      sentence: `The process which in time would lead the Talmud to influence kings and 
      revolutionaries, to be adored and reviled, to be published in multiple editions
      and cast to the flames, was not an inevitable consequence of people in far-
      flung Jewish communities getting answers to their questions from 
      the geonim in Baghdad.`,
      book: "The Talmud",
    },
    {
      word: "glossematic",
      sentence: `attaches it in general to phonematic or glossematic production, to language, 
      to voice, to hearing, to sound and breadth, to speech) were revealed today 
      as the guise or disguise of a primary \\'riting`,
      book: "Of Grammatology",
    },
  ];

  // Function to group words by their initial letter
  const groupWordsByAlphabet = () => {
    const groupedWords = {};

    words.forEach((word) => {
      const firstLetter = word.word.charAt(0).toUpperCase();
      if (!groupedWords[firstLetter]) {
        groupedWords[firstLetter] = [];
      }
      groupedWords[firstLetter].push(word);
    });

    return groupedWords;
  };

  const groupedWords = groupWordsByAlphabet();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const alphabetRef = useRef({});

  const handleAlphabetClick = (letter) => {
    if (alphabetRef.current[letter]) {
      alphabetRef.current[letter].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "75vh",
          position: "relative",
          overflow: "hidden",
          margin: "auto",
          marginTop: "23px",
          // marginBottom: "70px",
          bgcolor: "#f2f2f2",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color={"#409aba"}
          sx={{
            fontWeight: "800",
            borderTop: "1px solid #409aba",
            marginTop: "2%",
          }}
        >
          WORDS
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginTop: "2%",
            overflow: "auto",
            bgcolor: "#f2f2f2",
          }}
        >
          <Box
            sx={{
              margin: "auto",
              height: "70vh",
              maxHeight: "70vh",
              bgcolor: "#f2f2f2",
              display: "flex",
              justifyContent: "space-between",
              gap: "1%",
              width: "60%", // Default width for screens wider than 600px
              "@media (max-width: 600px)": {
                width: "90%", // Width for screens less than 600px
              },
            }}
          >
            {/* alphabet section */}
            <div
              className="alphabet-list"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "sticky",
                justifyContent: "space-between",
                height: "90%",
              }}
            >
              {alphabet.split("").map((letter) => (
                <Link
                  color={"primary"}
                  underline="hover"
                  key={letter}
                  sx={{
                    cursor: "pointer",
                    fontFamily: "Poppins, Arial, sans-serif",
                    fontSize: "0.85rem",
                  }}
                  // href="#"
                  onClick={() => handleAlphabetClick(letter)}
                  className="alphabet-letter"
                >
                  {letter}
                </Link>
              ))}
            </div>

            {/* Word section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                overflow: "auto",
              }}
            >
              {alphabet.split("").map((letter) => (
                <div
                  key={letter}
                  ref={(el) => (alphabetRef.current[letter] = el)}
                >
                  {/* <Typography variant="h5" sx={{ marginTop: 2 }}>{letter}</Typography> */}
                  {groupedWords[letter]?.map((elem, idx) => (
                    <EachCard key={idx} word={elem} />
                  ))}
                </div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
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

function EachCard(props) {
  return (
    <Card variant="elevation" square={true} sx={{ marginBottom: "2%" }}>
      <Box sx={{ width: "95%", margin: "auto", marginTop: "1%" }}>
        <Typography sx={{ fontWeight: "600", fontSize: "0.9rem" }}>
          {props.word.word}
        </Typography>
      </Box>
      <CardContent sx={{ marginTop: "-2%" }}>
        <Box
          sx={{
            border: "1px solid #e1e1e1",
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              marginBottom: "1%",
              textAlign: {
                xs: "center",
                sm: "start",
              },
            }}
          >
            {props.word.sentence}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "#45accf",
              textAlign: { xs: "center", sm: "end" },
            }}
          >
            {props.word.book}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
