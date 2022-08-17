
import './App.css';
import { Routes, Route } from 'react-router'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar' 
import Skills from './pages/Skills'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import History from './pages/History'
import MusicBox from './components/MusicBox/MusicBox';
import SocialSideTab from './components/SocialSideTab/SocialSideTab';
import Footer from './components/Footer/Footer';
import BackgroundGalaxy from './components/BackgroundGalaxy/BackgroundGalaxy';
import ResumeBtn from './components/ResumeBtn/ResumeBtn';

function App() {
  return (
    <>
      <Navbar />
      <MusicBox />
      <SocialSideTab />
      <BackgroundGalaxy />
      <ResumeBtn />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
