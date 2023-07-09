import React from "react";

function Producto(props) {
    const {name , precio } = props.info;
    return (
        <div className="producto">
            <div className="slide-var">
                <ul>
                    <li><img id="img" src='https://hips.hearstapps.com/hmg-prod/images/coco-mademoiselle-perfume-chanel-1675113242.png' alt={`imagen-${name}`} /></li>
                    <li><img id="img" src='https://media.vogue.mx/photos/6359591754ceeedb9e917da8/master/w_2200,h_2500,c_limit/Perfumes-Mujer-Irresistible-Givenchy.jpg' alt={`imagen-${name}`} /></li>
                    <li><img id="img" src='https://perfumaste.com/wp-content/uploads/2023/06/perfume-x-de-alhala-para-hombre-100-ml.jpg.webp' alt={`imagen-${name}`} /></li>
                </ul>
            </div>
            <div className="descripcion">
                <p>{name}</p>
                <p>{precio}</p>
                <a class = "btn-edeptec"  href = "/producto?name=fer&descripcion=descripciondefer&precio=10000"> Ver </a>
            </div>
        </div>
    )
}

export default Producto;