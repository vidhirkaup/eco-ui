import './TeamPage.scss'
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
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
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
        </div>

        <div className="win-loss-section">
          <h1>Wins/Losses</h1>
          <PieChart
            data={[
              { title: 'Losses', value: team.totalGames - team.totalWins, color: '#963423fc' },
              { title: 'Wins', value: team.totalWins, color: '#067c41' },
            ]}
          />
        </div>
        
        <div className="game-detail-section">
          <h3>Latest Game</h3>
          <GameDetailCard teamName={team.teamName} game={team.games[0]}/>
        </div>
        
        {team.games.slice(1).map(game => <GameSmallCard teamName={team.teamName} game={game}/>)}
        
        <div className="more-link">
          <a href="#"> More > </a>
        </div>

    </div>
  );
}