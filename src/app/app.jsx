import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/header/header';
import Slider from '../components/slider/slider';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import {adminProc} from '../assets/cards/admin-proc';
import {sections} from '../assets/cards/sections';
import {guides} from '../assets/cards/guides';
import {structure} from '../assets/cards/structure';
import {schedules} from '../assets/cards/schedules';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />

      <Router>
        <Switch>
          <Route path="/admin" exact>
            <Main arrCards={adminProc} title="Административные процедуры"/>
          </Route>
          <Route path="/guide" exact>
            <Main arrCards={guides} title="Руководство"/>
          </Route>
          <Route path="/schedule" exact>
            <Main arrCards={schedules} title="график приЁма"/>
          </Route>
          <Route path="/structure" exact>
            <Main arrCards={structure} title="Структура"/>
          </Route>

          <Route path="/:param/:id"  render = {({ match }) => {
            console.log(match)
            switch (match.params.param) {
              case 'admin': {
                const card = adminProc.find((item) => item.id === match.params.id)
                return <Main text={card?.text} title={card?.title}/>
                }
              case 'guide': {
                const card = guides.find((item) => item.id === match.params.id)
                return <Main text={card?.text} title={card?.title}/>
                }
              case 'schedule': {
                const card = schedules.find((item) => item.id === match.params.id)
                return <Main text={card?.text} title={card?.title}/>
                }
              case 'structure': {
                const card = structure.find((item) => item.id === match.params.id)
                return <Main text={card?.text} title={card?.title}/>
                }
              default: break;
            }
          }}
          />
          <Route path="/" exact>
            <Main arrCards={sections}/>
          </Route>
        </Switch>
      </Router>
      
      <Footer /> 
    </div>
  );
}

export default App;