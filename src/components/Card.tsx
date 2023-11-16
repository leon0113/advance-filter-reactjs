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

function Card(props: CardProps) {
  return (
    <section className="card">
      <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" className='card-img' />
      <div className="card-details">
        <h3 className='card-title'>Shoe</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className='total-reviews'>4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$2000</del> $1323
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