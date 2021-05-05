import { React } from 'react';

export const GameSmallCard = ({game}) => {
  return (
    <div className="GameSmallCard">
        <h4>{game.team1} v/s {game.team2}</h4>
    </div>
  );
}