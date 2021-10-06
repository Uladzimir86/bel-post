import './footer.scss';
import LogoPost from '../../assets/icons/logo_post.png';
import LogoTehno from '../../assets/icons/logo_tehno_sky.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row footer__row_post">
        <div className="footer__text">
          Национальный оператор почтовой связи Республики Беларусь 
        </div>
        <img src={LogoPost}  alt="logo of bel post" className="footer__logo"></img>
        <div className="footer__text">
          <a href="https://shop.belpost.by/" className="footer__link">
            Покупайте белорусские товары на shop.belpost.by
          </a>
        </div>
      </div>
      <div className="footer__row footer__row_tehno">
        <div className="footer__text">
          Разработано компанией
        </div>
        <img src={LogoTehno}  alt="logo of tehno sky" className="footer__logo"></img>
        <div className="footer__text">
          <a href="https://high-tech.by/" className="footer__link">
            High-tech.by
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;