import { useState } from "react"
import ProductRow from "./ProductRow"



function ProductTable(props) {

  return (
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        {props.products.map((product) => {
          return (
            <ProductRow name={product.name} price={product.price} inStock = {product.inStock}/>
          );
        })}
    </table>
  )
}

export default ProductTable