import React from 'react';
import { useState } from 'react';
import Nav from './nav';
import './index.css'
const Gmaillink = () =>
    <a href='https://www.gmail.com' target="_blank" rel="noopener noreferrer">Here</a>;
function Contact (){
    return(
        <>
        <p>My email is nathanz0806@gmail.com !!!!!!</p>
        <p>Click <Gmaillink /> to send me an email</p>
        <footer><p>
        &copy; 2026 Nathan website</p></footer>
        </>
    );
}
export default Contact;
