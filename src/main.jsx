import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './nav';
import React from 'react';
import { useState } from 'react';
import './index.css';
import App2 from './App2.jsx'
import Card from './Card.jsx'
import Comment from './comment.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
