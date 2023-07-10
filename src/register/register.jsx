import React, { useState } from "react"; // Importa la biblioteca principal de React con la función useState (estado del componente)
import { useNavigate } from "react-router-dom"; // Importa el hook que proporciona la función de navegación
import { RiUserFill, RiMailLine, RiLockPasswordLine } from "react-icons/ri"; // Importa componentes de react-icons/ri
import axios from 'axios'; // Importa la biblioteca axios para realizar solicitudes HTTP
import "./register.css";

const URI = 'http://localhost:3000'; // Define la URI para realizar las solicitudes

function Registration() {
  const navigate = useNavigate(); // Inicializa la función de navegación del enrutador

  const navigateLogin = () => {
    navigate("/login"); // Función para navegar a la página de inicio de sesión
  };

  // Variables de estado y manejadores de cambio correspondientes
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value); // Actualiza el estado de name con el valor del campo de enter
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Actualiza el estado de email con el valor del campo de enter
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Actualiza el estado de password con el valor del campo de enter
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el envío del formulario
    setName(""); // Restablece el estado de name
    setEmail(""); // Restablece el estado de email
    setPassword(""); // Restablece el estado de password
  };

  // Comprueba si los campos de enter tienen valores
  const hasNameValue = name.length > 0;
  const hasEmailValue = email.length > 0;
  const hasPasswordValue = password.length > 0;

  const getUsers = async () => {
    navigate('/register'); // Función para navegar a la página de registro (no estoy seguro por qué se llama en este contexto)
  }

  const store = async (e) => {
    e.preventDefault(); // Evita el envío del formulario
    await axios.post(URI, { user_name: name, password: password, email: email }); // Envía una solicitud POST a la URI con los datos del usuario
    navigateLogin(); // Navega a la página de inicio de sesión
  }

  return (
    <div className="registerContent">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={`inputBox ${hasNameValue ? "labelShifted" : ""}`}>
          <label htmlFor="name">
            <RiUserFill /> Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={`inputBox ${hasEmailValue ? "labelShifted" : ""}`}>
          <label htmlFor="email">
            <RiMailLine /> Email address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={`inputBox ${hasPasswordValue ? "labelShifted" : ""}`}>
          <label htmlFor="password">
            <RiLockPasswordLine /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="btn" type="submit">Check in</button>
        <button className="btn" type="button" onClick={navigateLogin}>
          Log in
        </button>
      </form>
    </div>
  );
}

export default Registration;
