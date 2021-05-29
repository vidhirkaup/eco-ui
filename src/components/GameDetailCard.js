import './GameDetailCard.scss'
import { React } from 'react';
import { Link } from 'react-router-dom';

export const GameDetailCard = ({teamName, game}) => {
  
  const otherTeam = (teamName === game.team1) ? game.team2 : game.team1;

  const linkToOtherTeam = `/teams/${otherTeam}`;
  
  const isMatchWinner = (teamName === game.winner);
  
  return (
      <div className= { isMatchWinner ? 'GameDetailCard won-card' : 'GameDetailCard lost-card' }>
        <div >
          <span className="vs">v/s</span> 
          <h1><Link to={linkToOtherTeam}>{otherTeam}</Link></h1>
          
          <h2 className="game-date">{game.date}</h2>
          
          <h3 className="game-venue">at {game.venue}</h3>
          
          <p className="game-result">{game.winner} won by {game.resultMargin} {game.result} </p>
        </div>

        <div className='game-detail'>
          <h3>First Innings</h3>
          <p>{game.team1}</p>

          <h3>Second Innings</h3>
          <p>{game.team2}</p>

          <h3>Man of the match</h3>
          <p>{game.playerOfMatch}</p>

          <h3>Umpires</h3>
          <p>{game.umpire1}, {game.umpire2}</p>
        </div>

      </div>
  );
}