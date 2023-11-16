interface Product {
    img: string;
    title: string;
    star: JSX.Element; // Assuming JSX.Element for the star property
    reviews: string;
    prevPrice: string;
    newPrice: string;
    company: string;
    color: string;
    category: string;
}

// Define the type for the array exported from data.js
declare const data: Product[];

export default data;