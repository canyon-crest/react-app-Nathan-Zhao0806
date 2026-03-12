import React from 'react';
import { useState } from 'react';
import Nav from './nav';
import './index.css'
const gmaillink = (
    <a href='www.gmail.com' target="_blank" rel="noopener noreferrer">Here</a>);
function Contract (){
    return(
        <>
        <p>My email is nathanz0806@gmail.com !!!!!!</p>
        <p>Click <gmaillink>heres</gmaillink> to send me an email</p>
        </>
    );
}
export default Contract;
