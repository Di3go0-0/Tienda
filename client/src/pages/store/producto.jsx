import React from "react";
import { useNavigate } from "react-router-dom";

function Producto(props) {
    // Desestructurar las propiedades del producto
    const { name, price, img1, img2, img3 , idProduct} = props.info;
    // Obtener la función de navegación
    const navigate = useNavigate();

    // Función para navegar al producto
    const navigateProduct = () => {
        navigate(`/product?id=${idProduct}`);
    };

    return (
        <div className="product">
            <div className="slide-var">
                <ul>
                    {/* Renderizar las imágenes del producto */}
                    <li><img id="img" src={img1} alt={name} /></li>
                    <li><img id="img" src={img2} alt={name} /></li>
                    <li><img id="img" src={img3} alt={name} /></li>
                </ul>
            </div>
            <div className="description">
                {/* Renderizar el nombre y el precio del producto */}
                <p>{name}</p>
                <p>{price}</p>
                {/* Renderizar el botón "Ver" con el evento onClick para navegar al producto */}
                <button className="botton" type="button" onClick={navigateProduct}>Ver</button>
            </div>
        </div>
    );
}

export default Producto;