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
      word: "cachet",
      sentence: `And with this cachet of acceptability concerning an aspect of our lives that's 
      always coming to terms with thought police both to the right and left of us, 
      the word "sexuality" takes hold;`,
      book: "Theory of Literature",
    },
    {
      word: "camalis",
      sentence: `Paul's teachings, which criticize Israel claims and Jewish legalism in the name
      of Christian spirituality, are more central to its history.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "canaille",
      sentence: `Marx also issued public statements attacking anti-communist 
      democrats-'(these petit-bourgeois canaille" and the "cowardly impudence of 
      the bourgeois newspapers"-who were denouncing Lassalle as overly pro-
      Prussian.`,
      book: "Karl Marx",
    },
    {
      word: "canard",
      sentence: `But Gay is subscribing to what Yerushalmi calls "that canard of the 
      Enlightenment"`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "caprisoned",
      sentence: `As I chugged, dead slow, past the yachts looking ./ like 
      ponderous caprisoned elephants in gleaming outdoor stalls, M~ moved close
      to me and hooked her left hand over my near shoulder and made a laughing 
      sound of delight.`,
      book: "The Scarlett Ruse",
    },
    {
      word: "catachreses",
      sentence: `They're lingering oxymorons, arguably catachresis or even solecisms, which 
      for whatever reason leave a good deal unresolved.`,
      book: "Theory of Literature",
    },
    {
      word: "Catachresis",
      sentence: `Catachresis - the metaphor of an 'I' of which there is nothing propre, nothing 
      literal, no letter`,
      book: "Reading Derrida's of Grammatology",
    },
    {
      word: "Catachresis",
      sentence: `No metaphor stands on all fours but always has an element of what’s 
      called catachresis in it.`,
      book: "Theory of Literature",
    },
    {
      word: "Catachresis",
      sentence: `No metaphor stands on all fours but always has an element of what’s 
      called catachresis in it.`,
      book: "Theory of Literature",
    },
    {
      word: "caul",
      sentence: `And in another incident, Amalie took the fact that her infant was born in 
      a caul as an indication that happiness and fame lay in his future.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "cenacle",
      sentence: `This experiment in the "communism of life" brought Hessel into contact not 
      just with the Cosmic Circle but also with the leading figures in the most 
      advanced modernist cenacle in Germany:`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "cenotaph",
      sentence: `Hence any epitaph is therefore a self-declared cenotaph, an inscription on a 
      place where the body isn't-which of course tells us a lot, too, about the 
      arbitrary nature of language.`,
      book: "Theory of Literature",
    },
    {
      word: "chiasm",
      sentence: `But as soon as the discussion became more concrete, a curious chiasm came
      into play.`,
      book: "Derrida A Biography",
    },
    {
      word: "chiastic",
      sentence: `Much of "Baudelaire III" fixes on the chiastic relations be- tween Baudelaire's 
      key terms spleen and ideal.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chimera",
      sentence: `The death drive, thus defined, was an entity that could not be found from the
      vantage point of biology: a chimera.`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "chirography",
      sentence: `because these new poets arose from a new chirographically styled poetic 
      world by outmoding conventional poetic formulation.`,
      book: "Walter Benjamin and the Media",
    },
    {
      word: "chiromancy",
      sentence: `that have come with the revival of astrology and the wisdom of yoga, 
      Christian Science and chiromancy, vegetarianism and gnosis, scholasticism 
      and spiritualism.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonian",
      sentence: `Racine's Theseus is like Aeschylus's Darius, they are chthonian creatures, 
      who have become acquainted with the dead: to perform tragedy,`,
      book: "Barthes A Biography",
    },
    {
      word: "chthonic",
      sentence: `or the chthonic marketplace`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `breaks free from its entanglement in that text's Internal content, as from 
      a chthonic element.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `of the way metropolitan sites are evoked from the perspective of a child in 
      Benjamin's text, especially chthonic or underground sites such as the indoor 
      public swimming pool, the marketplace, the sidewalks with their gratings 
      looking down into basement apartments,`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `Kafka's figures live in a kind of swamp that is alive with the repressed 
      memory of that primordial age; chthonic powers assert their claim on the 
      present age by imposing forgetfulness.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `his experience of the new and ever-same that stamps the modern face of 
      Paris, and his adumbration of a subterranean Paris, with 
      its chthonic resonance of a mythic past.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `Through it, previously unknown chthonic features engrave them- selves on 
      the cityscape.-To disclose these aspects of Paris was the manifest task of the
      poet`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `They are chthonic, or "autochthonous," as Levi-Strauss puts it, meaning they 
      are self-born from the earth.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `They are chthonic, or "autochthonous," as Levi-Strauss puts it, meaning they 
      are self-born from the earth.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "chthonic",
      sentence: `They prevented Freud from entering the more irrational, diffuse, fluid, and 
      indeterminate areas of experience, represented in philosophy by Heraclitus, 
      in mythology by the chthonic deities, and in psychoanalysis by the archaic 
      mother.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "clinamen",
      sentence: `In the first revisionary ratio, clinamen, I am swerving from the past: I swerve 
      out and down`,
      book: "Theory of Literature",
    },
    {
      word: "coefficients",
      sentence: `Thus an offensive that had proceeded, in recent years, more prudently and 
      deceitfully is openly accelerated: the accentuated dissociation of the 
      scientific and the philosophical, the actively selective orientation of the 'best'
      students toward sections giving less room to philosophy, the reduction of 
      teaching hours, coefficients, teaching positions, and so forth.`,
      book: "Derrida A Biography",
    },
    {
      word: "coeval",
      sentence: `His philosophical treatise Guide for the Perplexed was the first significant 
      attempt to systematically explain the rationale behind the Jewish faith to 
      those who, as the name implies, found it difficult to hold onto religious belief 
      in the face of coeval, speculative thinking.`,
      book: "The Talmud",
    },
    {
      word: "coeval",
      sentence: `and the story is almost coeval with Shannon's paper.`,
      book: "The Talmud",
    },
    {
      word: "cohort",
      sentence: `What justifies designating the cohort of those born between`,
      book: "Habermas A Biography",
    },
    {
      word: "Coleridge",
      sentence: `In order to rephrase these important distinctions, I want to turn to a passage 
      from Samuel Taylor Coleridge, who is, at least on this occasion, a disciple of 
      Kant`,
      book: "Theory of Literature",
    },
    {
      word: "collocation",
      sentence: `And like many mythical creatures, writing is faced with the paradox of having
      to erupt or evolve or birth itself out of a collocation of things that aren't 
      writing at all.`,
      book: "Palimpsest",
    },
    {
      word: "collocations",
      sentence: `or perhaps like a strand of DNA, unspooling its referents and resonances as 
      endlessly reproducible collocations of symbols and effects.`,
      book: "Palimpsest",
    },
    {
      word: "colloquia",
      sentence: `and who discussed the early writings of Marx in his colloquia.`,
      book: "Habermas A Biography",
    },
    {
      word: "colportage",
      sentence: `Benjamin comes up with the formula "colportage phenomenon of space," 
      and in The Arcades Project this curious phenomenon is said to be the basic 
      experience of the flaneur, one in which far-off times and places 
      interpenetrate the landscape and the present moment.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "colportage",
      sentence: `and it is here in particular that one encounters a whole set of Benjaminian 
      motifs, including colportage, gaslight, world exhibitions, plush, the detective 
      novel, Jugendstil, and so on.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "complaisance",
      sentence: `Levi-Strauss had to purchase their chief's complaisance with beads and other
      goods.`,
      book: "Palimpsest",
    },
    {
      word: "complement",
      sentence: `and that Kafka's world, often so serene and pervaded by angels, is the 
      exact complement of his age"`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "conative",
      sentence: `For a proof text, I've been at some pains to find the most uninteresting 
      possible expression in order to show that any utterance whatsoever must 
      entail these six functions.`,
      book: "Theory of Literature",
    },
    {
      word: "conative",
      sentence: `When the poetic function dominates, giving rise to the poetics within the 
      linguistics of Jakob son's title, it reflects a metaphoric as opposed to a 
      metonymic structure insofar as we observe some kind of pressure from the 
      axis of selection, with its principle of equivalence, bringing itself to bear on 
      the way in which the combination takes place.`,
      book: "Theory of Literature",
    },
    {
      word: "conatus",
      sentence: `this unifying conatus in psychic life until he introduced the concept of eros in 
      the 1920s`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "condottiere",
      sentence: `Before the investigation was terminated for lack of evidence, word had got 
      out, and the sexual inclinations of the corpulent condottiere soon occasioned
      much talk.`,
      book: "Goebbels",
    },
    {
      word: "congeric",
      sentence: `Let us dream of a friendship which goes beyond this proximity of 
      the congeric double, beyond kinship, the most as well as the least natural of 
      parenthoods, when it leaves its signature, from the outset, on the name as 
      on a double mirror of such a couple.`,
      book: "Derrida A Biography",
    },
    {
      word: "conjuration",
      sentence: `he affixed the three Christian crosses of conjuration to which the power of 
      healing an illness or lifting a spell was traditionally attributed.`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "convolute",
      sentence: `with daily research at the Bibliotheque Nationale and the rapid expansion 
      of Convolute J of the arcades manuscript, the Convolute dedicated to 
      Baudelaire.`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "convolute",
      sentence: `Benjamin began a new convolute of arcades materials,`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "coping",
      sentence: `he added; "it would put the coping stone on [psychoanalysis],`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "coquet",
      sentence: `The notion that limited access to the object enhances enjoyment may be a 
      strategical maxim that a coquet can usefully subscribe to, but is it true?`,
      book: "Freud - An Intellectual Biography ",
    },
    {
      word: "corniches",
      sentence: `He travels up its corniches in a series of looping arcs which, he hopes, will 
      become smaller and tighter as he nears the top`,
      book: "A Mind At Play",
    },
    {
      word: "credit",
      sentence: `Some have found it hard to credit that I did not know Jacques Derrida's name
      when I bought De fa grammatofogie ofT the Minuit catalogue because it 
      looked interesting.`,
      book: "Reading Derrida's of Grammatology",
    },

    {
      word: "faradi",
      sentence: `The pains caused by brush faradization are indescribable.`,
      book: "Freud In His Time and Ours",
    },
    {
      word: "fascicle",
      sentence: `Then there is what he calls the "fascicle book,>' with complicated offshoots 
      of roots that still trace back to a taproot.`,
      book: "Theory of Literature",
    },
    {
      word: "Festschrift",
      sentence: `As he pointed out in his contribution to the Festschrift for Gadamer's 
      seventieth birthday,`,
      book: "Habermas A Biography",
    },
    {
      word: "filiations",
      sentence: `tenuous filiations in Benjamin's intellectual position could be interpreted, 
      uncharitably, as opportunism:`,
      book: "Walther Benjamin A Critical Life",
    },
    {
      word: "Flensed",
      sentence: `Flensed, scraped, split, burnished and seasoned to a creamy off-white 
      uniformity.`,
      book: "Fud's Book",
    },
    {
      word: "foreign",
      sentence: `permanently translate foreign texts, foreign worlds`,
      book: "Habermas A Biography",
    },
    {
      word: "Fortschritt",
      sentence: `The "third ear" of every self-respecting analyst should perk up at the 
      mention of Fortschritt, for, as Freud taught us, there is no unambiguous 
      progress in psychic life or in cultural history.`,
      book: "Freud - An Intellectual Biography",
    },
    {
      word: "frangible",
      sentence: `Long long long ago I stepped on a round stone in darkness and fell heavily at
      the instant that automatic weapons' fire yellow-stitched the night where I 
      had been standing six feet four inches tall and frangible.The "third ear" of every self-respecting analyst should perk up at the 
      mention of Fortschritt, for, as Freud taught us, there is no unambiguous 
      progress in psychic life or in cultural history.`,
      book: "The Scarlett Ruse",
    },
    {
      word: "fulsome",
      sentence: `The praise was fulsome, the kind of acclaim that most authors work a 
      lifetime to achieve.`,
      book: "Mind At Play",
    },
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
