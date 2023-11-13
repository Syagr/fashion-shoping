import './promo.css'
import promoImg from '../../img/images/header-img.jpg';

const Promo = () => {
	return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="promo__title-highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="promo__title-highlight highlight--yellow">
                <span> UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="!" className="promo__btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Promo;