import './Categoris.css';


function Categoris() {
  return (
    <>
      <h2 className='sidebar-title'>Categories</h2>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className='checkmark'></span>Sneakers
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className='checkmark'></span>Sandals
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className='checkmark'></span>Heels
        </label>
        {/* <label className='sidebar-label-container'>
          <input type="radio" name='text' />
          <span className='checkmark'></span>All
        </label> */}
      </div>

    </>
  )
}

export default Categoris