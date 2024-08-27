import React from 'react';
import LandingPage from './components/LandingPage';
import { SeasonProvider, useSeason } from './contexts/SeasonContext';
import './styles/index.scss';

function App() {
  return (
    <SeasonProvider>
      <MainContent />
    </SeasonProvider>
  );
}

function MainContent() {
  const { season } = useSeason();

  return (
    <div className={`app-container ${season.toLowerCase()}`}>
      <LandingPage />
    </div>
  );
}

export default App;
