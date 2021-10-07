import { useTranslation } from 'react-i18next';

import './footer.scss';
import LogoPost from '../../assets/icons/logo_post.png';
import LogoTehno from '../../assets/icons/logo_tehno_sky.png';

const Footer = ({handlerLanguage}) => {

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__row footer__row_post">
        <div className="footer__text">
          {t('National postal operator')} 
        </div>
        <img src={LogoPost}  alt="logo of bel post" className="footer__logo" />
        <div className="footer__text">
          <a href="https://shop.belpost.by/" className="footer__link">
            {t('Buy Belarusian goods')}
          </a>
        </div>
      </div>
      <div className="footer__row footer__row_tehno">
        <div className="footer__text">
          {t('Developed by')}
        </div>
        <img src={LogoTehno}  alt="logo of tehno sky" className="footer__logo" />
        <div className="footer__text">
          <a href="https://high-tech.by/" className="footer__link">
            High-tech.by
          </a>
        </div>
      </div>
      <button 
        className="footer__button" 
        type="button" 
        onClick={handlerLanguage}
      >
        RU/EN
      </button>
    </footer>
  )
}

export default Footer;