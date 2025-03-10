import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Elenco from './pages/Elenco/elenco';
import Links from './pages/Links/links';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/elenco' element ={<Elenco />} />
        <Route path='/links' element ={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;