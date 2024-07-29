// App.jsx
import './styles/index.scss';
import React from 'react';
import { SeasonProvider, useSeasonContext } from './contexts/SeasonContext';
import LandingPage from './components/LandingPage';

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
      <LandingPage />
    </div>
  );
}

export default App;
