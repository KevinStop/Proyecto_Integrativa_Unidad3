import React, { useState } from 'react';
import LibroForm from './LibroForm';
import ListaLibros from './ListaLibros';
import './styles/registro.css';

import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';

function App() {
  const [libros, setLibros] = useState([]);

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <header className="app-header">
        <h1>Registro de Libros</h1>
      </header>
      <main className="app-main">
        <LibroForm agregarLibro={agregarLibro} />
        <ListaLibros libros={libros} />
      </main>
      <Footer />
    </div>
  );
}

export default App;