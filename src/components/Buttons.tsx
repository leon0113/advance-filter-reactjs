/* eslint-disable @typescript-eslint/no-explicit-any */

interface props {
  OnClickHandler: any,
  value: string,
  title: string
}

function Buttons({ OnClickHandler, value, title }: props) {
  return (
    <button onClick={OnClickHandler} value={value} className="btns">{title}</button>
  )
}

export default Buttons