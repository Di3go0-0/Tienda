import React from 'react';
import { useLocation } from 'react-router-dom';
import "./product.css";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3000/products/';

function Product() {
  const location = useLocation(); // Obtener la ubicación actual de la página
  const queryParams = new URLSearchParams(location.search); // Obtener los parámetros de la URL
  const id = queryParams.get('id'); // Obtener el valor del parámetro 'id'

  const [products, setProducts] = useState([]); // Estado para almacenar todos los productos
  const [producto, setProducto] = useState(null); // Estado para almacenar el producto encontrado

  useEffect(() => {
    getProducts(); // Llamar a la función getProducts al montar el componente
  }, []);

  // Función para obtener todos los productos
  const getProducts = async () => {
    try {
      const res = await axios.get(URI); // Realizar la petición GET a la URI correspondiente
      setProducts(res.data); // Actualizar el estado 'products' con los datos recibidos
    } catch (error) {
      // Manejar el error en caso de que la petición falle
    }
  };

  useEffect(() => {
    // Realizar la búsqueda del producto cuando el estado 'products' o 'id' cambien
    if (products.length > 0 && id) {
      const foundProduct = products.find(product => product.id === id); // Buscar el producto por su ID
      setProducto(foundProduct); // Actualizar el estado 'producto' con el producto encontrado
    }
  }, [products, id]);

  if (!producto) {
    // Si el producto aún no se ha encontrado, se retorna null o puedes manejarlo de otra forma
    return null;
  }

  // Desestructurar las propiedades del producto para su uso posterior
  const { name, description, img1, img2, img3, price } = producto;

  return (
    <div className='product'>
        <h1>{name}</h1>
        <div className="containerImage">
            <div className="image">
                <ul>
                    <li><img src={img1} alt={`image1`} /></li>
                    <li><img src={img2} alt={`image2`} /></li>
                    <li><img src={img3} alt={`image3`} /></li>
                </ul>
            </div>
      </div>
        <div className='containerDescription'>
            <div className='content'>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Precio: {price}</p>
                <a href ="/" class="button">Agregar</a> {/* es donde se grega al carrito */}
            </div>
        </div>
    </div>
  );
 };
export default Product;