import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./pages/Skills";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import History from "./pages/History";
import MusicBox from "./components/MusicBox/MusicBox";
import SocialSideTab from "./components/SocialSideTab/SocialSideTab";
import Footer from "./components/Footer/Footer";
import BackgroundGalaxy from "./components/BackgroundGalaxy/BackgroundGalaxy";
import ResumeBtn from "./components/ResumeBtn/ResumeBtn";
import BackgroundVid from "./components/BackgroundVid/BackgroundVid";

function App() {
  return (
    <>
      <Navbar />
      <MusicBox />
      <SocialSideTab />
      {/* <BackgroundGalaxy /> */}
      <BackgroundVid />
      <ResumeBtn />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
