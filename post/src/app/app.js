import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../components/header/header';
import Slider from '../components/slider/slider';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />

      <Router>
        <Switch>
          <Route path="/admin">
            <Main />
          </Route>
          <Route path="/guide">
            <Main />
          </Route>
          <Route path="/schedule">
            <Main />
          </Route>
          <Route path="/structure">
            <Main />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Main />
      </Router>
      
      <Footer /> 
    </div>
  );
}

export default App;
