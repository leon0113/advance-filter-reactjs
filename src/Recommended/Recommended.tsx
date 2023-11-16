/* eslint-disable @typescript-eslint/no-explicit-any */
import Buttons from '../components/Buttons';
import './Recommended.css';

interface prop {
  handleClick: any
}


function Recommended({ handleClick }: prop) {
  return (
    <>
      <div>
        <h2 className="recommended-title ">Recommended</h2>
        <div className="recommended-flex">
          <Buttons OnClickHandler={handleClick} value='' title='All Products' />
          <Buttons OnClickHandler={handleClick} value='Nike' title='Nike' />
          <Buttons OnClickHandler={handleClick} value='Adidas' title='Adidas' />
          <Buttons OnClickHandler={handleClick} value='Puma' title='Puma' />
          <Buttons OnClickHandler={handleClick} value='Vans' title='Vans' />
        </div>
      </div>
    </>
  )
}

export default Recommended