import './nav.css'
import { useState } from 'react'

function Nav({setPage}){
    return(
        <div className='navibar'>
            <ul>
                <li onClick={() => setPage("main")}>Home</li>
                <li onClick={() => setPage("about")}>About</li>
                <li onClick={() => setPage("contact")}>Contact</li>
            </ul>
        </div>
    )
}
export default Nav
