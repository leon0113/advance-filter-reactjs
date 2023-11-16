/* eslint-disable @typescript-eslint/no-explicit-any */

interface props {
  handleChange: any,
  value: string | number,
  title: string,
  name: string,
  // color: string
}

function Input({ handleChange, value, title, name, }: props) {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className='checkmark'></span>{title}
    </label>
  )
}

export default Input