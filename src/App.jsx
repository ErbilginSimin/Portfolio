import './styles/index.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Projects from './components/Proj/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SeasonMenu from './components/SeasonMenu/SeasonMenu';
import { SeasonProvider } from './contexts/SeasonContext';
import { useSeasonContext } from './contexts/SeasonContext';

function App() {
  return (
    <SeasonProvider>
      <MainContent />
    </SeasonProvider>
  );
}

function MainContent() {
  const { season } = useSeasonContext();

  return (
    <div className={`app-container ${season.toLowerCase()}`}>
      <Header />
      <SeasonMenu />
      <main className="flex-grow">
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
