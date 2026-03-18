import React, { useState } from 'react';
import Nav from './nav';
import './index.css';
import App from './App.jsx';
import Card from './Card';
import Comment from './comment.jsx';
import GoogleLogin from './GoogleLogin.jsx';

function Home() {
  const [apiData, setapiData] = useState("");

  const fetchadvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.slip && data.slip.advice) {
        setapiData(data.slip.advice);
      } else {
        console.error("Unexpected response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <>
    <GoogleLogin />
      <Card name="Apples" description="This is apple!" />
      <Card name="Banana" description="BANANANANANA!" />
      <Card name="Grapes" description="This is grapes!" />
      <App />
      <p>I create this website, I don't know wat to add here so I just drop some apples and bananas.</p>
      <button onClick={fetchadvice}>Want advice?</button>
      {apiData && <p>{apiData}</p>}
      <footer>
        <Comment />
        <p> &copy; 2026 Nathan website</p>
      </footer>
    </>
  );
}

export default Home;
