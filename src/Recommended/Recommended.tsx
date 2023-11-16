/* eslint-disable @typescript-eslint/no-explicit-any */
import Buttons from '../components/Buttons';
import './Recommended.css';

interface prop {
  handleChange: any
}


function Recommended({ handleChange }: prop) {
  return (
    <>
      <div>
        <h2 className="recommended-title ">Recommended</h2>
        <div className="recommended-flex">
          <Buttons OnClickHandler={handleChange} value='' title='All Products' />
          <Buttons OnClickHandler={handleChange} value='Nike' title='Nike' />
          <Buttons OnClickHandler={handleChange} value='Adidas' title='Adidas' />
          <Buttons OnClickHandler={handleChange} value='Puma' title='Puma' />
          <Buttons OnClickHandler={handleChange} value='Vans' title='Vans' />
        </div>
      </div>
    </>
  )
}

export default Recommended