import { useState } from "react";
import './App.css';
import Nav from './nav.jsx';
import About from  './About.jsx'
import Home from './homepage.jsx'
import Contract from './contract.jsx'


function App2(){
    const [page, setPage] = useState("main")
    return(
        <>
        <Nav setPage={setPage}/>
        {page === "about" && <About />}
        {page === "main" && <Home />}
        {page === "contract" && <Contract />}
        </>
    )
}
export default App2