import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav'
import About from './About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" className='rotate'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className='rotate'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// Import React hooks and Firebase functionality
import { useEffect, useState } from 'react';
import { db, auth, provider } from './firebase'; // Custom Firebase config
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'; // Auth methods
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods

function App() {
  // State to hold the logged-in user
  const [user, setUser] = useState(null);

  // State to hold messages from Firestore
  const [messages, setMessages] = useState([]);

  // Monitor authentication status (e.g., login/logout) in real time
  useEffect(() => {
    // Set up a listener that triggers every time the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state with the logged-in user
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Handle Google login using a popup window
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Triggers Google login flow
    } catch (error) {
      console.error('Login failed', error); // Catch and display any login errors
    }
  };

  // Handle logout for the authenticated user
  const handleLogout = async () => {
    try {
      await signOut(auth); // Signs out the current user
      setUser(null); // Clear the user from local state
    } catch (error) {
      console.error('Logout failed', error); // Catch and display logout errors
    }
  };

  // Fetch all messages from the "messages" collection in Firestore
  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, 'messages')); // Get all documents
    const list = snapshot.docs.map(doc => doc.data()); // Convert docs to plain JS objects
    setMessages(list); // Update the messages state
  };

  // Add a new message to Firestore
  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    // Add a new message with the user's name and current timestamp
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: user.displayName,
      timestamp: Date.now()
    })}}
