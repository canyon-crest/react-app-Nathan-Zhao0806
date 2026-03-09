import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import App from './App.jsx'
import Card from './Card.jsx'
import Comment from './comment.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Apples" description="They are apples."/>
    <Card name="Pears" description="They are pears."/>
    <Card name="Grapes" description="They are grapes."/>
    <App />
    <Comment />
  </StrictMode>,
)
