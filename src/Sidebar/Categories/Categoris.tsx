/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Radio from '../../components/Radio';
import './Categoris.css';

interface prop {
  handleChange: any
}

function Categoris({ handleChange }: prop) {
  return (
    <>
      <h2 className='sidebar-title'>Categories</h2>

      <div>
        {/* <label className='sidebar-label-container'>
          <input onChange={handleChange} value="" name='test' type="radio" />
          <span className='checkmark'></span>All
        </label> */}
        <Radio
          handleChange={handleChange}
          value=""
          title='All'
          name='test'
        />
        <Radio
          handleChange={handleChange}
          value="sneakers"
          title='Sneakers'
          name='test'
        />
        <Radio
          handleChange={handleChange}
          value="flats"
          title='Flats'
          name='test'
        />
        <Radio
          handleChange={handleChange}
          value="sandals"
          title='Sandals'
          name='test'
        />
        <Radio
          handleChange={handleChange}
          value="heels"
          title='Heels'
          name='test'
        />


      </div>

    </>
  )
}

export default Categoris