import React from 'react';

function ListaLibros({ libros }) {
  return (
    <div>
      <h2>Libros Registrados</h2>
      <div className="lista-libros">
        {libros.map((libro, index) => (
          <div key={index} className="libro-card">
            <img src={libro.imagen} alt={libro.titulo} />
            <h3>{libro.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaLibros;