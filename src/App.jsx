import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Library from "./pages/Library";
import Words from "./pages/Words";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        {/* <Route path="/words" element={<Words />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Container>
    </>
  );
}

export default App;
