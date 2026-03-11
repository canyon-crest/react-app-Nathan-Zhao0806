import './nav.css'
import { useState } from 'react'

function Nav({setPage}){
    return(
        <div className='navibar'>
            <ul>
                <li onClick={() => setPage("main")}>Home</li>
                <li onClick={() => setPage("About")}>About</li>
                <li onClick={() => setPage("")}>Contact</li>
            </ul>
        </div>
    )
}
export default Nav
