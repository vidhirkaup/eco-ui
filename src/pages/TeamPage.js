import './TeamPage.scss'
import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { GameDetailCard } from '../components/GameDetailCard';
import { GameSmallCard } from '../components/GameSmallCard';
import { Home } from '../components/Home';

export const TeamPage = () => {

  const[team, setTeam] = useState({games: []});

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

  if(!team || !team.teamName) {
    return <h1>Team not found</h1>
  }

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
        
        {team.games.slice(1).map(game => <GameSmallCard key={game.id} teamName={team.teamName} game={game}/>)}
        
        <div className="more-link">
          <Link to={`/teams/${team.teamName}/games/2020`}>More {'>'}</Link>
          <hr></hr>
          <Home/>
        </div>

    </div>
  );
}