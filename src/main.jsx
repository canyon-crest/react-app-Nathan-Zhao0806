import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import homepage from './homepage';
import About from './About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<homepage />} />
        <Route path="/about" element={<About />} />
          </Routes>
    </BrowserRouter>
  </StrictMode>,
)
