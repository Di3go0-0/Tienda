import React from "react";
import { Link } from "react-router-dom";//se importa para darle direcciones a las paginas
import "./header.css";//se importa el css

function Header() {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">UTPitos</Link>
            </div>
            <div className="fin">
                <div className="links"> 
                    <Link to="/cart"><span class="material-symbols-outlined">shopping_cart</span></Link>
                    <Link to="/logIn"><span class="material-symbols-outlined">face</span></Link>
                </div>
            </div>
        </nav>
    )
};

export default Header;