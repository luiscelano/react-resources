import React from 'react';
import ReactDOM from 'react-dom/client';
import Ejemplo1 from './example1';
import Ejemplo2 from './example2';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Ejemplo1 /> */}
      <Ejemplo2 />
    </Provider>
  </React.StrictMode>
);
