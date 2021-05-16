import "./GameSmallCard.scss"
import { React } from 'react';
import { Link } from 'react-router-dom';

export const GameSmallCard = ({teamName, game}) => {
  const otherTeam = (teamName === game.team1) ? game.team2 : game.team1;

  const linkToOtherTeam = `/teams/${otherTeam}`;

  const isMatchWinner = (teamName === game.winner);

  return (
    <div className={ isMatchWinner ? 'GameSmallCard won-card' : 'GameSmallCard lost-card' }>
        
        <span className="vs">v/s</span>
        
        <h1><Link to={linkToOtherTeam}> {otherTeam} </Link></h1>

        <p className="game-result">{game.winner} won by {game.resultMargin} {game.result}</p>
    </div>
  );
}