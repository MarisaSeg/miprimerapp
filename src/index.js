import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Boton from "./Boton";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="uno" >
    <h1  numero="Creación de primer componente" />
    <Boton  numero="anterior"/>
    <Boton  numero={1} />
    <Boton  numero={2} />
    
    <Boton  numero="Posterior"/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
