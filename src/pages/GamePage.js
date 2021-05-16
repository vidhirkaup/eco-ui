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
    []
  )

  return (
    <div className="GamePage">
        <h1>Game Page</h1>

        {
          games.map(game => <GameDetailCard teamName={teamName} game={game}/>)
        }
    
    </div>
  );
}