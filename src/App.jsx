import React, { useState } from 'react';

import Navbar from '../src/components/navbar';
import BestSellers from '../src/components/card';
import Footer from '../src/components/footer';

function App() {
  const containerStyle = {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowStyle = {
    margin: '20px',
    display: 'flex',
    flexDirection: 'row',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '80%',
    height: 'auto',
  };

  const contentContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };

  const headingStyle = {
    padding: '15px',
    fontFamily: 'monospace',
    color: 'gray',
  };

  const titleStyle = {
    padding: '15px',
  };

  const paragraphStyle = {
    padding: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'lightblue',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <Navbar/>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={imageContainerStyle}>
            <img
              src="https://i.pinimg.com/564x/ac/e9/57/ace9572e87303799a938fbc5ca369f09.jpg"
              style={imageStyle}
              alt=""
            />
          </div>
          <div style={contentContainerStyle}>
            <h2 style={headingStyle}>ACERCA DE NUESTRA BIBLIOTECA</h2>
            <h1 style={titleStyle}>Biblioteca en Línea</h1>
            <p style={paragraphStyle}>
              Únase a nosotros en la Facultad de Educación en el campus de Illinois para un
              campamento de 5 días y 4 noches para explorar métodos de enseñanza innovadores,
              tecnología de educación avanzada y aprendizaje global.
            </p>
            <p style={paragraphStyle}>
              Este campamento está diseñado para estudiantes de secundaria que están considerando
              una carrera en educación. ¡Ven a explorar tus intereses con nosotros!
            </p>
            <button style={buttonStyle}>Leer más</button>
          </div>
        </div>
      </div>
      <BestSellers/>
      <Footer/>
    </div>
  );
}

export default App;

