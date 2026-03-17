import React, { useState } from 'react';
import Nav from './nav';
import Card from './Card';
import './index.css'
const {apiData, setapiData} = useState('');
const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setapiData(data.message); // "message" is the field of the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };
  
function About(){
    return (
    <>
    <p>This is my page, I am Nathan Z</p>
    <Card  name="Myself!" description="Add me into your cart!"/>
    <button onClick={fetchDogImage}>Fetch Dog Image</button>
    {apiData && <img src={apiData} alt="Random Dog" />}

    <footer><p>
        &copy; 2026 Nathan website</p></footer>
    </>);
}
export default About;


