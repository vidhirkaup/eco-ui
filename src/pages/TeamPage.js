import { React } from 'react';
import { GameDetailCard } from '../components/GameDetailCard';
import { GameSmallCard } from '../components/GameSmallCard';

export const TeamPage = () => {
  return (
    <div className="TeamPage">
        <h1>Team Name</h1>

        <GameDetailCard />
        
        <GameSmallCard />
        
        <GameSmallCard />
        
        <GameSmallCard />
    </div>
  );
}