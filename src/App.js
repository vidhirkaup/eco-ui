import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TeamPage } from './pages/TeamPage';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

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
