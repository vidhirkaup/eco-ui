import './Home.scss';
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div className="home-page-link">
            <Link to={`/teams`}>{'<'} Home</Link>
        </div>
    );
}