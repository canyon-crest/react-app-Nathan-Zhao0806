import React, { useState } from 'react';
import Nav from './nav';
import Card from './Card';
import './index.css';
function About(){
const [apiData, setapiData] = useState('');

const fetchDogImage = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.message) {
      setapiData(data.message);
    } else {
      console.error('Unexpected response structure:', data);
    }
  } catch (error) {
    console.error('Error fetching dog image:', error);
  }
};
return(
    <>
    <p>This is my page, I am Nathan Z</p>
    <p>I am a high school student and i'm doing some pages with react app. 
      so I create this page to introduce myself.
    </p>
    <p>You can create some dog images here!</p>
    
    <button onClick={fetchDogImage}>Fetch Dog Image</button>
    {apiData && <img src={apiData} alt="Random dog" width={200} height={200}/>}
    <p>Here to add me into your cart!</p>
    <Card  name="Myself!" description="Add me into your cart!"/>

    <footer><p>
        &copy; 2026 Nathan website</p></footer>
    </>);
}
export default About;


