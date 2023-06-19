import React, { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/router';

const LoginComponent = () => {
  const router = useRouter();

  const handleButtonClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/get_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      // Obtener la respuesta como texto
      const responseText = await response.text();
      //alert(responseText);
      // Extraer el token del texto de respuesta
      const token = JSON.parse(responseText).token;

      console.log('Datos de usuario:', response.data);
      console.log('Token:', token);
      localStorage.setItem('token', token);
      router.push(
        {
          pathname: '/datapage',
        }
      );
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      alert('Se produjo un error al realizar la solicitud de autenticación.' + error);
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className={styles.login_container}>
      <h2>Iniciar sesión</h2>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className={styles.login_input}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.login_input}
          />
        </div>
        <center>
          <button type="submit" className={styles.login_button} onClick={handleButtonClick}>
            Iniciar sesión
          </button>
        </center>
      </form>
    </div>
  );
};

export default LoginComponent;
