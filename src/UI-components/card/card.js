import './card.scss';
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Card = ({title, icon, id, trans}) => {
  
  const { t } = useTranslation();

  let location = useLocation();
  let path = location.pathname !== '/' ? location.pathname : '';
  return (
    <div className="card">
      {trans && <span className="card__title">{t(id)}</span>}
      {!trans && <span className="card__title">{title}</span>}
      <Link to={`${path}/${id}`} className="card__link">
        <img src={icon} alt="icon"  className="card__icon"/>
      </Link>
    </div>
  )
}

export default Card;