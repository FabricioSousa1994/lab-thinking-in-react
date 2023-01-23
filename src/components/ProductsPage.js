import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  function handleSearch(keyword) {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setProducts(filteredProducts);
  }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}/>
        <ProductTable products = {products}/>
      </div>    
  )
}

export default ProductsPage