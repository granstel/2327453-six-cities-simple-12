import {Offer} from '../../types/offer';
import {generatePath, Link} from 'react-router-dom';
import '../../types/string-extensions';
import '../../types/number-extensions';
import {AppRoute} from '../../const';

type OfferCardProps = {
  offer : Offer;
  onMouseEnter(): void;
  onMouseLeave(): void;
}

function OfferCard({ offer, onMouseEnter, onMouseLeave }:OfferCardProps): JSX.Element {
  const rating = offer.rating.getPercents();
  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Property, {id : `${offer.id}`})}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">{offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Property, {id : `${offer.id}`})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.capitalizeFirstLetter()}</p>
      </div>
    </article>
  );
}

export default OfferCard;
