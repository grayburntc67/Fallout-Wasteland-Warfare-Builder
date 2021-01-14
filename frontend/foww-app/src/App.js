import './App.css';
import Header from './Components/Header'
import ModeSelect from './Components/ModeSelect'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>

          <Header/>

          <Switch>
            <Route exact path="/">
              <ModeSelect/>
            </Route>

            <Route path="/freebuild">
              <h1>Free Build</h1>
            </Route>

            <Route path="/battlemode">
              <h1>Battle Mode</h1>
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
