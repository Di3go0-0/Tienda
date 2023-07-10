import React from "react";
import { useNavigate } from "react-router-dom"; // Import para la navegación
import axios from "axios"; // Import para realizar peticiones
import { useContext, useState, useEffect } from "react"; // Imports para los hooks
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri"; // Imports para los iconos
import "./login.css"; // Import para el CSS

const URI = 'http://localhost:3000/'; // Endpoint de la API para las peticiones

function Login() {
  const navigate = useNavigate(); // Función para la navegación

  const navigateRegister = () => {
    navigate(`/register`); // Navegar a la página de registro
  };

  const navigateShopAddtoCart = () => {
    navigate(`/shop`); // Navegar a la página de tienda
  };

  const navigateEditInventory = () => {
    navigate(`/editInventory`); // Navegar a la página de edición de inventario
  };

  const [enter, Setenter] = useState(''); // Estado para el valor de enter del usuario
  const [enterP, SetenterP] = useState(''); // Estado para el valor de enter de la contraseña
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios

  useEffect(() => {
    getUsers(); // Obtener los usuarios al cargar el componente
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URI); // Obtener los usuarios desde la API
    setUsers(res.data); // Actualizar el estado de los usuarios con los datos obtenidos
  };

  const compare = (e) => {
    e.preventDefault();
    if (users.find((e) => e.user_name === enter && e.password === enterP)) {
      if (enter === 'admin') {
        navigateEditInventory(); // Navegar a la página de edición de inventario si el usuario es administrador
      } else {
        navigateShopAddtoCart(); // Navegar a la página de tienda para los usuarios normales
      }
    } else {
      navigateLogin(); // Navegar a la página de inicio de sesión si el inicio de sesión falla
    }
  };

  const navigateLogin = () => {
    navigate(`/login`); // Navegar a la página de inicio de sesión
  };

  return (
    <div className="loginContent">
      <h1>Login</h1>
      <form onSubmit={compare}>
        <div className={`inputBox ${enter ? "labelShifted" : ""}`}>
          <label htmlFor="email">
            <RiMailLine /> email address:
          </label>
          <input
            type="email"
            id="email"
            value={enter}
            onChange={(e) => Setenter(e.target.value)}
          />
        </div>
        <div className={`inputBox ${enterP ? "labelShifted" : ""}`}>
          <label htmlFor="password">
            <RiLockPasswordLine /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={enterP}
            onChange={(e) => SetenterP(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">Log in</button>
        <button className="btn" type="button" onClick={navigateRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
