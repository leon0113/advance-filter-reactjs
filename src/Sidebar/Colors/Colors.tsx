/* eslint-disable @typescript-eslint/no-explicit-any */
import Radio from '../../components/Radio';
import './Colors.css';

interface prop {
  handleChange: any
}

function Colors({ handleChange }: prop) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} value="" name='test1' type="radio" />
        <span className='checkmark all'></span>All
      </label>
      <Radio
        handleChange={handleChange}
        value="black"
        title='Black'
        name='test1'
        color='black'
      />
      <Radio
        handleChange={handleChange}
        value="blue"
        title='Blue'
        name='test1'
        color='blue'
      />
      <Radio
        handleChange={handleChange}
        value="red"
        title='Red'
        name='test1'
        color='red'
      />
      <Radio
        handleChange={handleChange}
        value="green"
        title='Green'
        name='test1'
        color='green'
      />
      <label className='sidebar-label-container'>
        <input onChange={handleChange} value="white" name='test' type="radio" />
        <span className='checkmark' style={{ backgroundColor: "white", border: "2px solid black" }}></span>White
      </label>
    </div>
  )
}

export default Colors