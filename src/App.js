import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TeamPage } from './pages/TeamPage';
import { GamePage } from './pages/GamePage';

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
        
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
