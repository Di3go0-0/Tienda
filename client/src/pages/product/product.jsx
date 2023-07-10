import React from 'react';
import { useLocation } from 'react-router-dom';
import "./product.css";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products/';

function Product() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const[products,setProducts] = useState([]) //se guardan todos los productos
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => { //se hace la peticion para todos los usuarios
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    const data = (products) => {
        products.map((produc) => {
            if(products.id === id) {
                return produc;
            }
        })
        
    }
    const producto = data(products)
    const {name , descripcion , img1 , img2 , img3 , precio } = producto ;

  return (
    <div className='product'>
        <h1>{name}</h1>
        <div className="containerImage">
            <div className="imagenes">
                <ul>
                    <li><img src={img1} alt={`imagen-1`} /></li>
                    <li><img src={img2} alt={`imagen-2`} /></li>
                    <li><img src={img3} alt={`imagen-3`} /></li>
                </ul>
            </div>
      </div>
        <div className='containerDescripcion'>
            <div className='content'>
                <h3>{name}</h3>
                <p>{descripcion}</p>
                <p>Precio: {precio}</p>
                <a href ="/" class="boton1">Agregar</a> {/* es donde se grega al carrito */}
            </div>
        </div>
    </div>
  );
 };
export default Product;