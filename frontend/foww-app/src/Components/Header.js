import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/falloutlogo.PNG'

function Header(){
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Fallout Logo" className="logo"></img>
                <span>Army Builder</span>
            </Link>
        </header>
    )
}

export default Header