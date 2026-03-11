import './nav.css'
import { React } from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <div className='navibar'>
            <ul>
<<<<<<< HEAD
                <li>Home</li>
                <li href='./main2.jsxs'>About</li>
                <li>Contact</li>
=======
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
>>>>>>> 25da354 (add the nav bar)
            </ul>
        </div>
    )
}
export default Nav
