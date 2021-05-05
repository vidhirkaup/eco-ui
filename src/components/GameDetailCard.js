import { React } from 'react';

export const GameDetailCard = ({game}) => {
  return (
    <div className="GameDetailCard">
        <h1>Game Detail</h1>
        <h2>{game.team1} v/s {game.team2}</h2>
    </div>
  );
}