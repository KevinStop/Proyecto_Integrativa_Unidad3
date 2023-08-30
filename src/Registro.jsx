import React, { useState } from 'react'
import LibroForm from './LibroForm'
import ListaLibros from './ListaLibros'
import './registro.css'

function App() {
  const [libros, setLibros] = useState([]);

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
  };

  return (
    <div className="App">
      <h1>Registro Libros</h1>
      <LibroForm agregarLibro={agregarLibro} />
      <ListaLibros libros={libros} />
    </div>
  );
}

export default App;