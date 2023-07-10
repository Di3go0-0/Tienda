import React from "react";
import './store.css';
import Producto from './producto.jsx';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products/'; //se hacen las peticiones aqui coloque el dominio de su aplicacion

function Store() {
  const[products,setProducts] = useState([]) //se guardan todos los productos
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => { //se hace la peticion para todos los usuarios
        const res = await axios.get(URI)
        setProducts(res.data)
    }

  // prueba sin base de datos
  // const products = () => {
  //   let product = [];
  //   for (let i = 0; i < 10; i++) {
  //     let object = {
  //       name: `nombre-${i+1} `,
  //       img1: `../imagenes/imagen1.jpg`,
  //       img2: `../imagenes/imagen2.jpg`,
  //       img3: `../imagenes/imagen3.jpg`,
  //       descripcion: `descripcion del producto numero ${i+1}`,
  //       precio: `precio-${i+1}`,
  //       // enlace: `producto?name=${this.name}&descripcion=${this.descripcion}&precio=${this.precio}`
  //     };
  //     product.push(object);
  //   }
  //   return product;
  // };
  // const productos = products();
  return (
    <div className="shop">
      <h1>productos</h1>
      <div className='contenedorProductos'>
        {productos.map((produc) => (
          <Producto info={produc} />
        ))}
      </div>
    </div>
  );
}

export default Store;

