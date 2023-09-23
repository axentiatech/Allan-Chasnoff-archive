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

export default function Words() {
  const words = [
    {
      word: "apple",
      sentence: "She picked a juicy apple from the tree.",
      book: "The Orchard by Theresa Weir",
    },
    {
      word: "arms",
      sentence: "He flexed his strong arms.",
      book: "Strength Training by John Smith",
    },
    {
      word: "banana",
      sentence: "He enjoyed a banana for breakfast.",
      book: "The Fruit Hunters by Adam Leith Gollner",
    },
    {
      word: "bear",
      sentence: "The bear roamed through the forest.",
      book: "Bears of the Wild by Sarah Johnson",
    },
    {
      word: "cat",
      sentence: "The cat lazily stretched and purred.",
      book: "The Cat in the Hat by Dr. Seuss",
    },
    {
      word: "call",
      sentence: "She received an important call.",
      book: "Phone Etiquette by Jane Doe",
    },
    {
      word: "dog",
      sentence: "The loyal dog followed its owner everywhere.",
      book: "The Call of the Wild by Jack London",
    },
    {
      word: "elephant",
      sentence: "The elephant trumpeted loudly in the zoo.",
      book: "Water for Elephants by Sara Gruen",
    },
    {
      word: "eagle",
      sentence: "The eagle soared high in the sky.",
      book: "Eagles: Masters of the Sky by Michael Brown",
    },
    {
      word: "fox",
      sentence: "The cunning fox outwitted the hunters.",
      book: "Fantastic Mr. Fox by Roald Dahl",
    },
    {
      word: "frog",
      sentence: "The frog leaped into the pond.",
      book: "Frogs: A Natural History by John Smith",
    },
    {
      word: "grape",
      sentence: "She enjoyed a bunch of sweet grapes.",
      book: "The Grape Escape by Aviva Gat",
    },
    {
      word: "goat",
      sentence: "The goat grazed on the hillside.",
      book: "Goats in the Wild by Susan Davis",
    },
    {
      word: "hedgehog",
      sentence: "The spiky hedgehog curled into a ball.",
      book: "The Tale of Mrs. Tiggy-Winkle by Beatrix Potter",
    },
    {
      word: "iguana",
      sentence: "The iguana basked in the sun on a rock.",
      book: "The Iguana by Anna Maria Shermis",
    },
    {
      word: "jaguar",
      sentence: "The jaguar prowled silently through the jungle.",
      book: "Jaguar by Roland Smith",
    },
    {
      word: "kangaroo",
      sentence: "The kangaroo hopped across the Australian outback.",
      book: "Kangaroo by D.H. Lawrence",
    },
    {
      word: "kiwi",
      sentence: "She sliced a ripe kiwi for breakfast.",
      book: "Kiwi: The Fruit of New Zealand by Linda Anderson",
    },
    {
      word: "lemon",
      sentence: "She squeezed lemon juice into her tea.",
      book: "The Lemon Tree by Sandy Tolan",
    },
    {
      word: "lion",
      sentence: "The lion roared in the savanna.",
      book: "Lions of the African Plains by Michael Brown",
    },
    {
      word: "monkey",
      sentence: "The mischievous monkey stole a banana.",
      book: "Curious George by H.A. Rey and Margret Rey",
    },
    {
      word: "mouse",
      sentence: "The tiny mouse scurried across the floor.",
      book: "The Mouse and the Motorcycle by Beverly Cleary",
    },
    {
      word: "nightingale",
      sentence: "The nightingale's song filled the night with beauty.",
      book: "The Nightingale by Kristin Hannah",
    },
    {
      word: "octopus",
      sentence: "The octopus had eight long tentacles.",
      book: "The Soul of an Octopus by Sy Montgomery",
    },
    {
      word: "ostrich",
      sentence: "The ostrich ran through the desert.",
      book: "Ostriches: The Largest Birds on Earth by Susan Davis",
    },
    {
      word: "penguin",
      sentence: "The penguin waddled gracefully on the ice.",
      book: "Mr. Popper's Penguins by Richard and Florence Atwater",
    },
    {
      word: "parrot",
      sentence: "The colorful parrot squawked loudly.",
      book: "Parrots: A Guide to Their Behavior by Jane Doe",
    },
    {
      word: "quokka",
      sentence: "The quokka had a friendly smile.",
      book: "The Quokka's Quest by Claudette Melanson",
    },
    {
      word: "raccoon",
      sentence: "The raccoon rummaged through the garbage cans.",
      book: "The Kissing Hand by Audrey Penn",
    },
    {
      word: "squirrel",
      sentence: "The squirrel gathered nuts for the winter.",
      book: "The Tale of Squirrel Nutkin by Beatrix Potter",
    },
    {
      word: "tiger",
      sentence: "The fierce tiger stalked its prey in the jungle.",
      book: "Life of Pi by Yann Martel",
    },
    {
      word: "turtle",
      sentence: "The turtle moved slowly in the water.",
      book: "Turtles: A Complete Guide by Susan Davis",
    },
    {
      word: "umbrella",
      sentence: "She opened her umbrella to shield from the rain.",
      book: "Ella's Umbrellas by Jennifer Lloyd",
    },
    {
      word: "vulture",
      sentence: "The vulture circled high in the sky.",
      book: "Vulture Verses: Love Poems for the Unloved by Diane Lang",
    },
    {
      word: "whale",
      sentence: "The majestic whale breached the surface of the ocean.",
      book: "Moby-Dick by Herman Melville",
    },
    {
      word: "walrus",
      sentence: "The walrus basked on the icy shore.",
      book: "Walruses: Giants of the Arctic by Linda Anderson",
    },
    {
      word: "xylophone",
      sentence: "The xylophone produced a melodious tune.",
      book: "The Xylophone Patrol by John Antal",
    },
    {
      word: "x-ray",
      sentence: "The x-ray revealed a broken bone.",
      book: "X-Rays: A Guide to Medical Imaging by Jane Doe",
    },
    {
      word: "yak",
      sentence: "The shaggy yak grazed on the mountainside.",
      book: "Yaks Yak: Animal Word Pairs by Linda Sue Park",
    },
    {
      word: "zebra",
      sentence: "The zebra's black and white stripes were striking.",
      book: "Z Is for Zebra: Learning the Alphabet with Animals by Bobie Bookman",
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
      <Footer />
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
