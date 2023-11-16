/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '../components/Card';
import './Products.css';

interface prop {
  result: any
}

function Products({ result }: prop) {
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  )
}

export default Products