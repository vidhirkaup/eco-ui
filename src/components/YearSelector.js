import './YearSelector.scss'
import { React } from 'react';
import { Link } from 'react-router-dom';

export const YearSelector = ({teamName}) => {

    let years = [];
    const startYear = 2010;
    const endYear = 2020;
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    return (
        <ol className="YearSelector">
            { years.map(year => <li key={year}> <Link to={`/teams/${teamName}/games/${year}`}> {year} </Link></li>) }
        </ol>
    )
}