import React from 'react';
import style from "./ProductList.module.css"

const ProductList = (props) => {
  const productList = props.products.map((product, index) => {
    return (
      <li key={index}>
        <a href={product.link}><img src={product.img} alt={product.name} /></a>
        <h5>{product.name}</h5>
        <p>{product.desc}</p>
      </li>
    )
  })

  return (
    <ul className={style.ProductList}>
      {productList}
    </ul>
  );
}

export default ProductList;