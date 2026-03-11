import { useState } from "react";
import './App.css';
import Nav from './nav.jsx';
import About from  './About.jsx'
import Home from './homepage.jsx'

function App2(){
    const [page, setPage] = useState("main")
    return(
        <>
        <Nav setPage={setPage}/>
        {page === "about" && <About />}
        {page === "main" && <Home />}
        </>
    )
}
export default App2