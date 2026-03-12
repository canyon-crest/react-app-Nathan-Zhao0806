import React from 'react';
import { useState } from 'react';
import Nav from './nav';
import Card from './Card';
import './index.css'

function About(){
    return (
    <>
    <Nav />
    <p>This is my page, I am Nathan Z</p>
    <Card  name="Myself!" description="Add me into your cart!"/>
    </>
    );
}
export default About;


