/* eslint-disable @typescript-eslint/no-unused-vars */
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from "react-icons/ci";

interface CardProps {
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  // ... other props if applicable
}

function Card({ img, title, star, reviews, prevPrice, newPrice }: CardProps) {
  return (
    <section className="card">
      <img src={img} alt="shoe" className='card-img' />
      <div className="card-details">
        <h3 className='card-title'>{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className='total-reviews'> {reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <CiShoppingCart className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Card