import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Getmethod from './Hooks/Getmethod';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Getmethod/>
    </BrowserRouter>
  </React.StrictMode>
);

