import React, { useState, useContext } from 'react';
import axios from 'axios';
import styles from './login.module.css';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleButtonClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/get_token', {
        username: username,
        password: password
      });
      const data = response.data;
      const token = data.token;

      console.log('Datos de usuario:', response.data);
      console.log('Token:', token);
      localStorage.setItem('token', token);
      router.push(
        {
          pathname: '/datapage',
        }
      );
      //router.push(`/datalist?token=${token}`);
      //router.push('/datalist', undefined, { shallow: true, state: { token: token } });
      //alert(`Solicitud de autenticación enviada con éxito.\nUsuario: ${username}\nContraseña: ${password}\nDestino: http://localhost/get_token`);
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
        <button type="submit" className={styles.login_button} onClick={handleButtonClick}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
