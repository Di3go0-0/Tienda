import React from "react";
import { useNavigate } from "react-router-dom";

function Producto(props) {
    const { name, precio, img1, img2, img3 } = props.info;
    const navigate = useNavigate();

    const navigateProduct = () => {
        navigate(`/product?name=${name}`);
    };
    return (
        <div className="producto">
            <div className="slide-var">
                <ul>
                    <li><img id="img" src={img1} alt={name} /></li>
                    <li><img id="img" src={img2} alt={name} /></li>
                    <li><img id="img" src={img3} alt={name} /></li>
                </ul>
            </div>
            <div className="descripcion">
                <p>{name}</p>
                <p>{precio}</p>
                <button class = "btn-edeptec"  type="button" onClick={navigateProduct} > Ver </button>
            </div>
        </div>
    )
}

export default Producto;