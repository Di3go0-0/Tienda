import React from 'react';
import axios from 'axios';
import './cart.css';

function CartItem({ product, removeFromCart }) {
  const handleRemoveFromCart = async () => {
    try {
      await axios.delete(`https://example.com/api/cart/${product.id}`); // Realizar una solicitud DELETE al servidor para eliminar un producto del carrito
      removeFromCart(product.id); // Llamar a la función removeFromCart pasada como prop para actualizar el estado del carrito en el componente padre
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
}

export default CartItem;

