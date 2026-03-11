import './nav.css'
import { React } from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <div className='navibar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default Nav
