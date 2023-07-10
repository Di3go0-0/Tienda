import React from 'react';
import { useLocation } from 'react-router-dom';
import "./product.css";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3000/products/';

function Product() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
  
    const [product, setProduct] = useState(null);
    useEffect(() => {
      getProducts();
    }, []);
  
    /**
     * Realiza una petición para obtener todos los productos y guarda el producto específico en el estado.
     */
    const getProducts = async () => {
      try {
        const res = await axios.get(URI);
        const products = res.data;
        const foundProduct = products.find((product) => product.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          // Realiza acciones adicionales con el producto obtenido aquí
        }
      } catch (error) {
        // Manejo de errores en caso de que la petición falle
        console.error(error);
      }
    };
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    const { name, description, img1, img2, img3, price } = product;
  

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