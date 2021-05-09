import { React } from 'react';
import { Link } from 'react-router-dom';

export const GameSmallCard = ({teamName, game}) => {
  const otherTeam = (teamName === game.team1) ? game.team2 : game.team1;

  const linkToOtherTeam = `/teams/${otherTeam}`;

  return (
    <div className="GameSmallCard">
        <hr></hr>
        <h3>v/s 
          <Link to={linkToOtherTeam}> {otherTeam} </Link>
        </h3>
        <p>{game.winner} won by {game.resultMargin} {game.result}</p>
    </div>
  );
}