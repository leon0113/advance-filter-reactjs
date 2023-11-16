/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../../components/Input';
import './Price.css';
interface prop {
  handleChange: any
}

function Price({ handleChange }: prop) {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} value="" name='test' type="radio" />
        <span className='checkmark'></span>All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title='$0-$50'
        name='test2'
      />
      <Input
        handleChange={handleChange}
        value={50}
        title='$50-$100'
        name='test2'
      />
      <Input
        handleChange={handleChange}
        value={50}
        title='$100-$150'
        name='test2'
      />
      <Input
        handleChange={handleChange}
        value={50}
        title='$150+'
        name='test2'
      />
    </div>
  )
}

export default Price