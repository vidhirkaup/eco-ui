import './HomePage.scss';
import { useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";


export const HomePage = () => {
    const[teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:18081/eco-api/games/teams`);
                const data = await response.json();
                setTeams(data);
              }
              fetchTeams();
        },
        []
    )

    return(
        <div className="HomePage">
            <div className="app-name">
                IPL Dashboard
            </div>

            <div className="team-grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />) }
            </div>
        </div>
    );
}