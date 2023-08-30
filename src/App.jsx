import React, { useState } from 'react';

import Navbar from '../src/components/navbar';
import BestSellers from '../src/components/card';
import Footer from '../src/components/footer';

function App() {

  return (
    <>
      <Navbar />
      
      <h1>Vite + React</h1>
      <BestSellers /> {}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer /> {/* Agrega el footer */}
    </>
  );
}

export default App;

