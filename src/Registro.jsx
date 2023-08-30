import React, { useState } from 'react';
import LibroForm from './LibroForm';
import ListaLibros from './ListaLibros';
import './components/Registro.css';

function App() {
  const [libros, setLibros] = useState([]);

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Registro de Libros</h1>
      </header>
      <main className="app-main">
        <LibroForm agregarLibro={agregarLibro} />
        <ListaLibros libros={libros} />
      </main>
    </div>
  );
}

export default App;