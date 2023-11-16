/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar';
//data
import productsData from './db/data.js';
import Card from './components/Card.js'

interface Product {
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
  // Add other properties if present in your actual data
}

function App() {
  const products: Product[] = productsData;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter 
  const [query, setQuery] = useState("");

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter((product: { title: string }) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // -------------Radio Filters--------------
  const handleChange = (e: { target: { value: SetStateAction<null> } }) => {
    setSelectedCategory(e.target.value);
  }

  //-------------Button filters----------------
  const handleClick = (e: { target: { value: SetStateAction<null> } }) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products: any, selected: any, query: string) {
    let filteredProducts: Product[] = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }


    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recommended />
      <Products />
    </>
  )
}

export default App
