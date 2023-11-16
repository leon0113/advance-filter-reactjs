/* eslint-disable @typescript-eslint/no-explicit-any */
import Radio from '../../components/Radio';
import './Price.css';
interface prop {
  handleChange: any
}

function Price({ handleChange }: prop) {
  return (
    <>
      <h2 className="sidebar-title price-title">Price</h2>
      <div>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} value="" name='test2' type="radio" />
          <span className='checkmark'></span>All
        </label>

        <Radio
          handleChange={handleChange}
          value={50}
          title='$0-$50'
          name='test2'
        />
        <Radio
          handleChange={handleChange}
          value={100}
          title='$50-$100'
          name='test2'
        />
        <Radio
          handleChange={handleChange}
          value={150}
          title='$100-$150'
          name='test2'
        />
        <Radio
          handleChange={handleChange}
          value={200}
          title='$150+'
          name='test2'
        />
      </div>
    </>
  )
}

export default Price