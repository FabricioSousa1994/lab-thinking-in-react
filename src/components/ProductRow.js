import { useState } from "react"

function ProductRow(props) {

    function isInStock (inStock) {
        if (inStock) {
            return <td>{props.name}</td>;
        } else {
            return <td className="outOfStock">{props.name}</td>;
        }
    }

  return (
    <tr>
        {isInStock(props.inStock)}
        <td>{props.price}</td>
    </tr>
  )
}

export default ProductRow