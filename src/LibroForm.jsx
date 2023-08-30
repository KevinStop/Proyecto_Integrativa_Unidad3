import React, { useState } from 'react';

function LibroForm({ agregarLibro }) {
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleImagenChange = (e) => {
    const selectedImage = e.target.files[0];
    setImagen(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && imagen) {
      // Crea una instancia de FileReader para leer la imagen cargada.
      const reader = new FileReader();
      reader.onload = (event) => {
        const nuevoLibro = {
          titulo,
          imagen: event.target.result,
        };
        agregarLibro(nuevoLibro);
        setTitulo('');
        setImagen(null);
      };
      reader.readAsDataURL(imagen);
    }
  };

  return (
    <div>
      <h2>Registrar Nuevo Libro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del Libro"
          value={titulo}
          onChange={handleTituloChange}
          style={{ marginRight: '1rem' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImagenChange}
          style={{ marginRight: '1rem' }}
        />
        <button style={{marginLeft: '0.5rem'}} type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default LibroForm;