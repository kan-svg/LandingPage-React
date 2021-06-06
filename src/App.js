import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import ContactForm from './components/ContactForm'


function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/terms" component={Terms} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/contact" component={ContactForm} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
