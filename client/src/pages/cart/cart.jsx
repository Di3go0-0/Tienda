import React, { useState, useEffect } from "react";
import axios from 'axios';
import './cart.css';

const API_URL = 'https://example.com/api/products'; // URL de tu servidor web

function ShoppingCart({ products }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar el contenido del carrito desde el servidor al cargar el componente
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/cart`); // Realizar una solicitud GET al servidor para obtener los productos del carrito
      setCartItems(response.data); // Actualizar el estado cartItems con los datos obtenidos del servidor
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      await axios.post(`${API_URL}/cart`, product); // Realizar una solicitud POST al servidor para agregar un producto al carrito
      fetchCartItems(); // Volver a cargar el contenido del carrito después de agregar un producto
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };

  const removeFromCart = async (product) => {
    try {
      await axios.delete(`${API_URL}/cart/${product.id}`); // Realizar una solicitud DELETE al servidor para eliminar un producto del carrito
      fetchCartItems(); // Volver a cargar el contenido del carrito después de eliminar un producto
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price; // Sumar el precio de cada producto al total
    });
    return total;
  };

  return (
    <div>
      <h2>Shoping Cart</h2>

      {cartItems.length > 0 ? ( // Verificar si el carrito tiene elementos
        <div>
          <ul>
            {cartItems.map(item => ( // Mostrar los elementos del carrito
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>

          <p>Total: ${calculateTotal()}</p>
        </div>
      ) : (
        <p>Empty cart</p> // Mostrar mensaje de carrito vacío
      )}

      <h3>Products available</h3>

      <ul>
        {products.map(product => ( // Mostrar los productos disponibles
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
