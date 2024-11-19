import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al backend
    axios.get('http://localhost:5000/api/usuario')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los usuarios', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );


export default App;
