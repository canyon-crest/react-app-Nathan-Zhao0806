import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './nav';
import React from 'react';
import { useState } from 'react';
import './index.css';
import App from './App.jsx'
import Card from './Card.jsx'
import Comment from './comment.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
