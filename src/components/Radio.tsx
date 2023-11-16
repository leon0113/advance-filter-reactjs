/* eslint-disable @typescript-eslint/no-explicit-any */

interface props {
  handleChange: any,
  value: string | number,
  title: string,
  name: string,
  color?: string
}

function Radio({ handleChange, value, title, name, color }: props) {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className='checkmark' style={{ backgroundColor: color }}></span>{title}
    </label>
  )
}

export default Radio