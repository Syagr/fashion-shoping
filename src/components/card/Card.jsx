import styles from './Card.module.css';
import cat01Img from './../../img/categories/cat-01.jpg'
import arrowImg from './../../img/icons/arrow.svg'

const Card = (props) => {
	
	return (
    <div className={styles.card}>
      <div className="card__container">
      <a href="#" className={styles.card__link}></a>
        <img className={styles.card__img} src={props.img} alt="category..." />
        <div className="styles card__body">
          <div className="styles card__text">
            <div className="styles card__title">{props.title}</div>
            <div className="styles card__muted">Explore Now</div>
          </div>
          <div className="styles card__icon">
            <img src={arrowImg} alt="open" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Card;