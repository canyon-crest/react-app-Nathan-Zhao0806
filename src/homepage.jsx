import Nav from './nav';
import React from 'react';
import { useState } from 'react';
import './index.css';
import App from './App.jsx'
import Card from './Card.jsx'
import Comment from './comment.jsx';

function homepage() {
    return(
        <>
         <Nav />
    <Card name="Apples" description="They are apples."/>
    <Card name="Pears" description="They are pears."/>
    <Card name="Grapes" description="They are grapes."/>
    <App />
    <Comment />
    </>
    );
}
export default homepage;