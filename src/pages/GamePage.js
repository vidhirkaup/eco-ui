import './GamePage.scss'
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GameDetailCard } from '../components/GameDetailCard';

export const GamePage = () => {

  const[games, setGames] = useState([]);

  const { teamName, year } = useParams();

  useEffect (
    () => {
      const fetchGames = async () => {
        const response = await fetch(`http://localhost:18081/eco-api/games/teams/${teamName}/plays?year=${year}`);
        const data = await response.json();
        setGames(data);
      }
      fetchGames();
    },
    [teamName, year]
  )

  return (
    <div className="GamePage">
        <div className="year-selector-section">
          <h3>Choose year</h3>
        </div>

        <div className="games-section">
          <h3>Games Played</h3>

          { games.map(game => <GameDetailCard teamName={teamName} game={game}/>)}
        </div>
    
    </div>
  );
}