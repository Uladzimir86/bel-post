import { useLocation, Link, useHistory } from "react-router-dom";
import './main.scss';
import Card from '../../UI-components/card/card';
import {sections} from '../../assets/cards/sections';
import { useEffect, useState  } from "react";
import Back from '../../assets/icons/down.png';
import Home from '../../assets/icons/Home.png';

const Main = ({arrCards = [], title = '', text = ''}) => {
const cards = arrCards.map(item => {
    return (
      <Card title={item.title} icon={item.icon} id={item.id} key={item.id} />
    )
  })

let location = useLocation();
let history = useHistory();
const [mainClass, setMainClass] = useState('main');

useEffect(() => {
  if(location.pathname === '/') setMainClass('main')
    else setMainClass('main main_section')
}, [location])


  return (
    <main className={mainClass}>
      {title && 
        <div className="main__title">
          {title}

          {text && <button 
            type="button" 
            className="main__btn main__btn_home" 
            onClick={
              () => history.push('/')
            }
          >
            <img src={Home} alt="icon home" className="main__btn_home"/>
          </button>}

          <button 
            type="button" 
            className="main__btn main__btn_back" 
            onClick={
              () => history.goBack()
            }
          >
            <img src={Back} alt="icon back" className="main__btn_back"/>
          </button>
        </div>
      }
      <div className="main__cards-container">
        {cards}
      </div>
      <div className="main__text">
        {text}
      </div>
    </main>
  )
}

export default Main;