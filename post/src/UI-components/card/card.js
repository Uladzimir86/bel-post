import './card.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Card = ({title, icon, id}) => {

  let location = useLocation();
  let path = location.pathname !== '/' ? location.pathname : '';
  return (
    <div className="card">
      <span className="card__title">{title}</span>
      <Link to={`${path}/${id}`} className="card__link">
        <img src={icon} alt="icon"  className="card__icon"/>
      </Link>
    </div>
  )
}

export default Card;