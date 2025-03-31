import React from "react";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.ref}>
            <span>{product.description}</span>
            <span>{product.stock}</span>
            <button onClick={() => onEdit(product)}>Editar</button>
            <button onClick={() => onDelete(product.ref)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
