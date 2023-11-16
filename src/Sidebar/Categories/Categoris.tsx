/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Input from '../../components/Input';
import './Categoris.css';

interface prop {
  handleChange: any
}

function Categoris({ handleChange }: prop) {
  return (
    <>
      <h2 className='sidebar-title'>Categories</h2>

      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} value="" name='test' type="radio" />
          <span className='checkmark'></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title='Sneakers'
          name='test'
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title='Flats'
          name='test'
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title='Sandals'
          name='test'
        />
        <Input
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