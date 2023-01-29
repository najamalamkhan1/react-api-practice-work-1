import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <>
            <div class="container">
                <h1><Link to={'/'} id='logo' > <span id='sp1'>React</span><span id='sp2' >API</span>.com</Link></h1>
                <ul>
                    <li>
                        <Link to={'home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'main'}>Main</Link>
                    </li>
                    <li>
                        <Link to={'about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'contactus'}>Contact us</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav