import React from 'react';
import { useState } from 'react';
import Nav from './nav';
import './index.css'
function Contact (){
    const [apiData, setapiData] = useState('');

    const fetchjoke = async () => {
        try {
          const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          // Changed from data.message to data.joke
          if (data && data.joke) {                
            setapiData(data.joke);
          } else {
            console.error('Unexpected response structure:', data);
          }
        } catch (error) {
          console.error('Error fetching joke:', error);
        }
      };      
const Gmaillink = () =>
    <a href='https://www.gmail.com' target="_blank" rel="noopener noreferrer">Here</a>;

    return(
        <>
        <p>My email is nathanz0806@gmail.com !!!!!!</p>
        <p>You can click this button below to create a joke and send me.</p>
        <button onClick={fetchjoke}>Fetch joke</button>
    {apiData && <p>{apiData}</p>}
        <p>Click <Gmaillink /> to send me an email</p>
        <footer><p>
        &copy; 2026 Nathan website</p></footer>
        </>
    );
}
export default Contact;
