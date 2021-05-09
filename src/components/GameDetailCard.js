import { React } from 'react';
import { Link } from 'react-router-dom';

export const GameDetailCard = ({teamName, game}) => {
  const otherTeam = (teamName === game.team1) ? game.team2 : game.team1;
  const linkToOtherTeam = `/teams/${otherTeam}`;
  return (
    <div className="GameDetailCard">
        <hr/>
        <h3>Latest Game</h3>
        <h1>v/s {otherTeam}</h1>
        <h2>on {game.date}</h2>
        <h3>at {game.venue}</h3>
        <h3><Link to={linkToOtherTeam}>{game.winner}</Link> won by {game.resultMargin} {game.result} </h3>
    </div>
  );
}