import './App.scss';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

export const history = createBrowserHistory( {
  basename: process.env.PUBLIC_URL
} );

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/games/:year">
            <GamePage />
          </Route>
          
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
