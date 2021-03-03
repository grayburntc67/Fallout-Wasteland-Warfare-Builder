import './App.css';
import Header from './Components/Header'
import ModeSelect from './Components/ModeSelect'
import Builder from './Components/Builder'
import{
  BrowserRouter as Router,
  Switch,
  Route
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
              <Builder/>
            </Route>

            <Route path="/battlemode">
              <Builder/>
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
