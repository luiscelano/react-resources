import React from 'react';
import ReactDOM from 'react-dom/client';
import Ejemplo1 from './example1';
import Ejemplo2 from './example2';
import Ejemplo3 from './example3';
import Ejemplo4 from './example4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ejemplo1 /> */}
    {/* <Ejemplo2 /> */}
    {/* <Ejemplo3 /> */}
    <Ejemplo4 />
  </React.StrictMode>
);
