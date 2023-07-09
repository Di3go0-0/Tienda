import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function cartItem({ product }) {
  const { removeFromCart } = useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
      </div>
      <button onClick={handleRemoveFromCart}>Remover</button>
    </div>
  );
}

export default cartItem;
