import React from 'react';
import { useLocation } from 'react-router-dom';
import "./product.css";

function Product() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const descripcion = queryParams.get('descripcion');
  const precio = queryParams.get('precio');

  return (
    <div className='product'>
        <h1>{name}</h1>
        <div className="containerImage">
            <div className="imagenes">
                <ul>
                    <li><img src='https://hips.hearstapps.com/hmg-prod/images/coco-mademoiselle-perfume-chanel-1675113242.png' alt={`imagen-1`} /></li>
                    <li><img src='https://media.vogue.mx/photos/6359591754ceeedb9e917da8/master/w_2200,h_2500,c_limit/Perfumes-Mujer-Irresistible-Givenchy.jpg' alt={`imagen-2`} /></li>
                    <li><img src='https://perfumaste.com/wp-content/uploads/2023/06/perfume-x-de-alhala-para-hombre-100-ml.jpg.webp' alt={`imagen-3`} /></li>
                </ul>
            </div>
      </div>
        <div className='containerDescripcion'>
            <div className='content'>
                <h3>{name}</h3>
                <p>{descripcion}</p>
                <p>Precio: {precio}</p>
                <a href ="/" class="boton1">Agregar</a>
            </div>
        </div>
    </div>
  );
 };
export default Product;