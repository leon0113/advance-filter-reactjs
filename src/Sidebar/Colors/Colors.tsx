/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../../components/Input';
import './Colors.css';

interface prop {
  handleChange: any
}

function Colors({ handleChange }: prop) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Colors</h2>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  )
}

export default Colors