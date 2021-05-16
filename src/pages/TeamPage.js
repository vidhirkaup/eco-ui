import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDetailCard } from '../components/GameDetailCard';
import { GameSmallCard } from '../components/GameSmallCard';

export const TeamPage = () => {

  const[team, setTeam] = useState([]);

  const { teamName } = useParams();

  useEffect(
    () => {
      const fetchGames = async () => {
        const response = await fetch(`http://localhost:18081/eco-api/games/teams/${teamName}`);
        const data = await response.json();
        setTeam(data);
      }
      fetchGames();
    }, 
    [teamName]
  )

  return (
    <div className="TeamPage">
        <h1>{team.teamName}</h1>
        
        <GameDetailCard teamName={team.teamName} game={team.games[0]}/>
        
        {team.games.slice(1).map(game => <GameSmallCard teamName={team.teamName} game={game}/>)}
    </div>
  );
}