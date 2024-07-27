// App.jsx
import './styles/index.scss';
import React from 'react';
import { SeasonProvider, useSeasonContext } from './contexts/SeasonContext';
import Default from './components/Seasons/Default';
import Summer from './components/Seasons/Summer';
import Autumn from './components/Seasons/Autumn';
import Winter from './components/Seasons/Winter';
import Spring from './components/Seasons/Spring';
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
      <main className="flex-grow">
        {season === 'Summer' && <Summer />}
        {season === 'Autumn' && <Autumn />}
        {season === 'Winter' && <Winter />}
        {season === 'Spring' && <Spring />}
        {!['Summer', 'Autumn', 'Winter', 'Spring'].includes(season) && <Default />}
      </main>
    </div>
  );
}

export default App;
