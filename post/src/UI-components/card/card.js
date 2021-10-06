import './card.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Card = ({title, icon, id}) => {
  return (
    <div className="card">
      <span className="card__title">{title}</span>
      <Link to={`/${id}`} className="card__link">
        <img src={icon} alt="icon"  className="card__icon"/>
      </Link>
    </div>
  )
}

export default Card;