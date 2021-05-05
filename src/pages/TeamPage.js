import { React, useEffect, useState } from 'react';
import { GameDetailCard } from '../components/GameDetailCard';
import { GameSmallCard } from '../components/GameSmallCard';

export const TeamPage = () => {

  const[team, setTeam] = useState({});

  useEffect(
    () => {
      const fetchGames = async () => {
        const response = await fetch('http://localhost:18081/eco-api/games/teams/Royal Challengers Bangalore');
        const data = await response.json();
        setTeam(data);
      }
      fetchGames();
    }, []
  )

  return (
    <div className="TeamPage">
        <h1>{team.teamName}</h1>

        <GameDetailCard game={team.games[0]}/>

        {team.games.slice(1).map(game => <GameSmallCard game={game}/>)}
        
    </div>
  );
}